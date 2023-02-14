import { Route, Switch } from 'react-router-dom';

//common
import Header from './components/common/Header';
import Footer from './components/common/Footer';

//main
import Visual from './components/main/Visual';
import Contents from './components/main/Contents';

//sub
import About from './components/sub/About';
import Gallery from './components/sub/Gallery';
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
					<Visual />
					<Contents />
				</Route>

				<Route path='/'>
					<Header type={'sub'} />
				</Route>
			</Switch>

			<Route path='/about'>
				<About />
			</Route>
			<Route path='/gallery'>
				<Gallery />
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
