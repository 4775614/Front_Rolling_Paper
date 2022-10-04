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

const ViewerComponent = ({ item }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };
  const dragEndHandler = () => {
    console.log(position);
  };
  return (
    <Draggable
      defaultPosition={{ x: 20, y: 100 }}
      onDrag={(e, data) => trackPos(data)}
      onStop={(e, data) => dragEndHandler(data)}
    >
      <div className="viewercomponent_box">
        <Viewer initialValue={item} />
      </div>
    </Draggable>
  );
};

export default ViewerComponent;
