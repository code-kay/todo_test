import { useEffect, useRef, useState } from "react";
import { timeToString } from "../../../assets/util/timeToString";
import { ButtonContainer, List } from "./List.styled";

function ListTitle({ todoList, setCheckedList }) {
  const handleCheckBoxes = (event) => {
    if (event.target.checked) {
      setCheckedList(
        todoList
          .filter((el) => !el.completedAt)
          .map((el) => Number(el.createdAt))
      );
    } else {
      setCheckedList([]);
    }
  };

  return (
    <List>
      <input onChange={handleCheckBoxes} type="checkbox" />
      <p>나의 할 일</p>
      <div>최초 작성일</div>
      <div>최종 수정일</div>
      <div>완료 일자</div>
    </List>
  );
}

function ListRow({ todo, setTodoList, checkedList, setCheckedList }) {
  const [isEditable, setIsEditable] = useState(false);
  const [inputValue, setInputValue] = useState(todo.content);

  const editTodo = () => {
    const confirm = window.confirm(
      "선택한 할 일의 내용을 수정 완료 하시겠습니까?"
    );
    if (confirm) {
      setTodoList((prev) => {
        const newTodoList = prev.map((el) => {
          if (Number(el.createdAt) === Number(todo.createdAt)) {
            el.content = inputValue;
            el.updatedAt = new Date();
          }
          return el;
        });

        return newTodoList;
      });
    } else {
      setInputValue(todo.content);
    }
    setIsEditable(false);
  };

  const deleteTodo = () => {
    const confirm = window.confirm("해당 할 일을 삭제 하시겠습니까?");
    if (confirm) {
      setTodoList((prev) =>
        prev.filter((el) => Number(el.createdAt) !== Number(todo.createdAt))
      );
    }
  };

  const checkboxHandler = () => {
    if (checkedList.includes(Number(todo.createdAt))) {
      setCheckedList((prev) =>
        prev.filter((el) => el !== Number(todo.createdAt))
      );
    } else {
      setCheckedList((prev) => [...prev, Number(todo.createdAt)]);
    }
  };

  const lengthCheck = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length > 100) {
      alert("할 일은 100자 이내로 작성 하여 주세요.");
      setInputValue(event.target.value.slice(0, 100));
    }
  };

  return (
    <List disabled={todo.completedAt} $isEditable={isEditable}>
      <input
        type="checkbox"
        disabled={todo.completedAt}
        checked={
          !todo.completedAt && checkedList.includes(Number(todo.createdAt))
        }
        onChange={checkboxHandler}
      />
      {isEditable ? (
        <div>
          <input type="text" value={inputValue} onChange={lengthCheck} />
          <div className="input-length">{inputValue.length}/100</div>
        </div>
      ) : (
        <>
          <p>{todo.content}</p>
          <div>{timeToString(todo.createdAt)}</div>
          <div>{timeToString(todo.updatedAt)}</div>
          <div>
            {todo.completedAt ? timeToString(todo.completedAt) : "완료 전"}
          </div>
        </>
      )}

      <ButtonContainer>
        {todo.completedAt ? (
          "기능 완료"
        ) : (
          <>
            {isEditable ? (
              <button onClick={editTodo}>
                수정
                <br />
                완료
              </button>
            ) : (
              <button onClick={() => setIsEditable(true)}>수정</button>
            )}
            <button onClick={deleteTodo}>삭제</button>
          </>
        )}
      </ButtonContainer>
    </List>
  );
}

export { ListTitle, ListRow };
