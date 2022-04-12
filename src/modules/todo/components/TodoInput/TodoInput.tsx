import { useRef } from "react";
import { useTodoInput } from "../../hooks";

export function TodoInput() {
  const inputRef = useRef(null);
  const { error, createTodo } = useTodoInput();

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
    <div>
      <input ref={inputRef} type="text" onKeyDown={onKeyDown} />
      <button onClick={onAddClicked}>Add</button>
    </div>
  );
}
