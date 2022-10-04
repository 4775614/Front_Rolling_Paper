import React from 'react';
import './Comment.scss';

const Comment = () => {
  return (
    <div>
      <div className="comment_input_wrap">
        <input
          className="comment_input_name"
          placeholder="이름"
          maxLength="5"
        />
        <input
          className="comment_input_comment"
          placeholder="댓글"
          maxLength="100"
        />
        <button className="comment_input_btn">등록</button>
      </div>
      <div className="comment_get_comment_wrap">
        <div className="comment_get_comment_name">이름이들어감</div>
        <div className="comment_get_comment_body">
          댓글 내용이 들어감 호로로로로로로로로롤
        </div>
      </div>
    </div>
  );
};

export default Comment;
