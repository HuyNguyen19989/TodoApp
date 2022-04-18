import { Store } from "./store.class";

export interface ModalState {
  visible: boolean;
  title?: string;
  content?: any;
  footer?: any;
  onClose: any;
  onConfirm?: any;
}

class ModalStore extends Store<ModalState> {
}

const modalStore = new ModalStore({ 
  visible: false,
  title: '',
  content: '',
  footer: undefined,
  onClose: undefined,
  onConfirm: undefined,
 });
export default modalStore;