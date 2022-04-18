import { useObservable } from "@ngneat/react-rxjs";
import { useEffect } from "react";
import todoService from "../services/todo.service";
import todoStore, { Todo } from "../stores/todo.store";

export function useTodoList(isDone?: boolean) {
  let todos$ = todoStore.pipe();

  let [todoState] = useObservable(todos$);

  useEffect(() => {
    todoService.getTodoList();
  }, []);

  const updateTodo = async (todo: Todo, event: any) => {
    try {
      await todoService.updateTodo(todo, event.target.checked);
    }
     catch (e) {
      event.target.checked = todo.isDone;
      console.error(e)
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      await todoService.deleteTodo(id);
    } catch (e) {
      console.error(e)
    }
  };

  return {
    todos: todoState.todos,
    updateTodo: updateTodo,
    deleteTodo: deleteTodo,
  };
}
