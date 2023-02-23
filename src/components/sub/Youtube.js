import Layout from '../common/Layout';
import Modal from '../common/Modal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function Gallery() {
	const name = 'Gallery';
	const title = 'Youtube';
	const subTitle = '유투브 갤러리';
	const sub01 = 'youtube';
	const sub02 = 'flickr';
	const expCaption = 'Vogue의 새로운 video를 Youtube에서 만나보세요';
	const frame = useRef(null);
	const open = useRef(null);
	const [Vids, setVids] = useState([]);
	const [Index, setIndex] = useState(0);
	const [Loading, setLoading] = useState(true);

	useEffect(() => {
		const key = 'AIzaSyA6RtwwaDd7lctAx_sccqFQtFnSErCl-jc';
		const playlistId = 'PLzCu2b6-wIU-bhiFEskx9kppoLyJS-l5G';
		const num = 5;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		axios.get(url).then((json) => {
			setVids(json.data.items);
		});

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
				{/* Youtube컴포넌트 첨 마운트시 Modal컴포넌트 자체는 동작되기 때문에 첫번째 랜더링 싸이클일떄 Vids[Index]값이 비어있으므로 에러 따라서 Optional Chaining으로 해당 객체값이 비어있을때는 id값을 읽지않고 값이 담겨 있을떄에만 실행 */}
				<iframe
					title={Vids[Index]?.id}
					src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}
				></iframe>
			</Modal>
		</>
	);
}

export default Gallery;
