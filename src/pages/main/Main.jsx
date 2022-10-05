import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { getLetter, postingLetter } from '../../redux/modules/paperSlice';
import './Main.scss';
import ViewerComponent from '../../components/viewer/ViewerComponent';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Main = (props) => {
  const { width, height } = useWindowSize();
  const dispatch = useDispatch();
  const handleRegisterButton = async () => {
    if (data.name === '' || data.content === '') {
      alert('입력값을 모두 작성해주세요 :)');
    } else {
      if (
        window.confirm(
          '글 작성 후 삭제나 수정이 불가해요! \n글 작성 하시겠어요?'
        )
      ) {
        dispatch(postingLetter(data));
        setData(initialState);
      }
    }
  };
  const newMarkdown = useSelector((state) => state.paper.paper);
  const [confetti, setConfetti] = useState(true);
  const initialState = {
    name: '',
    content: '',
    color: '#FF8B8B',
    left: 0,
    top: 0,
  };

  useEffect(() => {
    dispatch(getLetter());
    let timer = setTimeout(() => setConfetti(false), 9000);
  }, []);
  const [data, setData] = useState(initialState);
  const [color, setColor] = useState();
  const [isSelect, setIsSelect] = useState([
    { key: '0', value: '#FF8B8B', checked: false },
    { key: '1', value: '#FFCA8B', checked: false },
    { key: '2', value: '#ebd357', checked: false },
    { key: '3', value: '#c0e97f', checked: false },
    { key: '4', value: '#81e871', checked: false },
    { key: '5', value: '#648f7d', checked: false },
    { key: '6', value: '#74e8e8', checked: false },
    { key: '7', value: '#8BB2FF', checked: false },
    { key: '8', value: '#8B90FF', checked: false },
    { key: '9', value: '#D38BFF', checked: false },
    { key: '10', value: '#FD8BFF', checked: false },
    { key: '11', value: '#FF8BB5', checked: false },
  ]);

  const onChangeColor = (el) => (event) => {
    const temp = isSelect.map((el, idx) => {
      return { ...el, checked: idx === Number(event?.target.id) };
    });
    setIsSelect(temp);
    setColor(el.value);
    setData({ ...data, color: el.value });
  };
  //이거 그냥 복붙! onChangeHandler & setData만 바꿔주기
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    //...data 기존 데이터 두고 추가시키는 느낌
    setData({ ...data, [name]: value });
  };

  return (
    <div className="main_container">
      {confetti === true ? (
        <Confetti width={width} height={height} style={{ position: 'fixed' }} />
      ) : (
        ''
      )}
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
      <div className="main_subtitle">
        👏🏻 B반 너무 고생하셨습니다!👏🏻 <br />
        🎉소소하게 준비해본 1조의 선물 🎉
      </div>
      <div className="main_third_content">
        🔥 꼭!! 본명으로 글 작성해주세요 🔥<br></br> 익명으로 작성시 삭제될 수도
        있어요
      </div>
      <div className="main_editor_wrap">
        <div className="main_name_wrap">
          <input
            className="main_name"
            type="text"
            placeholder="이름을 적어주세요!"
            name="name"
            value={data.name}
            onChange={onChangeHandler}
            maxLength="6"
          />
          <button className="main_submit_btn" onClick={handleRegisterButton}>
            등록
          </button>
          <div className="main_input_container">
            <div className="main_colorpick_wrap">
              {isSelect.map((el, idx) => (
                <label className="main_colorpick_label" key={el.key}>
                  <input
                    className="main_colorpick_input"
                    type="checkbox"
                    key={el.key}
                    id={idx}
                    onChange={onChangeColor(el)}
                    checked={Boolean(el.checked)}
                  />
                  <div
                    className="main_colorpick_color"
                    style={{ backgroundColor: el.value }}
                  ></div>
                </label>
              ))}
            </div>
            <textarea
              className="main_content"
              name="content"
              placeholder="응원의 한마디 적어주세요 🎉"
              value={data.content}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        {newMarkdown === undefined
          ? ''
          : newMarkdown.map((item, index) => {
              return <ViewerComponent item={item} key={index} />;
            })}
      </div>
    </div>
  );
};

export default Main;
