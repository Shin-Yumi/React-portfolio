import { Route, Switch } from 'react-router-dom';
import { useCookies } from 'react-cookie';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Menu from './components/common/Menu';
import TopButton from './components/common/TopBtn';
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
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Cookie from './components/common/CookiePopUp';

//sass
import './scss/style.scss';

function App() {
	const dispatch = useDispatch();
	const [openCookie, setOpenCookie] = useState(true);
	const [hasCookie, setHasCookie] = useState(true);
	const [appCookies, setAppCookies] = useCookies();

	const getExpiredDate = (day) => {
		const date = new Date();
		date.setDate(date.getDate() + day);
		return date;
	};

	const closeModalUntilExpires = () => {
		if (!appCookies) return;

		const expires = getExpiredDate(1);
		setAppCookies('MODAL_EXPIRES', true, { path: '/', expires });

		setOpenCookie(false);
	};

	useEffect(() => {
		if (appCookies['MODAL_EXPIRES']) return;
		console.log(appCookies['MODAL_EXPIRES']);
		setHasCookie(false);
	}, [appCookies]);

	useEffect(() => {
		dispatch(fetchYoutube());
		dispatch(fetchFlickr({ type: 'user', user: '197649413@N03' }));
	}, [dispatch]);

	return (
		<>
			<Switch>
				{/* 전역으로 모바일 패널 열고 닫는 state값을 관리하기 때문에 props로 값 전달할 필요없음 */}
				<Route exact path='/' component={Main} />
				<Route path='/' render={() => <Header type={'sub'} />}></Route>
			</Switch>

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
			<Menu />
			<TopButton />
			{openCookie && !hasCookie && (
				<Cookie closeModal={() => setOpenCookie(false)} closeModalUntilExpires={closeModalUntilExpires} />
			)}
		</>
	);
}

export default App;
