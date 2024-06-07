import { useState } from "react";
import {
  AddTodoButton,
  FormSection,
  TextAreaContainer,
  TodoTextArea,
} from "./TodoForm.styled";
import styled from "styled-components";

function TodoForm({ setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    const newTodo = {
      content: inputValue,
      createdAt: new Date(),
      updatedAt: new Date(),
      completedAt: null,
    };
    setTodoList((prev) => [newTodo, ...prev]);
    setInputValue("");
    alert("할 일이 등록 되었습니다.");
  };

  const lengthCheck = (event) => {
    setInputValue(event.target.value);
    if (event.target.value.length > 100) {
      alert("할 일은 100자 이내로 작성 하여 주세요.");
      setInputValue(event.target.value.slice(0, 100));
    }
  };

  return (
    <FormSection>
      <TextAreaContainer>
        <TodoTextArea value={inputValue} onChange={lengthCheck} />
        <div>{inputValue.length}/100</div>
      </TextAreaContainer>
      <AddTodoButton onClick={addTodo}>할 일 추가</AddTodoButton>
    </FormSection>
  );
}

export default TodoForm;
