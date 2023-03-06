import { useState } from 'react';
import AboutMain from './AboutMain';
import VisualMain from './VisualMain';
import YoutubeMain from './YoutubeMain';
import BoardMain from './BoardMain';
import Btns from './Btn';
import FlickrMain from './FlickrMain';

function Main(props) {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);
	return (
		<main id='main'>
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
