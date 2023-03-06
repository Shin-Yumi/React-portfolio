import { Route, Switch } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as types from './redux/actionType';
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
	const menu = useRef(null);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: types.YOUTUBE.start });
		//초기 데이터 호출시 내 갤러리 opt값을 전달하기 위해서 다음과 같이 액션객체 전달
		dispatch({ type: types.FLICKR.start, Opt: { type: 'user', user: '197649413@N03' } });
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
