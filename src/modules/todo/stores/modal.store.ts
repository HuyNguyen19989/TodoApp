import { Store } from "./store.class";

export interface ModalState {
  state: boolean;
}

class ModalStore extends Store<ModalState> {
}

const modalStore = new ModalStore({ state: false });
export default modalStore;