import { Route, Switch } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';


//main
import Main from './components/main/Main';

//sub
import About from './components/sub/About';
import Map from './components/sub/Map';
import Gallery from './components/sub/Gallery';
import Flickr from './components/sub/Flickr';
import Board from './components/sub/Board';
import Join from './components/sub/Join';
import Contact from './components/sub/Contact';

//sass
import './scss/style.scss';

function App() {
	return (
		<>
			<Switch>
				<Route exact path='/'>
					<Header type={'main'} />
					<Main />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/about' element={<About />}>
				<Route path="/organization" element={<About />}/>
				<Route path="/map " element={<Map />}/>
			</Route>
			<Route path='/gallery'>
				<Gallery />
			</Route>
			<Route path='/flickr'>
				<Flickr />
			</Route>
			<Route path='/board'>
				<Board />
			</Route>
			<Route path='/join'>
				<Join />
			</Route>
			<Route path='/contact'>
				<Contact />
			</Route>

			<Footer />
		</>
	);
}

export default App;
