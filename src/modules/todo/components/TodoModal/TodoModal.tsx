import { useModal } from "../../hooks/useModal";
import Modal from "../modal/modal";

export function TodoModal() {
  const { visible, title, content, footer, onClose, onConfirm } = useModal();
  return (
    <Modal
      visible={visible}
      title={title}
      content={content}
      footer={footer}
      onClose={onClose}
      onConfirm={onConfirm}
    ></Modal>
  );
}
