import { Todo } from "../../stores/todo.store";
import { TodoButtonGroup, TodoCheckBox, TodoDelete, TodoText, TodoWrapper } from "./styled-component";
import  Modal  from "../modal/modal"


interface TodoLineProps {
  todo: Todo;
  updateTodo: (todo: Todo, e: any) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
}

export function TodoLine({ todo, updateTodo, deleteTodo}: TodoLineProps) {
  return (
    <TodoWrapper>
      <TodoText isDone={todo.isDone}>{todo.title}</TodoText>
      <TodoButtonGroup>
        <TodoCheckBox
          type="checkbox"
          onClick={(e) => updateTodo(todo, e)}
          defaultChecked={todo.isDone}
        />
        <TodoDelete
          src="/trash.svg"
          alt="trash icon"
          onClick={() => deleteTodo(todo.id)}
        />
      </TodoButtonGroup>
      <Modal></Modal>
    </TodoWrapper>
  );
}
