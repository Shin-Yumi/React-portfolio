import { useState, useEffect, useRef, useCallback, memo } from 'react';
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
		<section className='contents boardCont myScroll'>
			<div className='inner'>
				<article className='contentsHalf boardTitleCont'>
					<div className='bContWrap'>
						<div className='bTitleWrap'>
							<div className='bBox'>
								<h1 className='contentsTitle'>Board</h1>
							</div>
						</div>
						<div className='bTextWrap'>
							<div className='boardDescWrap'>
								<p className='contentsSubTitle'> Write your comments for vogue</p>
								<p className='boardDesc'>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem,
									harum ex laudantium quas nisi quae voluptatum repudiandae at quisquam maiores vero
									itaque sapiente ut sint fugit, molestiae fugiat? Dolorem.
								</p>
							</div>
						</div>
					</div>
				</article>
				<article className='contentsHalf boardListCont'>
					<ul className='boardLists'>
						{Posts.map((post, idx) => {
							if (idx >= 3) return null;
							return (
								<li className='boardList' key={idx}>
									<div className='boardBox'>
										<p className='bListTitle'>{post.title}</p>
										<p className='bListText'>{post.content}</p>
									</div>
								</li>
							);
						})}
						<li className='boardList'>
							<img src={process.env.PUBLIC_URL + '/img/dummy-gallery02.jpg'} alt='' />
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
}
// <p>{post.content}</p>

export default memo(BoardMain);
