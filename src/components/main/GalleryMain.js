import Contents from './Contents';
import Modal from '../common/Modal';
import { Link } from 'react-router-dom';
import { memo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function GallMain() {
	const Vids = useSelector((store) => store.youtube.data);

	const Imgs = useSelector((store) => store.flickr.data);

	const open = useRef(null);
	const [Index, setIndex] = useState(0);
	const [Tab, setTab] = useState(false);

	return (
		<Contents name='galleryCont'>
			<div className='galleryTextCont'>
				<div>
					<h1 className='contentsTitle'>Gallery</h1>
					<p className='contentsText'>
						패셔너블한 셀럽 5인이 보여준 청키 스니커즈 활용법
						<br />
						새로운 청키 스니커즈가 등장하는 것처럼 이 신발의 활용법도 점점 다양해지고 있습니다. 켄달
						제너, 두아 리파와 같이 옷을 잘 입는 셀럽들은 각기 다른 방식으로 이 신발을 소화하고 있죠.
						셀럽들이 제안한 청키 스니커즈 활용법을 확인해봅시다
					</p>
				</div>
				<div className='contBtn'>
					<Link to='/gallery/youtube' className='btnText'>
						view &nbsp; <span>Gallery</span>
					</Link>
				</div>
			</div>
			<div className='galleryTabCont'>
				<div className='galleryTabs'>
					<div
						className={Tab ? 'galleryTab' : 'galleryTab on'}
						onClick={() => {
							setTab(!Tab);
						}}
					>
						<Link to='/'>Youtube</Link>
					</div>
					<div
						className={Tab ? 'galleryTab on' : 'galleryTab'}
						onClick={() => {
							setTab(!Tab);
						}}
					>
						<Link to='/'>Flickr</Link>
					</div>
				</div>
				{/* youtube tabcont */}
				<div className={Tab ? 'tabCont' : 'tabCont on'}>
					<Swiper
						slidesPerView={1}
						loop={'auto'}
						effect={'fade'}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						navigation={true}
						modules={[Autoplay, Navigation]}
						className='gallerySlideCont mySwiper'
					>
						{Vids.map((vid, idx) => {
							if (idx >= 4) return null;
							const date = vid.snippet.publishedAt;
							return (
								<SwiperSlide
									key={vid.id}
									onClick={() => {
										setIndex(idx);
										open.current.open();
									}}
								>
									<div className='listCont'>
										<h3 className='galleryTitle'>{date.split('T')[0]}</h3>
										<div className='galleryImg'>
											<figure className='galleryFigure'>
												<img src={vid.snippet.thumbnails.high.url} alt={vid.snippet.title} />
											</figure>
										</div>
										<div className='galleryText'>
											<p className='galleryNum'>0{idx + 1} /</p>
											<p className='galleryInfo'>{vid.snippet.title}</p>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
					<Modal ref={open}>
						<iframe
							title={Vids[Index]?.id}
							src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}
						></iframe>
					</Modal>
				</div>
				{/* flickr tabCont */}
				<div className={Tab ? 'tabCont on' : 'tabCont'}>
					<Swiper
						slidesPerView={1}
						loop={'auto'}
						effect={'fade'}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						navigation={true}
						modules={[Autoplay, Navigation]}
						className='gallerySlideCont mySwiper'
					>
						{Imgs.map((img, idx) => {
							if (idx >= 4) return null;
							const imgSrcBig = `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`;

							return (
								<SwiperSlide
									key={img.id}
									onClick={() => {
										setIndex(idx);
										open.current.open();
									}}
								>
									<div className='listCont'>
										<h3 className='galleryTitle'>{img.owner}</h3>
										<div className='galleryImg'>
											<figure className='galleryFigure'>
												<img src={imgSrcBig} alt={img.title} />
											</figure>
										</div>
										<div className='galleryText'>
											<p className='galleryNum'>0{idx + 1} /</p>
											<p className='galleryInfo'>{img.title}</p>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
					<Modal ref={open}>
						<img
							src={`https://live.staticflickr.com/${Imgs[Index]?.server}/${Imgs[Index]?.id}_${Imgs[Index]?.secret}_b.jpg`}
							alt={Imgs[Index]?.title}
						/>
					</Modal>
				</div>
			</div>
		</Contents>
	);
}

export default memo(GallMain);
