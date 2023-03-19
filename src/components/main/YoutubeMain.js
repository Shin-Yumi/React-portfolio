import Modal from '../common/Modal';
import { Link } from 'react-router-dom';
import { memo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useScrollFadeIn from '../assets/Scroll';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/navigation';

function YoutubeMain() {
	const open = useRef(null);
	const [Index, setIndex] = useState(0);

	const Vids = useSelector((store) => store.youtubeReducer.youtube);
	//Swiper 컴포넌트에서 생성되는 인스턴스를 담을 객체
	const [Instance, setInstance] = useState(null);
	const btnStart = useRef(null);
	const btnStop = useRef(null);

	return (
		<section className={`contents youtubeCont myScroll`}>
			<div className='inner'>
				<div className='galleryTextCont'>
					<div {...useScrollFadeIn('up', 1, 0)}>
						<h1 className='contentsTitle'>Youtube</h1>
						<p className='contentsText' {...useScrollFadeIn('up', 1, 0)}>
							새로운 청키 스니커즈가 등장하는 것처럼 이 신발의 활용법도 점점 다양해지고 있습니다. 켄달 제너, 두아 리파와 같이 옷을
							잘 입는 셀럽들은 각기 다른 방식으로 이 신발을 소화하고 있죠. 셀럽들이 제안한 청키 스니커즈 활용법을 확인해봅시다
						</p>
						<div className='galleryBtn' {...useScrollFadeIn('up', 1, 0)}>
							<Link to='/gallery/youtube' className='btnText'>
								view Youtube
								<span className='arrow'></span>
							</Link>
						</div>
					</div>

					<nav className='controls'>
						<Link
							to='/'
							ref={btnStart}
							className='play on'
							onClick={(e) => {
								e.preventDefault();
								if (Instance.autoplay.running) return;
								Instance.autoplay.start();
								btnStart.current.classList.add('on');
								btnStop.current.classList.remove('on');
							}}
						>
							<i></i>
						</Link>
						<Link
							to='/'
							ref={btnStop}
							className='pause'
							onClick={(e) => {
								e.preventDefault();
								if (!Instance.autoplay.running) return;
								Instance.autoplay.stop();
								btnStart.current.classList.remove('on');
								btnStop.current.classList.add('on');
							}}
						>
							<i></i>
						</Link>
					</nav>
				</div>
				<div className='galleryListCont' {...useScrollFadeIn('up', 1, 0)}>
					<Swiper
						slidesPerView={2}
						loop={'auto'}
						effect={'fade'}
						navigation={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							576: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
						}}
						modules={[Autoplay, Navigation]}
						className='gallerySlideCont mySwiper'
						//Swiper컴포넌트에서 생성되는 인스턴스를 Instance state에 옮겨담음
						onSwiper={(swiper) => setInstance(swiper)}
					>
						{Vids.map((vid, idx) => {
							if (idx >= 7) return null;
							const desc = vid.snippet.description;
							const date = vid.snippet.publishedAt;
							return (
								<SwiperSlide
									key={vid.id}
									onClick={() => {
										open.current.open();
										setIndex(idx);
										Instance.autoplay.stop();
										document.querySelector('.play').classList.remove('on');
										document.querySelector('.pause').classList.add('on');
									}}
								>
									<div className='listCont'>
										<h3 className='galleryChannel'>{vid.snippet.videoOwnerChannelTitle}</h3>
										<div className='galleryImg'>
											<figure className='galleryFigure'>
												<img src={vid.snippet.thumbnails.high.url} alt={vid.snippet.title} />
											</figure>
										</div>
										<div className='galleryText'>
											<p className='galleryTitle'>{vid.snippet.title}</p>
											<p className='galleryInfo'>{desc.length > 120 ? desc.substr(0, 120) + '...' : desc}</p>
										</div>
										<div className='galleryDate'>
											<p>{date.split('T')[0]}</p>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</div>
				<Modal ref={open}>
					<iframe
						title={Vids[Index]?.id}
						src={`https://www.youtube.com/embed/${Vids[Index]?.snippet.resourceId.videoId}`}
					></iframe>
				</Modal>
			</div>
		</section>
	);
}

export default memo(YoutubeMain);
