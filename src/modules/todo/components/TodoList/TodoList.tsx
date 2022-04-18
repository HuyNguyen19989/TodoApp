import { useTodoList } from "../../hooks";
import { TodoLine } from "../TodoLine/TodoLine";
import { TodoListWrapper } from "./styled-component"; 
export function TodoList() {
  const { todos, updateTodo, visibleModal } = useTodoList();

  return (
    <TodoListWrapper>
      {todos.map((todo) => (
        <TodoLine key={todo.id} todo={todo} updateTodo={updateTodo} visibleModal={visibleModal}/>
      ))}
      
    </TodoListWrapper>
  );
}
