import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import instance from './instance';


export const postingLetter = createAsyncThunk(
  'postingLetter',
  async (payload, thunkAPI) => {
    try {
      const response = await instance.post(`rolling-pape`, payload);

      if (response.data.success === true) {
        return thunkAPI.fulfillWithValue(response.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  }
);

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
  extraReducers: {},
});

export const { onSaveHandler } = paperSlice.actions;
export default paperSlice.reducer;
