import { useObservable } from "@ngneat/react-rxjs";
import todoStore from "../stores/todo.store";

export function useTodoList(isDone?: boolean) {
  let todos$ = todoStore.pipe();

  let [todoState] = useObservable(todos$);

  return {
    todos: todoState.todos
  };
}
