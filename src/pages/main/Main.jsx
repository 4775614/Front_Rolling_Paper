import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSaveHandler } from '../../redux/modules/paperSlice';
import './Main.scss';
import ModalOpen from '../../components/modal/ModalOpen';

const Main = (props) => {
  const editRef = useRef();
  const dispatch = useDispatch();
  const [markdown, setHtml] = useState('');
  const handleRegisterButton = async() => {
    // try {
    //   const response = await dispatch(postingLetter)
    // } catch (error) {
      
    // }
  
  };

  const [data, setData] = useState({ name: '', content: '' });
  const [color, setColor] = useState();
  const [isSelect, setIsSelect] = useState([
    { key: '0', value: '#FF8B8B', checked: false },
    { key: '1', value: '#FFCA8B', checked: false },
    { key: '2', value: '#FFEC8B', checked: false },
    { key: '3', value: '#D3FF8B', checked: false },
    { key: '4', value: '#9BFF8B', checked: false },
    { key: '5', value: '#8BFFCE', checked: false },
    { key: '6', value: '#8BFFFF', checked: false },
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
  };
  //이거 그냥 복붙! onChangeHandler & setData만 바꿔주기
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    //...data 기존 데이터 두고 추가시키는 느낌
    setData({ ...data, [name]: value });
  };
  console.log(data);

  return (
    <div className="main_container">
      <ModalOpen />
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
      <div div className="main_third_content">
        최대한 본명으로 써주세요 🙂 글 클릭하면 댓글도 쓸 수 있어요 gogo~🔥
      </div>
      <div className="main_editor_wrap">
        <div className="main_name_wrap">
          <input
            className="main_name"
            type="text"
            placeholder="당신은 누구십니까~"
            name="name"
            value={data.name}
            onChange={onChangeHandler}
          />
          <button className="main_submit_btn" onClick={handleRegisterButton}>
            등록
          </button>
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
          className='main_content'
            name="content"
            placeholder='한마디 적어주세요'
            value={data.content}
            onChange={onChangeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
