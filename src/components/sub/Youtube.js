import Layout from '../common/Layout';
import Modal from '../common/Modal';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Gallery() {
	const name = 'Gallery';
	const title = 'Youtube';
	const subTitle = '유투브 갤러리';
	const sub01 = 'youtube';
	const sub02 = 'flickr';
	const expCaption = 'Vogue의 새로운 video를 Youtube에서 만나보세요';
	const [Vids, setVids] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		const key = 'AIzaSyA6RtwwaDd7lctAx_sccqFQtFnSErCl-jc';
		const playlistId = 'PLzCu2b6-wIU-bhiFEskx9kppoLyJS-l5G';
		const num = 5;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playlistId}&maxResults=${num}`;

		axios.get(url).then((json) => {
			setVids(json.data.items);
		});
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
				<div className='youtube' >
					<div id='youtube'>
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
											setOpen(true);
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
			{Open && (
				<Modal setOpen={setOpen}>
					<iframe
						title={Vids[0].id}
						src={`https://www.youtube.com/embed/${Vids[Index].snippet.resourceId.videoId}`}
					></iframe>
				</Modal>
			)}
			{/* open이 참이면 && 뒤의 부분이 실행 */}
		</>
	);
}

export default Gallery;
