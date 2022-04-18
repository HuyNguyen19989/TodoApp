import { useState } from "react";
import todoService from "../services/todo.service";

export function useTodoInput() {
  const [error, setError] = useState("");

  const createTodo = async (title: string) => {
    
    try {
      await todoService.createTodo(title);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return {
    error,
    createTodo
  };
}
