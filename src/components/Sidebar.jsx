export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div>
          <div>
            <h2>Sidebar Content</h2>
            <p>This is the content of the sidebar.</p>
            <button onClick={onClose}>Close sidebar</button>
          </div>
        </div>
      )}
    </>
  );
};
