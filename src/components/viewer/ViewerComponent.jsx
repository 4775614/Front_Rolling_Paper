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
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const ViewerComponent = () => {
  const newMarkdown = useSelector((state) => state.paper?.paper);

  return (
    <div>
      {newMarkdown.map((item, index) => {
        return (
          <div key={index}>
            <Viewer initialValue={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ViewerComponent;
