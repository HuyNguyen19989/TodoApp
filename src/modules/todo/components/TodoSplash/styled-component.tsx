import styled, { keyframes } from "styled-components";

const SpashContainer = styled.div<{ splashState: "loading" | "normal" }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.5;
  display: ${(props) => (props.splashState === "loading" ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const sinnperWeb = keyframes`
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const spinner = keyframes`
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  height: 80px;
  width: 80px;
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #4380ab;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: ${sinnperWeb} 1.1s infinite linear;
  animation: ${spinner} 1.1s infinite linear;
`;

export { SpashContainer, Loader };
