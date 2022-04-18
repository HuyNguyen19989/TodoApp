import styled from "styled-components";

const TodoInputWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
margin-bottom: 14px
`;

const Input = styled.input`
height: 40px;
width: calc(100% - 78px);
font-size: 18px;
line-height: 24px;
outline: none;
padding: 0 8px;
border-radius: 4px;
border-width: 1px;
margin-right: 18px;
`;

const Button = styled.button`
height: 40px;
width: 60px;
font-size: 14px;
line-height: 21px;
padding: 6px 15px;
border: 1px solid #001b3a;
border-radius: 4px;
background-color: #fff;
cursor: pointer;
transition: all 0.3s ease-in-out;
&:hover {
  background-color: #d14f0b;
}
`;

const PosetiveButton = styled(Button)`
border: none;
background-color: #ea580c;
color: #fff;
`;

export { TodoInputWrapper, Input, Button, PosetiveButton};