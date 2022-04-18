import { useRef } from "react";
import { useTodoInput } from "../../hooks";
import { TodoInputWrapper, Input, PosetiveButton } from "./styled-component"

export function TodoInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { createTodo } = useTodoInput();

  const onKeyDown = async (e: { key: string; target: any }) => {
    if (e.key === "Enter") {
      if (e.target.value) {
        await createTodo(e.target.value);
      }
      e.target.value = "";
    }
  };

  const onAddClicked = async () => {
      if (inputRef?.current) {
        const value = inputRef.current.value;
        if (value) {
          await createTodo(value);
        }
        inputRef.current.value = "";
    }
  };

  return (
    <TodoInputWrapper>
      <Input ref={inputRef} type="text" onKeyDown={onKeyDown} placeholder="Add Todo"/>
      <PosetiveButton onClick={onAddClicked}>Add</PosetiveButton>
    </TodoInputWrapper>
  );
}
