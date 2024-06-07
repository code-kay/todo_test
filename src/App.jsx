import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import { todos } from "./assets/util/data";
import { Container, Main } from "./App.styled";

function App() {
  const [todoList, setTodoList] = useState(todos);

  return (
    <Container>
      <Header />
      <Main>
        <TodoForm setTodoList={setTodoList} />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </Main>
    </Container>
  );
}

export default App;
