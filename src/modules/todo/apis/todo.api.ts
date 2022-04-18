import axios from "axios";
import { Todo } from "../stores/todo.store";

export class TodoApi {
  async getTodoList() {
    return await axios.get(`https://62564d5e8646add390e2a036.mockapi.io/todo/todo-list`).then(res => {
      console.log('GetTodoList', res)
      return res.data;
    })
  }
  async createTodo(todo: Todo): Promise<Todo> {
    return await axios.post(`https://62564d5e8646add390e2a036.mockapi.io/todo/todo-list`, todo).then(res => {
      console.log('CreateTodo',res);
      return {...res.data};
    })
  }
  async updateTodo(todo: Todo): Promise<Todo> {
    return await axios.put(`https://62564d5e8646add390e2a036.mockapi.io/todo/todo-list/${todo.id}`, todo).then(res => {
      console.log('UpdateTodo',res);
      return {...res.data};
    })
  }
  async deleteTodo(id: string): Promise<Todo> {
    return await axios.delete(`https://62564d5e8646add390e2a036.mockapi.io/todo/todo-list/${id}`).then(res => {
      console.log('DeleteTodo',res);
      return {...res.data};
    })
  }
}

const todoApi = new TodoApi();

export default todoApi;
