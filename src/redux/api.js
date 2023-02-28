import axios from 'axios';

export const fetchYoutube = async () => {
	const key = 'AIzaSyA6RtwwaDd7lctAx_sccqFQtFnSErCl-jc';
	const playlistId = 'PLzCu2b6-wIU-bhiFEskx9kppoLyJS-l5G';
	const num = 5;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	return await axios.get(url);
};

//youtube api로부터 비동기 데이터를 요청해서 반환하는 순수함수 형태(DOM 제어, 리액트