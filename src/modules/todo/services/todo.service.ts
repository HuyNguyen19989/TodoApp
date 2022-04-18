import todoApi from "../apis/todo.api";
import splashStore from "../stores/splash.store";
import todoStore, { Todo } from "../stores/todo.store";

export class TodoService {
  async getTodoList() {
    try {
      const todos = (await todoApi.getTodoList()) as unknown as Todo[];
      todoStore.updateState({ todos });
      splashStore.updateState({ state: "normal"})
    } catch (e) {
      console.error("TodoService: getTodoList", e);
      throw new Error("Cannot get todo list");
    }
  }
  async createTodo(title: string) {
    let titleValidated = this.validation(title);
    if (titleValidated) {
      const todo: Todo = {
        id: "",
        title: title,
        isDone: false,
      };
      try {
        splashStore.updateState({ state: "loading"})
        await todoApi.createTodo(todo);
        this.getTodoList();
      } catch (e) {
        console.error("TodoService:createTodo", e);
        throw new Error("Cannot create todo");
      }
    }
  }
  async updateTodo(todo: Todo, isDone: boolean) {
    try {
      splashStore.updateState({ state: "loading"})
      await todoApi.updateTodo({ ...todo, isDone: isDone });
      this.getTodoList();
    } catch (e) {
      console.error("TodoService:updateTodo", e);
      throw new Error("Cannot update todo");
    }
  }
  async deleteTodo(id: string) {
    try {
      splashStore.updateState({ state: "loading"})
      await todoApi.deleteTodo(id);
      this.getTodoList();
    } catch (e) {
      console.error("TodoService:deleteTodo", e);
      throw new Error("Cannot delete todo");
    }
  }
  validation(title: string) {
    const reg = /^[ ]*|[ ]*$/g;
    const newTitle = title.replace(reg, "");
    if (newTitle.length === 0) {
      return false;
    } else {
      return newTitle;
    }
  }
}

const todoService = new TodoService();

export default todoService;
