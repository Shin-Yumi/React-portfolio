import { Route, Switch } from 'react-router-dom';
import { useRef } from 'react';
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
import { fetchYoutube } from './redux/youtubeSlice';
import { fetchFlickr } from './redux/flickrSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//sass
import './scss/style.scss';

function App() {
	const menu = useRef(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchYoutube());
		dispatch(fetchFlickr());
	}, [dispatch]);

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
