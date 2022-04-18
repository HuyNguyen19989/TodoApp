import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/todo_Cover.png");
  background-repeat: none;
  background-position: center;
  height: 100vh;
`;

const TodoContainer = styled.div`
  height: 65vh;
  width: 65vw;
  max-width: 1200px;
  background-color: #f3f4f6;
  border-radius: 8px;
  padding: 18px;
  position: relative;
`;

export { Container, TodoContainer };
