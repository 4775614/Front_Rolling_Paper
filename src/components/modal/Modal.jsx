import React from 'react';
import './Modal.scss';
import { CgClose } from 'react-icons/cg';
import Comment from '../comment/Comment';

const Modal = ({ setModalOpen, item }) => {
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
						<div className="modal_name">👉🏻 {item.name} 👈🏻</div>
						<div className="modal_content">
							{item.content}
						</div>
					</div>
					<Comment />
				</div>
			</div>
		</div>
	);
};

export default Modal;
