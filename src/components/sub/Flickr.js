import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../common/Layout';
import Modal from '../common/Modal';
import Masonry from 'react-masonry-component';

function Flickr() {
	const name = 'Gallery';
	const title = 'Flickr';
	const subTitle = '플리커 갤러리';
	const sub01 = 'youtube';
	const sub02 = 'flickr';
	const expCaption = 'Vogue의 새로운 화보와 잡지를 flickr에서 만나보세요';

	const frame = useRef(null);
	const [Imgs, setImgs] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);
	const [Loading, setLoading] = useState(true);

	const getFlickr = async (opt) => {
		// api base url
		const base = 'https://www.flickr.com/services/rest/?';

		//api method
		const method_interest = 'flickr.interestingness.getList';
		const method_search = 'flickr.photos.search';
		const method_user = 'flickr.people.getPhotos';

		//api key
		const key = 'aa8b086c0a30b1699395af33dd844533';
		const per_page = 30;

		//api
		let url = '';

		if (opt.type === 'interest')
			url = `${base}method=${method_interest}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1`;
		if (opt.type === 'search')
			url = `${base}method=${method_search}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&tags=${opt.tags}&privacy_filter=1`;
		if (opt.type === 'user')
			url = `${base}&method=${method_user}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&user_id=${opt.user}`;

		const result = await axios.get(url);
		setImgs(result.data.photos.photo);

		setTimeout(() => {
			setLoading(false);
			frame.current.classList.add('on');
		}, 500);
	};

	useEffect(() => {
		getFlickr({ type: 'interest' });
		//getFlickr({ type: 'search', tags: 'sea' });
		getFlickr({ type: 'user', user: '197649413@N03' });
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
				<div id='flickr'>
					<article className='searchBox'>
						<input type='text' id='search' placeholder='검색어를 입력하세요' />
						<button className='btnSearch'>Search</button>
					</article>
					<div className='sortBtn'>
						<button
							onClick={() => {
								frame.current.classList.remove('on');
								setLoading(true);
								getFlickr({ type: 'interest' });
							}}
						>
							Interest Gallery
						</button>
						<button
							onClick={() => {
								frame.current.classList.remove('on');
								setLoading(true);
								getFlickr({ type: 'user', user: '164021883@N04' });
							}}
						>
							My Gallery
						</button>
					</div>
					{Loading && (
						<div className='loading'>
							<div className='dot'></div>
							<div className='dot'></div>
							<div className='dot'></div>
							<div className='dot'></div>
							<div className='dot'></div>
						</div>
					)}
					<article className='wrap' ref={frame}>
						<Masonry elementType={'ul'} options={{ transitionDuration: '0.5s' }} className='list'>
							{Imgs.map((el, index) => {
								const imgSrcBig = `https://live.staticflickr.com/${el.server}/${el.id}_${el.secret}_b.jpg`;

								return (
									<li key={el.id} className='item'>
										<div className='itemBox'>
											<Link
												to='/'
												className='galleryImg'
												onClick={(e) => {
													e.preventDefault();
													setOpen(true);
													setIndex(index);
												}}
											>
												<img className='thumb' src={imgSrcBig} alt={el.title} />
											</Link>
											<p className='galleryTitle'>{el.title}</p>
										</div>
									</li>
								);
							})}
						</Masonry>
					</article>
				</div>
			</Layout>
			{Open && (
				<Modal setOpen={setOpen}>
					<img
						src={`https://live.staticflickr.com/${Imgs[Index].server}/${Imgs[Index].id}_${Imgs[Index].secret}_b.jpg`}
						alt={Imgs[Index].title}
					/>
				</Modal>
			)}
		</>
	);
}

export default Flickr;
