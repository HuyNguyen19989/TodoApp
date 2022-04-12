import todoApi from "../apis/todo.api";
import todoStore, { Todo } from "../stores/todo.store";

export class TodoService {
  async createTodo(todo: Todo) {
    console.log("createTodo: reach");
    try {
      await todoApi.createTodo(todo);
      todoStore.addTodo(todo);
    } catch (e) {
      console.error("TodoService:createTodo", e);
      throw new Error("Cannot create todo");
    }
  }
}

const todoService = new TodoService();

export default todoService;
