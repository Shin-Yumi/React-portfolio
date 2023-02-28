import { Route, Switch } from 'react-router-dom';
import { useRef, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
//main
import Main from './components/main/Main';

//sub
import Organization from './components/sub/Organization';
import Map from './components/sub/Map';
import Youtube from './components/sub/Youtube';
import Flickr from './components/sub/Flickr';
import Board from './components/sub/Board';
import Join from './components/sub/Join';
import Contact from './components/sub/Contact';

//sass
import './scss/style.scss';

function App() {
	const dispatch = useDispatch();
	const menu = useRef(null);

	const youtubeList = useCallback(async () => {
		const key = 'AIzaSyA6RtwwaDd7lctAx_sccqFQtFnSErCl-jc';
		const playlistId = 'PLzCu2b6-wIU-bhiFEskx9kppoLyJS-l5G';
		const num = 10;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		const result = await axios.get(url);

		dispatch({ type: 'SET_YOUTUBE', payload: result.data.items });
	}, [dispatch]);

	useEffect(() => {
		youtubeList();
	}, [youtubeList]);

	return (
		<>
			<Header menu={menu} />
			<Route exact path='/' component={Main} />

			<Switch>
				<Route path='/about/organization' component={Organization} />
				<Route path='/about/map' component={Map} />
			</Switch>

			<Switch>
				<Route path='/gallery/youtube' component={Youtube} />
				<Route path='/gallery/flickr' component={Flickr} />
			</Switch>

			<Route path='/board' component={Board} />

			<Route path='/join' component={Join} />

			<Route path='/contact' component={Contact} />

			<Footer />
			<Menu ref={menu} />
		</>
	);
}

export default App;
