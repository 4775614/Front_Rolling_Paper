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
						<div className="modal_name_emoji">👑</div>
						<div className="modal_name">👉🏻 항해8반짱 👈🏻</div>
						<div className="modal_content">
							8반이짱이야 1조는 더짱이야 하하하ㅏ하핳하하아인냥하세여 안녕하세요
							이게 어떻게 들어가려낭 홍홍홍
						</div>
					</div>
					<Comment />
				</div>
			</div>
		</div>
	);
};

export default Modal;
