import { useEffect, useRef, useCallback } from 'react';
import Anim from '../assets/anime';

function Btns({ setScrolled, setPos }) {
	const num = useRef(5);
	const pos = useRef([]);
	const btnRef = useRef(null);
	const speed = useRef(500);

	const getPos = useCallback(() => {
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');

		for (const sec of secs) {
			if (matchMedia('screen and (min-width: 1024px)').matches) {
				pos.current.push(sec.offsetTop - 79);
			} else {
				pos.current.push(sec.offsetTop - 59);
			}
		}

		setPos(pos.current);
	}, [setPos]);

	//버튼 활성화 함수
	const activation = useCallback(() => {
		const btns = btnRef.current.children;
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
		const scroll = window.scrollY;
		const base = -window.innerHeight / 3;

		setScrolled(scroll);

		pos.current.forEach((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const sec of secs) sec.classList.remove('on');
				btns[idx].classList.add('on');
				secs[idx].classList.add('on');
			}
		});
	}, [setScrolled]);

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, [getPos, activation]);

	return (
		<ul className='scroll_navi' ref={btnRef}>
			{Array(num.current)
				.fill()
				.map((_, idx) => (
					<li
						key={idx}
						className={idx === 0 ? 'on' : ''}
						onClick={() => {
							new Anim(window, {
								prop: 'scroll',
								value: pos.current[idx],
								duration: speed.current,
							});
						}}
					></li>
				))}
		</ul>
	);
}

export default Btns;