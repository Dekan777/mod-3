import { useToggle } from '../hooks/useToggle.js';
import { Modal } from './Modal.jsx';
export const MyComponent = () => {
  const { isOpen, open, close } = useToggle(false);

  return (
    <>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};
