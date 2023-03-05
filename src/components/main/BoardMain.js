import { useState, useEffect, useRef, memo } from 'react';
import { Link } from 'react-router-dom';

function BoardMain() {
	const board = useRef(null);

	const getLocalData = () => {
		const dummys = [
			{ title: 'Hello3', content: 'Here comes description in detail.' },
			{ title: 'Hello2', content: 'Here comes description in detail.' },
			{ title: 'Hello1', content: 'Here comes description in detail.' },
		];
		const data = localStorage.getItem('post');

		if (data) return JSON.parse(data);
		else return dummys;
	};

	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	useEffect(() => {
		const textBox = board.current.querySelector('.boardTextArea');
		const boardTop = board.current.offsetTop - 80;
		const scroll = window.scrollY;
		const base = -window.innerHeight / 3;

		window.addEventListener('scroll', () => {
			if (scroll >= boardTop + base) textBox.classList.add('on');
			else textBox.classList.remove('on');
		});
	}, []);

	return (
		<section className='boardCont myScroll' ref={board}>
			<div className='inner'>
				<div className='boardWrap'>
					<div className='boardMo'>
						<h1 className='contentsTitle'>Board</h1>
						<div className='boardMoBtn'>
							<Link className='boarLink' to='/board'>
								view
							</Link>
						</div>
					</div>
					<div className='boardBox'>
						<div className='boardTextArea'>
							<p>Hello! This is Board Section</p>
							<p>This is Board Section description</p>
							<p>If you want to go to the board page,</p>
							<p>
								press the view button<span>|</span>
							</p>
						</div>
						<div className='boardBtn'>
							<Link className='boardBtnText' to='/board'>
								view
							</Link>
						</div>
					</div>
				</div>
				<div className='boardInfo'>
					<div className='sectionAccodion'>
						{Posts.map((post, idx) => {
							if (idx >= 3) return null;
							return (
								<div className='tab' key={idx}>
									<input type='radio' name='acc' id={idx} />
									<label htmlFor={idx}>
										<h2>0{idx + 1}</h2>
										<h3>{post.title}</h3>
									</label>
									<div className='tabContents' key={idx}>
										<p>{post.content}</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default memo(BoardMain);
