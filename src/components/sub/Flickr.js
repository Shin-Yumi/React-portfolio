import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Layout from '../common/Layout';
import Modal from '../common/Modal';

function Flickr() {
	const name = 'Gallery';
	const title = 'Flickr';
	const subTitle = '플리커 갤러리';
	const sub01 = 'youtube';
	const sub02 = 'flickr';
	const expCaption = 'Vogue의 새로운 화보와 잡지를 flickr에서 만나보세요';
	const [Imgs, setImgs] = useState([]);
	const [Open, setOpen] = useState(false);
	const [Index, setIndex] = useState(0);

	useEffect(() => {
		// api base url
		const base = 'https://www.flickr.com/services/rest/?';

		//api method
		const method = 'flickr.interestingness.getList';
		//const method2 = 'flickr.photos.search';

		//api key
		const key = 'aa8b086c0a30b1699395af33dd844533';
		const per_page = 30;

		//api
		const url = `${base}method=${method}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1`;
		// const url2 = `${base}method=${method2}&api_key=${key}&per_page=${per_page}&format=json&nojsoncallback=1&tags=바다&privacy_filter=1`;

		axios.get(url).then((json) => {
			setImgs(json.data.photos.photo);
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
				<div id='flickr'>
					<article className='searchBox'>
						<input type='text' id='search' placeholder='검색어를 입력하세요' />
						<button className='btnSearch'>Search</button>
					</article>
					<article className='wrap'>
						<ul id='list'>
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
						</ul>
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