import { Store } from "./store.class";

export interface SplashState {
  state: "loading" | "normal";
}

class SplashStore extends Store<SplashState> {
}

const splashStore = new SplashStore({ state: "normal" });
export default splashStore;
