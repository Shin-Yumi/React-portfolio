import { useState } from 'react';
import Header from '../common/Header';
import AboutMain from './AboutMain';
import VisualMain from './VisualMain';
import YoutubeMain from './YoutubeMain';
import FlickrMain from './FlickrMain';
import BoardMain from './BoardMain';
import Btns from './Btn';

function Main(props) {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);
	return (
		<main id='main'>
			<Header type={'main'} menu={props.menu} />
			<div className='wrap'>
				<VisualMain />
				<AboutMain Scrolled={Scrolled} Pos={Pos[1]} />
				<YoutubeMain />
				<FlickrMain />
				<BoardMain />
				<Btns setScrolled={setScrolled} setPos={setPos} />
			</div>
		</main>
	);
}

export default Main;
