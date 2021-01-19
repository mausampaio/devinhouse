import '../assets/styles/modal.css';

const Modal = props => {
  const { children, open, onClose } = props;

  if (!open) return null;

  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <header>
          <h3>Cadastro de processo</h3>
          <span class="close" onClick={onClose}>&times;</span>
        </header>
        {children}
      </div>
    </div>
  );
};

export default Modal;
