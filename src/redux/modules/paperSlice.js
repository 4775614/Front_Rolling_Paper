import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
