import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Toast 에디터
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
// Toast ColorSyntax 플러그인
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
// Toast-UI Viewer 임포트
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

import ViewerComponent from '../../components/viewer/ViewerComponent';
import { useEffect } from 'react';
import { onSaveHandler } from '../../redux/modules/paperSlice';
import './Main.scss';

const Main = () => {
  const editRef = useRef();
  const dispatch = useDispatch();
  const [markdown, setHtml] = useState('');
  const handleRegisterButton = () => {
    const newHtml = editRef.current?.getInstance().getMarkdown();
    dispatch(onSaveHandler(newHtml));
  };

  return (
    <div className="main_container">
    	<div className="main_title">
					<h1>
						<span>8</span>
						<span>기</span>
						<span>&nbsp;</span>
						<span>B</span>
						<span>반</span>
						<span>&nbsp;</span>
						<span>롤</span>
						<span>링</span>
						<span>페</span>
						<span>이</span>
						<span>퍼</span>
					</h1>
				</div>
				<div div className="main_subtitle">
					👏🏻 B반 너무 고생하셨습니다!👏🏻 <br />
					🎉소소하게 준비해본 1조의 선물 🎉
				</div>
				<div div className="main_content">
					최대한 본명으로 쓰기! 글 클릭하면 댓글도 쓸 수 있어요 gogo~🔥
				</div>
      <div className="main_editor_wrap">
        <Editor
          ref={editRef}
          placeholder="내용을 입력해주세요."
          previewStyle="vertical"
          height="150px"
          initialEditType="wysiwyg"
          hideModeSwitch="true"
          toolbarItems={[['bold', 'italic', 'strike']]}
          plugins={[colorSyntax]} // colorSyntax 플러그인 적용
        ></Editor>
      </div>
      <button onClick={handleRegisterButton}>등록</button>
      <ViewerComponent />
    </div>
  );
};

export default Main;
