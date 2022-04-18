import styled from "styled-components";

const TodoListWrapper = styled.div`
  height: calc(100% - 54px);
  display: flex;
  flex-direction: column;
  overflow-y: auto; 
  &::-webkit-scrollbar {
    display: none;
  }
  & {
    -ms-overflow-style: none;  
    scrollbar-width: none;  
  }
`;

export { TodoListWrapper };