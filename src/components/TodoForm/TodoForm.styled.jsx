import styled from "styled-components";

export const FormSection = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
`;

export const TodoTextArea = styled.textarea`
  height: 60px;
  width: 100%;
  resize: none;
  padding: 10px;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;
  div {
    color: gray;
  }
`;

export const AddTodoButton = styled.button`
  width: 100px;
  height: 60px;
`;
