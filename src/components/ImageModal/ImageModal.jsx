import Modal from "react-modal";
Modal.setAppElement("#root");
import css from "../ImageModal/ImageModal.module.css"
const customStyles = {
  content: {
    width: "50%",
    height: "80%",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ modalIsOpen, closeModal, currentImage }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <img
        className={css.photo}
        src={currentImage.url}
        alt={currentImage.alt}
      />
      <p>{currentImage.alt}</p>
    </Modal>
  );
};

export default ImageModal;
