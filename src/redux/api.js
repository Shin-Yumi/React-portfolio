import axios from 'axios';

export const fetchYoutube = async () => {
	const key = 'AIzaSyA6RtwwaDd7lctAx_sccqFQtFnSErCl-jc';
	const playlistId = 'PLzCu2b6-wIU-bhiFEskx9kppoLyJS-l5G';
	const num = 5;
	const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

	return await axios.get(url);
};

export const fetchFlickr = async (opt) => {
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

  return await axios.get(url);
};
