import { useToggle } from '../hooks/useToggle.js';
import { Sidebar } from './Sidebar.jsx';
export const ComponentB = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}>Open sidebar</button>
      <Sidebar isOpen={isOpen} onClose={close} />
    </>
  );
};
