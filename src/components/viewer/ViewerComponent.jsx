import React, { useRef, useState } from 'react';
// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
// Toast ColorSyntax 플러그인
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
// Toast-UI Viewer 임포트
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import Draggable from 'react-draggable';
import './ViewerComponent.scss';
import Modal from '../modal/Modal';
import { useDispatch } from 'react-redux';
import { patchLetter } from '../../redux/modules/paperSlice';

const ViewerComponent = ({ item }) => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const rollingPaperId = item.id;
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  const dragEndHandler = () => {
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
        <div className="viewercomponent_box" onClick={showModal}>
          <div>{item.name}</div>
          <div style={{color:`${item.color}`}}>{item.content}</div>
        </div>
      </Draggable>
      {modalOpen && <Modal setModalOpen={setModalOpen} item={item} />}
    </>
  );
};

export default ViewerComponent;
