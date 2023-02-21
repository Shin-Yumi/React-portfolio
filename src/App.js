import { Route, Switch } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

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
import Community from './components/sub/Community';

//sass
import './scss/style.scss';

function App() {
	return (
		<>
			<Header />
			<Route exact path='/' component={Main} />

			<Switch>
				<Route path='/about/organization' component={Organization} />
				<Route path='/about/map' component={Map}/>
			</Switch>

			<Switch>
				<Route path='/gallery/youtube' component={Youtube} />
				<Route path='/gallery/flickr' component={Flickr}/>
			</Switch>

			<Route path='/board' component={Board} />
			<Route path='/community' component={Community} />

			<Route path='/join' component={Join} />

			<Route path='/contact' component={Contact} />

			<Footer />
		</>
	);
}

export default App;
