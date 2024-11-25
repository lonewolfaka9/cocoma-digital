import { Toast, ToastContainer } from "react-bootstrap";

const CustomAlert = ({
  show,
  onClose,
  title,
  message,
  position = "top-end",
  variant = "warning",
}) => {
  return (
    <ToastContainer
      className="p-3"
      position={position}
      style={{ zIndex: 1, marginTop: 80 }}
    >
      <Toast
        className="d-inline-block m-1"
        bg={variant}
        onClose={onClose}
        show={show}
        delay={9000}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
          <strong className="me-auto">{title}</strong>
        </Toast.Header>
        <Toast.Body className={"Dark"}>{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomAlert;
