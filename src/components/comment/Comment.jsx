import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getComment, postingComment } from '../../redux/modules/paperSlice';
import './Comment.scss';

const Comment = ({ rollingPaperId }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		//getProfilThunk 자리에는 Slice에 Thunk 이름
		dispatch(getComment(rollingPaperId));
		//[]를 안쓰면 렌더링이 계속됨. 처음 실행될 때만 렌더링될 수 있게 [] 써주는 것.
		// 보통은 빈값으로 두고, 어떤 행동을 넣어 렌더링이 필요할때 넣어줌
	}, []);
	const initialState = {
		nickname: '',
		comment: '',
	};

	const [data, setData] = useState(initialState);
	const onChangeHandler = (e) => {
		const { name, value } = e.target;
		//...data 기존 데이터 두고 추가시키는 느낌
		setData({ ...data, [name]: value });
	};
	const onPostingHandler = async () => {
		if (data.nickname === '' || data.comment === '') {
			alert('입력값을 모두 작성해주세요 :)');
		} else {
			if (
				window.confirm(
					'글 작성 후 삭제나 수정이 불가해요! \n글 작성 하시겠어요?'
				)
			) {
				dispatch(
					// export const reservationCancelThunk = create..
					postingComment({ rollingPaperId, data })
				);
				setData(initialState);
			}
		}
	};

	const commentGet = useSelector((state) => state.paper.review);
	//state안에 정보기 어디 있는지 console 확인

	return (
		<div className="comment_wrap">
			<div className="comment_input_wrap">
				<input
					className="comment_input_name"
					placeholder="이름"
					maxLength="5"
					name="nickname"
					value={data.nickname}
					onChange={onChangeHandler}
				/>
				<input
					className="comment_input_comment"
					placeholder="예쁜 말 고운 말 쓰기~"
					maxLength="100"
					name="comment"
					value={data.comment}
					onChange={onChangeHandler}
				/>
				<button
					className="comment_input_btn"
					type="submit"
					onClick={onPostingHandler}
				>
					등록
				</button>
			</div>

			{commentGet.length === 0 ? (
				<div className="comment_empty_text">
					✏️ 답글을 남겨주세요 !
				</div>
			) : (
				<div className="comment_get_cooment_container">
					{commentGet
						?.slice(0)
						.reverse()
						.map((item, index) => {
							return (
								<div className="comment_get_comment_wrap" key={index}>
									<div className="comment_get_comment_name" maxLength="6">
										{item.nickname}
									</div>
									<div className="comment_get_comment_body">{item.comment}</div>
								</div>
							);
						})}
				</div>
			)}
		</div>
	);
};

export default Comment;
