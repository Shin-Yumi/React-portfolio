import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import youtubeReducer from './redux/youtubeSlice';
import flickrReducer from './redux/flickrSlice';
import menuReducer from './redux/menuSlice';

const store = configureStore({
	reducer: {
		youtube: youtubeReducer,
		flickr: flickrReducer,
		menu: menuReducer,
	},
});

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<Provider store={store}>
				<ScrollToTop />
				<App />
			</Provider>
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
