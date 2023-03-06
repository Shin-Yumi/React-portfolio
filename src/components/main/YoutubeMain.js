import Modal from '../common/Modal';
import { Link } from 'react-router-dom';
import { memo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function YoutubeMain() {
	const open = useRef(null);
	const [Index, setIndex] = useState(0);
	const Vids = useSelector((store) => store.youtubeReducer.youtube);
	console.log(Vids);

	return (
		<section className={`contents youtubeCont myScroll`}>
			<div className='inner'>
				<div className='galleryTextCont'>
					<div>
						<h1 className='contentsTitle'>Youtube</h1>
						<p className='contentsText'>
							패셔너블한 셀럽 5인이 보여준 청키 스니커즈 활용법
							<br />
							새로운 청키 스니커즈가 등장하는 것처럼 이 신발의 활용법도 점점 다양해지고 있습니다.
							켄달 제너, 두아 리파와 같이 옷을 잘 입는 셀럽들은 각기 다른 방식으로 이 신발을
							소화하고 있죠. 셀럽들이 제안한 청키 스니커즈 활용법을 확인해봅시다
						</p>
					</div>
					<div className='contBtn'>
						<Link to='/gallery/youtube' className='btnText'>
							view &nbsp; <span>Youtube</span>
						</Link>
					</div>
				</div>
				<div className='galleryListCont'>
					<Swiper
						slidesPerView={2}
						loop={'auto'}
						effect={'fade'}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							320: {
								slidesPerView: 2,
							},
							576: {
								slidesPerView: 3,
							},
						}}
						modules={Autoplay}
						className='gallerySlideCont mySwiper'
					>
						{Vids.map((vid, idx) => {
							if (idx >= 4) return null;
							const desc = vid.snippet.description;
							const date = vid.snippet.publishedAt;
							return (
								<SwiperSlide
									key={vid.id}
									onClick={() => {
										open.current.open();
										setIndex(idx);
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
											<p className='galleryInfo'>
												{desc.length > 120 ? desc.substr(0, 120) + '...' : desc}
											</p>
										</div>
										<div className='galleryDate'>
											<p>{date.split('T')[0]}</p>
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
			</div>
		</section>
	);
}

export default memo(YoutubeMain);
