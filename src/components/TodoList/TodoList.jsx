import { useState } from "react";
import CompleteCheckedButton from "./components/CompleteCheckedButton";
import { Container, Ul } from "./TodoList.styled";
import { ListRow, ListTitle } from "./components/List";

function TodoList({ todoList, setTodoList }) {
  const [checkedList, setCheckedList] = useState([]);
  return (
    <Container>
      <Ul>
        <ListTitle todoList={todoList} setCheckedList={setCheckedList} />
        {todoList.map((el) => (
          <ListRow
            key={Number(el.createdAt)}
            todo={el}
            setTodoList={setTodoList}
            checkedList={checkedList}
            setCheckedList={setCheckedList}
          />
        ))}
      </Ul>
      <CompleteCheckedButton
        checkedList={checkedList}
        setTodoList={setTodoList}
      >
        작업 완료
      </CompleteCheckedButton>
    </Container>
  );
}

export default TodoList;
