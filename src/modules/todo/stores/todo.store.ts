import { Store } from "./store.class";

export class Todo {
  id: number;
  title: string;
  isDone: boolean;
}

export interface TodoState {
  todos: Array<Todo>;
}

class TodoStore extends Store<TodoState> {
  addTodo(todo: Todo) {
    const { todos } = this.getState();
    todos.push(todo);
    this.updateState({ todos });
  }
}

const todoStore = new TodoStore({ todos: [] });
export default todoStore;
