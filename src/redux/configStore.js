import { configureStore } from '@reduxjs/toolkit';
import paper from './modules/paperSlice'

export default configureStore({
	reducer: {
		paper,
	},
});
