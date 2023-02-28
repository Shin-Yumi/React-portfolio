import axios from 'axios';

export const fetchYoutube = async () => {
	const key = 'AIzaSyA6RtwwaDd7lctAx_sccqFQtFnSErCl-jc';
	const playlistId = 'PLzCu2b6-wIU-bhiFEskx9kppoLyJS-l5G';
	const num = 5;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	return await axios.get(url);
};
