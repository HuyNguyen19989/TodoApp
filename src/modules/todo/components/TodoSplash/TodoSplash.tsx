
import { SpashContainer, Loader } from "./styled-component";
import { useSplash } from "../../hooks/useSplash";

export function TodoSplash() {
  const { splashState } = useSplash();
  return (
        <SpashContainer splashState={splashState}>
          <Loader></Loader>
        </SpashContainer>
  );
}