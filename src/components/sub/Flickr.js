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
	const open = useRef(null);
	const input = useRef(null);
	const [Imgs, setImgs] = useState([]);
	const [Index, setIndex] = useState(0);
	const [Loading, setLoading] = useState(true);

	const getFlickr = async (opt) => {
		// api base url
		const base = 'https://www.flickr.com/services/rest/?format=json&nojsoncallback=1';

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
			url = `${base}&api_key=${key}&method=${method_interest}&per_page=${per_page}`;
		if (opt.type === 'search')
			url = `${base}&api_key=${key}&method=${method_search}&per_page=${per_page}&tags=${opt.tags}`;
		if (opt.type === 'user')
			url = `${base}&method=${method_user}&api_key=${key}&per_page=${per_page}&user_id=${opt.user}`;

		const result = await axios.get(url);
		//flickr로 반환한 데이터 배열값이 0개일 대 (결과이미지가 없을 때) 기존 items state를 변경하지않고 이전 갤러리 홤녀을 다시 보이게 하기
		if (result.data.photos.photo.length === 0) {
			frame.current.classList.remove('on');
			setLoading(true);
			return alert('해당 검색어의 결과 이미지가 없습니다.');
		}
		setImgs(result.data.photos.photo);

		setTimeout(() => {
			setLoading(false);
			frame.current.classList.add('on');
		}, 500);
	};

	const showInterest = () => {
		frame.current.classList.remove('on');
		setLoading(true);
		getFlickr({ type: 'interest' });
	};
	const showMine = () => {
		frame.current.classList.remove('on');
		setLoading(true);
		getFlickr({ type: 'user', user: '197649413@N03' });
	};
	const showUser = (e) => {
		frame.current.classList.remove('on');
		setLoading(true);
		getFlickr({ type: 'user', user: e.target.innerText });
	};
	const showSearch = () => {
		const result = input.current.value.trim();
		if (!result) return alert('검색어를 입력하세요.');
		input.current.value = '';
		frame.current.classList.remove('on');
		setLoading(true);
		getFlickr({ type: 'search', tags: result });
	};

	let handleKeyUp = (e) => {
		e.key === 'Enter' && showSearch();
	};

	useEffect(() => {
		getFlickr({ type: 'interest' });
		//getFlickr({ type: 'search', tags: 'sea' });
		//getFlickr({ type: 'user', user: '197649413@N03' });
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
						<input
							type='text'
							id='search'
							placeholder='검색어를 입력하세요'
							ref={input}
							onKeyDown={handleKeyUp}
						/>
						<button className='btnSearch' onClick={showSearch}>
							Search
						</button>
					</article>
					<div className='sortBtn'>
						<button onClick={showInterest}>Interest Gallery</button>
						<button onClick={showMine}>My Gallery</button>
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
											<div className='profile'>
												<img
													src={`http://farm${el.farm}.staticflickr.com/${el.server}/buddyicons/${el.owner}.jpg`}
													alt={el.owner}
													onError={(e) => {
														e.target.setAttribute(
															'src',
															'https://www.flickr.com/images/buddyicon.gif'
														);
													}}
												/>
												<span onClick={showUser}>{el.owner}</span>
											</div>
											<Link
												to='/'
												className='galleryImg'
												onClick={(e) => {
													e.preventDefault();
													open.current.open();
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
			<Modal ref={open}>
				<img
					src={`https://live.staticflickr.com/${Imgs[Index]?.server}/${Imgs[Index]?.id}_${Imgs[Index]?.secret}_b.jpg`}
					alt={Imgs[Index]?.title}
				/>
			</Modal>
		</>
	);
}

export default Flickr;
