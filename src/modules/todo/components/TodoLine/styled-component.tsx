import styled from "styled-components";

const TodoText = styled.span<{ isDone: boolean }>`
  text-decoration: ${(props) => (props.isDone ? "line-through" : "auto")};
  color: ${(props) => (props.isDone ? "#db3345" : "rgb(234, 88, 12)")};
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 50%;
`;
const TodoDelete = styled.img`
  filter: invert(21%) sepia(87%) saturate(1501%) hue-rotate(340deg)
    brightness(119%) contrast(119%);
  cursor: pointer;
  display: inline-block;
  width: 18px;
  padding-bottom: 4px;
`;
const TodoCheckBox = styled.input`
  margin: 0;
  display: inline-block;
  height: 18px;
  width: 18px;
  margin-right: 12px;
  outline: none;
  border: none;
`;
const TodoButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
`;
const TodoWrapper = styled.div`
  margin: 4px 0;
  height: 78px;
  min-height: 78px;
  padding: 0 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #c2c2c2;
  background-position: center;
  transition: background 0.8s ease-out;
  cursor: pointer;
  &:hover {
    background: #f4f4f4 radial-gradient(circle, transparent 1%, #f4f4f4 1%)
      center/15000%;
  }
  &:active {
    background-color: #e2e2e2;
    background-size: 100%;
    transition: background 0s;
  }
`;

export { TodoText, TodoCheckBox, TodoButtonGroup, TodoDelete, TodoWrapper };
