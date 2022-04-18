import { useObservable } from "@ngneat/react-rxjs";
import splashStore from "../stores/splash.store";

export function useSplash() {
  let splash$ = splashStore.pipe();

  let [splashState] = useObservable(splash$);

  return {
    splashState: splashState.state,
  };
}
