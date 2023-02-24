import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function BoardMain() {
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
	return (
		<section className='boardCont myScroll'>
			<div className='inner'>
				<div className='boardWrap'>
					<div className='boardMo'>
						<h1 className='contentsTitle'>Board</h1>
						<div className='boardMoBtn'>
							<Link className='boarLink' to='/board'>
								<span className='theArrow left'>
									<span className='shaft'></span>
								</span>
								<span className='linkText'>
									<span className='text'> view </span>
									<span className='theArrow right'>
										<span className='shaft'></span>
									</span>
								</span>
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
						{/* <div className='tab'>
							<input type='radio' name='acc' id='acc1' />
							<label htmlFor='acc1'>
								<h2>01</h2>
								<h3>How do I Apply?</h3>
							</label>
							<div className='tabContents'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis sint
									animi pariatur, porro asperiores reprehenderit, saepe reiciendis similique, fugiat
									cupiditate explicabo minima est deleniti? Mollitia id inventore sapiente
									accusantium!
								</p>
							</div>
						</div>
						<div className='tab'>
							<input type='radio' name='acc' id='acc2' />
							<label htmlFor='acc2'>
								<h2>02</h2>
								<h3>How do I Apply?</h3>
							</label>
							<div className='tabContents'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis sint
									animi pariatur, porro asperiores reprehenderit, saepe reiciendis similique, fugiat
									cupiditate explicabo minima est deleniti? Mollitia id inventore sapiente
									accusantium!
								</p>
							</div>
						</div>
						<div className='tab'>
							<input type='radio' name='acc' id='acc3' />
							<label htmlFor='acc3'>
								<h2>03</h2>
								<h3>How do I Apply?</h3>
							</label>
							<div className='tabContents'>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis sint
									animi pariatur, porro asperiores reprehenderit, saepe reiciendis similique, fugiat
									cupiditate explicabo minima est deleniti? Mollitia id inventore sapiente
									accusantium!
								</p>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
	);
}

export default BoardMain;
