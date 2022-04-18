import { TodoInput } from "./components/TodoInput/TodoInput";
import { TodoList } from "./components/TodoList/TodoList";
import { Container, TodoContainer } from "./styled-component";
import { TodoSplash } from "./components/TodoSplash/TodoSplash";

export function Todo() {
  return (
    <Container>
      <TodoContainer>
        <TodoInput />
        <TodoList />
        <TodoSplash/>
      </TodoContainer>
    </Container>
  );
}
