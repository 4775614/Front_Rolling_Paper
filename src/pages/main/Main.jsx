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

const Main = () => {
	const editRef = useRef();
	const [markdown, setHtml] = useState('');
	const handleRegisterButton = () => {
		const newHtml = editRef.current?.getInstance().getMarkdown();
		setHtml(newHtml.toString());
		console.log(editRef.current?.getInstance().getMarkdown());
	};
  const html = `${editRef.current?.getInstance().getHTML()}`
	console.log(markdown);
	return (
		<div>
			<Editor
				ref={editRef}
				placeholder="내용을 입력해주세요."
				previewStyle="vertical"
				height="200px"
				width="200px"
				initialEditType="wysiwyg"
				toolbarItems={[['bold', 'italic', 'strike']]}
				plugins={[colorSyntax]} // colorSyntax 플러그인 적용
			></Editor>
			<button onClick={handleRegisterButton}>등록</button>
			<Viewer initialValue={`${markdown.toString()}`} />
		</div>
	);
};

export default Main;
