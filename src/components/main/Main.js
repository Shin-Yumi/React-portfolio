import { useState } from 'react';
import AboutMain from './AboutMain';
import VisualMain from './VisualMain';
import GalleryMain from './GalleryMain';
import BoardMain from './BoardMain';
import Btns from './Btn';

function Main(props) {
	const [Scrolled, setScrolled] = useState(0);
	const [Pos, setPos] = useState([]);
	return (
		<main id='main'>
			<div className='wrap'>
				<VisualMain />
				<AboutMain Scrolled={Scrolled} Pos={Pos[1]} />
				<GalleryMain />
				<BoardMain />
				<Btns setScrolled={setScrolled} setPos={setPos} />
			</div>
		</main>
	);
}

export default Main;
