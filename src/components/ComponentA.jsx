// import { useState } from 'react';
import { useToggle } from '../hooks/useToggle.js';
import { Modal } from './Modal.jsx';
export const ComponentA = () => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <button onClick={open}>Open modal</button>
      <Modal isOpen={isOpen} onClose={close} />
    </>
  );
};
