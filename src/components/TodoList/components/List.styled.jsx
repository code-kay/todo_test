import styled from "styled-components";

export const List = styled.li`
  display: grid;
  width: 100%;
  min-height: 40px;
  grid-template-columns: ${(props) =>
    props.$isEditable ? "auto 1fr 120px" : "auto 30% repeat(3, 1fr) 120px"};
  align-items: center;
  gap: 20px;
  ${(props) => (props.disabled ? "color: lightgray;" : null)}
  input {
    height: 40px;
    width: 100%;
    padding: 10px;
    padding-right: 70px;
  }
  .input-length {
    color: gray;
    margin-top: -20px;
    margin-right: 4px;
    text-align: end;
  }
  div {
    text-align: center;
  }
  p {
    word-wrap: break-word;
    ${(props) => (props.disabled ? "text-decoration: line-through;" : null)}
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  button {
    height: 40px;
    width: 50px;
  }
`;
