import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from './instance';


export const postingLetter = createAsyncThunk(
  'postingLetter',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post(`/rolling-paper`, payload);

      if (response.data.success === true) {
        return thunkAPI.fulfillWithValue(response.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

//롤링페이퍼 작성 Post - ("/rolling-paper")
export const addReview = createAsyncThunk(
	'addPaper',
	async (payload, thunkAPI) => {
		try {
			const response = await instance.post(`/rolling-paper`, payload, {
				//2. request리스트 그대로 적어주기
				name: payload.name,
				content: payload.content,
			});
			console.log(response); // 아래 response.data.result 자리에 무엇이 들어갈지 알 수 있음
			if (response.data.success === true) {
				return thunkAPI.fulfillWithValue(response.data.result);
			}
		} catch (error) {
			console.log(error);
		}
	}
);

//롤링페이퍼 전체 조회 Get - ("/rolling-paper")
//롤링페이퍼 상세 조회 Get - ("/rolling-paper/{rollingPaperId}")

//댓글 작성 Post - ("/comments")
//롤링페이퍼마다 댓글 조회 Get - ("/comments/{rollingPaperId}")

const initialState = {
	paper: [],
	error: null,
};

export const paperSlice = createSlice({
	name: 'paperSlice',
	initialState,
	reducers: {
		onSaveHandler: (state, action) => {
			state.paper = [...state.paper, action.payload];
		},
	},
	extraReducers: {
		[addReview.fulfilled]: (state, action) => {
			state.paper = action.payload;
		},
	},
});

export const { onSaveHandler } = paperSlice.actions;
export default paperSlice.reducer;
