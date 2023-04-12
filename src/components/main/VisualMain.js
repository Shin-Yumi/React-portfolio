import { useState } from 'react';
import NavBtns from '../visual/NavBtns';
import Slide1 from '../visual/Slide1';
import Slide2 from '../visual/Slide2';
import Slide3 from '../visual/Slide3';

function VisualMain() {
	const [Active, setActive] = useState(0);
	return (
		<section className='contents mainCont myScroll'>
			<div className='inner'>
				<figure id='visual'>
					{Active === 0 && <Slide1 />}
					{Active === 1 && <Slide2 />}
					{Active === 2 && <Slide3 />}

					<NavBtns setActive={setActive} Active={Active} />
				</figure>
			</div>
		</section>
	);
}

export default VisualMain;
