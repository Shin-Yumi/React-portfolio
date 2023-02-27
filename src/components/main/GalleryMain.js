import Contents from './Contents';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { useSelector } from 'react-redux';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function GallMain() {
	const { youtube } = useSelector((store) => store.youtubeReducer);
	console.log(youtube);
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
					{youtube.map((vid, idx) => {
						if (idx >= 4) return null;
						return (
							<SwiperSlide key={vid.id}>
								<div className='listCont'>
									<h3 className='galleryTitle'>youtube title</h3>
									<div className='galleryImg'>
										<figure className='galleryFigure'>
											<img src={vid.snippet.thumbnails.high.url} alt={vid.snippet.title} />
										</figure>
									</div>
									<div className='galleryText'>
										<p className='galleryNum'>0{idx + 1} /</p>
										<p className='galleryInfo'>youtube0{idx +1}</p>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</Contents>
	);
}

export default memo(GallMain);
