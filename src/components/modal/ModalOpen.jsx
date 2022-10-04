import React, { useState } from 'react';
import Modal from './Modal';

const ModalOpen = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <div>
      <button onClick={() => showModal()}>댓글</button>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default ModalOpen;
