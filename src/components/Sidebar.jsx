export const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="sidebar-overlay" onClick={onClose}>
          <div className="sidebar-content" onClick={e => e.stopPropagation()}>
            <h2>Sidebar Content</h2>
            <p>This is the content of the sidebar.</p>
            <button onClick={onClose}>Close sidebar</button>
          </div>
        </div>
      )}
    </>
  );
};
