import { useObservable } from "@ngneat/react-rxjs";
import { useEffect } from "react";
import todoService from "../services/todo.service";
import todoStore, { Todo } from "../stores/todo.store";

export function useTodoList() {
  let todos$ = todoStore.pipe();

  let [todoState] = useObservable(todos$);

  useEffect(() => {
    todoService.getTodoList();
  }, []);

  const updateTodo = async (todo: Todo, event: any) => {
    try {
      todoService.unVisibleModal()
      await todoService.updateTodo(todo, event.target.checked);
    }
     catch (e) {
      event.target.checked = todo.isDone;
      console.error(e)
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      todoService.unVisibleModal();
      await todoService.deleteTodo(id);
    } catch (e) {
      console.error(e)
    }
  };

  const visibleModal = (todo: Todo, actionOb: any, event?: any) => {
    if (!event) {
      todoService.visibleModal(actionOb.title, actionOb.content, () => todoService.unVisibleModal(), () => deleteTodo(todo.id))
    } else (
      todoService.visibleModal(actionOb.title, actionOb.content, () => todoService.unVisibleModal(event), () => updateTodo(todo, event))
    )
  }

  return {
    todos: todoState.todos,
    updateTodo: updateTodo,
    visibleModal: visibleModal,
  };
}
