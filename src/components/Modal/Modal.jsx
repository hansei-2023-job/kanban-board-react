import ReactModal from "react-modal";

const Modal = ({ children, isOpen, style, contentLabel, closeModal }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={style}
      contentLabel={contentLabel}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
