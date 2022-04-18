import { useObservable } from "@ngneat/react-rxjs";
import modalStore from "../stores/modal.store";

export function useModal() {
  let modal$ = modalStore.pipe();

  let [modalState] = useObservable(modal$);

  return {
    visible: modalState.visible,
    title: modalState.title,
    content: modalState.content,
    footer: modalState.footer,
    onClose: modalState.onClose,
    onConfirm: modalState.onConfirm
  };
}