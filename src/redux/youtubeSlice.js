import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//비동기 서버통신으로 데이터를 전달받고 첫 번째 인수로 넣은 문자값으로 내부 액션타입을 자동 생성해 액션객체 생성
export const fetchYoutube = createAsyncThunk('youtube/requestYoutube', async () => {
	const key = 'AIzaSyA6RtwwaDd7lctAx_sccqFQtFnSErCl-jc';
	const playlistId = 'PLzCu2b6-wIU-bhiFEskx9kppoLyJS-l5G';
	const num = 10;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	const response = await axios.get(url);
	return response.data.items;
});

const youtubeSlice = createSlice({
	name: 'youtube',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		//데이터 요청시작
		[fetchYoutube.pending]: (state) => {
			state.isLoading = true;
		},
		//데이터 응답성공
		[fetchYoutube.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		//데이터 응답실패
		[fetchYoutube.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default youtubeSlice.reducer;
