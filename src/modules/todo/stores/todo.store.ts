import { Store } from "./store.class";

export interface Todo {
  id: string;
  title: string;
  isDone: boolean;
}

export interface TodoState {
  todos: Array<Todo>;
}

class TodoStore extends Store<TodoState> {
}

const todoStore = new TodoStore({ todos: [] });
export default todoStore;
