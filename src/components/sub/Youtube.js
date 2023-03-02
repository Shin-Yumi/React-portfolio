import Layout from '../common/Layout';
import Modal from '../common/Modal';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

function Gallery() {
	const name = 'Gallery';
	const title = 'Youtube';
	const subTitle = '유투브 갤러리';
	const sub01 = 'youtube';
	const sub02 = 'flickr';
	const expCaption = 'Vogue의 새로운 video를 Youtube에서 만나보세요';
	const frame = useRef(null);
	const open = useRef(null);
	const Vids = useSelector((store) => store.youtube.data);

	const [Index, setIndex] = useState(0);
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
			frame.current.classList.add('on');
		}, 500);
	}, []);

	return (
		<>
			<Layout
				name={name}
				title={title}
				subTitle={subTitle}
				expCaption={expCaption}
				sub01={sub01}
				sub02={sub02}
			>
				<div className='youtube'>
					{Loading && (
						<div className='loading'>
							<div className='dot'></div>
							<div className='dot'></div>
							<div className='dot'></div>
							<div className='dot'></div>
							<div className='dot'></div>
						</div>
					)}
					<div id='youtube' ref={frame}>
						{Vids.map((el, index) => {
							const tit = el.snippet.title;
							const date = el.snippet.publishedAt;

							return (
								<article key={el.id} className='youtubeCont'>
									<Link
										to='/'
										className='pic'
										onClick={(e) => {
											e.preventDefault();
											open.current.open();
											setIndex(index);
										}}
									>
										<img src={el.snippet.thumbnails.high.url} alt={el.snippet.title} />
									</Link>
									<div className='con'>
										<h2>{tit.length > 60 ? tit.substr(0, 60) + '...' : tit}</h2>
										<span>{date.split('T')[0]}</span>
									</div>
								</article>
							);
						})}
					</div>
				</div>
			</Layout>
			<Modal ref={open}>
				<iframe
					title={Vids[Index]?.id}
					src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Gallery;
