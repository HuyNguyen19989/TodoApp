import { Todo } from "../../stores/todo.store";
import { TodoButtonGroup, TodoCheckBox, TodoDelete, TodoText, TodoWrapper } from "./styled-component";
import  Modal  from "../modal/modal"


interface TodoLineProps {
  todo: Todo;
  updateTodo: (todo: Todo, e: any) => Promise<void>;
  visibleModal: (todo: Todo, actionOb: any, e?:any) => void;
}

export function TodoLine({ todo, updateTodo, visibleModal}: TodoLineProps) {
  const updateOb = {
    title: 'Update Todo status',
    content: 'Do you want to change Todo status?',
  }
  const deleteOb = {
    title: 'Delete Todo status',
    content: 'Do you want to delete Todo?',
  }
  return (
    <TodoWrapper>
      <TodoText isDone={todo.isDone}>{todo.title}</TodoText>
      <TodoButtonGroup>
        <TodoCheckBox
          type="checkbox"
          onClick={(e) => visibleModal(todo, updateOb, e)}
          defaultChecked={todo.isDone}
        />
        <TodoDelete
          src="/trash.svg"
          alt="trash icon"
          onClick={() => visibleModal(todo, deleteOb)}
        />
      </TodoButtonGroup>
      <Modal></Modal>
    </TodoWrapper>
  );
}
