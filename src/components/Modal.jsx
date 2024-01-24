export const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div>
          <div>
            <h2>Modal Content</h2>
            <p>This is the content of the modal.</p>
            <button onClick={onClose}>Close modal</button>
          </div>
        </div>
      )}
    </>
  );
};
