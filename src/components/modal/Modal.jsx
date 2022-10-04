import React from 'react';
import './Modal.scss';
import { CgClose } from 'react-icons/cg';
import Comment from '../comment/Comment';

const Modal = ({ setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="modal_modal">
      <div className="modal_wrap">
        <div className="modal_container">
          <CgClose onClick={closeModal} className="modal_close_icon" />
          <div className="modal_letter_wrap">
            <div>항해8반짱</div>
            <div>
              8반이짱이야 1조는 더짱이야 하하하ㅏ하핳하하아인냥하세여 안녕하세요
              11111111111111111111111111111111111111111111111111111111111
            </div>
          </div>
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default Modal;
