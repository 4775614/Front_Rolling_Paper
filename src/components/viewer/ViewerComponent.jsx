import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './ViewerComponent.scss';
import Modal from '../modal/Modal';
import { useDispatch } from 'react-redux';
import { patchLetter } from '../../redux/modules/paperSlice';
import { FaEnvelope } from 'react-icons/fa';

const ViewerComponent = ({ item }) => {
	const dispatch = useDispatch();
	const [modalOpen, setModalOpen] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const rollingPaperId = item.id;
	const trackPos = (data) => {
		setPosition({ x: data.x, y: data.y });
	};
	const dragEndHandler = (data) => {
		setPosition({ x: data.x, y: data.y });
		dispatch(patchLetter({ rollingPaperId, position }));
	};
	const showModal = () => {
		setModalOpen(true);
	};
	return (
		<>
			<Draggable
				defaultPosition={{ x: item.left, y: item.top }}
				onDrag={(e, data) => trackPos(data)}
				onStop={(e, data) => dragEndHandler(data)}
			>
				<div className="viewercomponent_box">
					<div className="viewercomponent_wrap">
						<div className="viewercomponent_name">
							<FaEnvelope
								className="viewercomponent_icon"
								color="#c9b751"
								onClick={showModal}
							/>
							&nbsp;{item.name}
						</div>
					</div>
					<div
						className="viewercomponent_content"
						style={{ color: `${item.color}` }}
					>
						{item.content}
					</div>
				</div>
			</Draggable>
			{modalOpen && (
				<Modal
					setModalOpen={setModalOpen}
					item={item}
					rollingPaperId={rollingPaperId}
				/>
			)}
		</>
	);
};

export default ViewerComponent;
