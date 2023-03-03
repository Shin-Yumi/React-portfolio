import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//비동기 서버통신으로 데이터를 전달받고 첫 번째 인수로 넣은 문자값으로 내부 액션타입을 자동 생성해 액션객체 생성
export const fetchFlickr = createAsyncThunk('flickr/requestFlickr', async (opt) => {
	// api base url
  const base = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';

  //api method
  const method_interest = 'flickr.interestingness.getList';
  const method_search = 'flickr.photos.search';
  const method_user = 'flickr.people.getPhotos';

  //api key
  const key = 'aa8b086c0a30b1699395af33dd844533';
  const per_page = 30;

  let url = '';

  if (opt.type === 'interest')
    url = `${base}&api_key=${key}&method=${method_interest}&per_page=${per_page}`;
  if (opt.type === 'search')
    url = `${base}&api_key=${key}&method=${method_search}&per_page=${per_page}&tags=${opt.tags}`;
  if (opt.type === 'user')
    url = `${base}&method=${method_user}&api_key=${key}&per_page=${per_page}&user_id=${opt.user}`;

	const response = await axios.get(url);
	
	return response.data.photos.photo;
});

const flickrSlice = createSlice({
	name: 'flickr',
	initialState: {
		data: [],
		isLoading: false,
	},
	extraReducers: {
		//데이터 요청시작
		[fetchFlickr.pending]: (state) => {
			state.isLoading = true;
		},
		//데이터 응답성공
		[fetchFlickr.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
		//데이터 응답실패
		[fetchFlickr.rejected]: (state, action) => {
			state.isLoading = false;
			state.data = action.payload;
		},
	},
});

export default flickrSlice.reducer;
