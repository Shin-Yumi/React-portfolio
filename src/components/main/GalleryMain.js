import Contents from './Contents';
import { Link } from 'react-router-dom';
import { memo } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function GallMain() {
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
					<div className='galleryTab on'>
						<Link to='/'>Youtube</Link>
					</div>
					<div className='galleryTab'>
						<Link to='/'>Flickr</Link>
					</div>
				</div>
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
					<SwiperSlide>
							<div className='listCont'>
								<h3 className='galleryTitle'>youtube title</h3>
								<div className='galleryImg'>
									<figure className='galleryFigure'>
										<img src={process.env.PUBLIC_URL + '/img/dummy-yt01.jpg'} alt='' />
									</figure>
								</div>
								<div className='galleryText'>
									<p className='galleryNum'>01 /</p>
									<p className='galleryInfo'>youtube01</p>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='listCont'>
								<h3 className='galleryTitle'>youtube title</h3>
								<div className='galleryImg'>
									<figure className='galleryFigure'>
										<img src={process.env.PUBLIC_URL + '/img/dummy-yt02.jpg'} alt='' />
									</figure>
								</div>
								<div className='galleryText'>
									<p className='galleryNum'>01 /</p>
									<p className='galleryInfo'>youtube01</p>
								</div>
							</div>
						</SwiperSlide>

					{/* <div className='gallerySlide'>
						<ul className='swiper-wrapper'>
							<li className='swiper-slide'>
								<div className='listCont'>
									<h3 className='galleryTitle'>gallery title</h3>
									<div className='galleryImg'>
										<figure className='galleryFigure'>
											<img src={process.env.PUBLIC_URL + '/img/dummy-gallery01.jpg'} alt='' />
										</figure>
									</div>
									<div className='galleryText'>
										<p className='galleryNum'>01 /</p>
										<p className='galleryInfo'>gallery01</p>
									</div>
								</div>
							</li>
							<li className='swiper-slide'>
								<div className='listCont'>
									<h3 className='galleryTitle'>gallery title</h3>
									<div className='galleryImg'>
										<figure className='galleryFigure'>
											<img src={process.env.PUBLIC_URL + '/img/dummy-gallery02.jpg'} alt='' />
										</figure>
									</div>
									<div className='galleryText'>
										<p className='galleryNum'>02 /</p>
										<p className='galleryInfo'>gallery02</p>
									</div>
								</div>
							</li>
							<li className='swiper-slide'>
								<div className='listCont'>
									<h3 className='galleryTitle'>gallery title</h3>
									<div className='galleryImg'>
										<figure className='galleryFigure'>
											<img src={process.env.PUBLIC_URL + '/img/dummy-gallery03.jpg'} alt='' />
										</figure>
									</div>
									<div className='galleryText'>
										<p className='galleryNum'>03 /</p>
										<p className='galleryInfo'>gallery03</p>
									</div>
								</div>
							</li>
						</ul>
					</div> */}
				</Swiper>
			</div>
		</Contents>
	);
}

export default memo(GallMain);
