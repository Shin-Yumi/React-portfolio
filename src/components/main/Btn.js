import { useEffect, useRef } from 'react';
import Anim from '../assets/anime';

function Btns({ setScrolled, setPos }) {
	const num = useRef(4);
	const pos = useRef([]);
	const btnRef = useRef(null);
	const speed = useRef(500);

	//세로위치값 갱신 함수
	const getPos = () => {
		pos.current = [];
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
    //const header = 
		for (const sec of secs) pos.current.push(sec.offsetTop);
		setPos(pos.current);
	};

	//버튼 활성화 함수
	const activation = () => {
		const btns = btnRef.current.children;
		const secs = btnRef.current.parentElement.querySelectorAll('.myScroll');
		const scroll = window.scrollY;
		const base = -window.innerHeight / 3;
		//부모컴포넌트로부터 전달받은 setScrolled함수로
		//현재 내부적으로 만들어지고 있는 scroll거리값을 부모 Scrolled state에 옮겨담음
		setScrolled(scroll);

		pos.current.forEach((pos, idx) => {
			if (scroll >= pos + base) {
				for (const btn of btns) btn.classList.remove('on');
				for (const sec of secs) sec.classList.remove('on');
				btns[idx].classList.add('on');
				secs[idx].classList.add('on');
			}
		});
	};

	//처음 컴포넌트 마운트시 한번만 이벤트 연결
	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		getPos();
		window.addEventListener('resize', getPos);
		window.addEventListener('scroll', activation);
		return () => {
			window.removeEventListener('resize', getPos);
			window.removeEventListener('scroll', activation);
		};
	}, []);

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
