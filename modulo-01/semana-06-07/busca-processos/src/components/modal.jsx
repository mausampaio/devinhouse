import '../assets/styles/modal.css';

const Modal = props => {
  const { title, children, open, onClose } = props;

  if (!open) return null;

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <header>
          <h3>{title}</h3>
          <span 
            className="close"
            onClick={onClose}
          >
            &times;
          </span>
        </header>
        {children}
      </div>
    </div>
  );
};

export default Modal;
