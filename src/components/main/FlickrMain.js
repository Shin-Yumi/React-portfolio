import Modal from '../common/Modal';
import { Link } from 'react-router-dom';
import { memo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import useScrollFadeIn from '../assets/Scroll';

function FlickrMain() {
	const open = useRef(null);
	const [Index, setIndex] = useState(0);
	const Imgs = useSelector((store) => store.flickr.data);

	return (
		<section className={`contents flickrCont myScroll`}>
			<div className='inner'>
				<article className='contentsHalf flickrList' {...useScrollFadeIn('right', 1, 0)}>
					{Imgs.map((img, index) => {
						if (index >= 4) return null;
						const imgSrcBig = `https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_b.jpg`;

						return (
							<div key={img.id} className='flickrItem'>
								<div className='itemBox'>
									<Link
										to='/'
										className='galleryImg'
										onClick={(e) => {
											e.preventDefault();
										}}
									>
										<img className='thumb' src={imgSrcBig} alt={img.title} />
									</Link>
									<aside
										className='hoverFlickr'
										onClick={() => {
											open.current.open();
											setIndex(index);
										}}
									>
										<div className='fDesc'>
											<h1 className='popTit'>Flickr Description</h1>
											<p className='galleryOwner'>owner : {img.owner}</p>
											<p className='galleryTitle'>Title : {img.title}</p>
										</div>
									</aside>
								</div>
							</div>
						);
					})}
					<Modal ref={open}>
						<img
							src={`https://live.staticflickr.com/${Imgs[Index]?.server}/${Imgs[Index]?.id}_${Imgs[Index]?.secret}_b.jpg`}
							alt={Imgs[Index]?.title}
						/>
					</Modal>
				</article>
				<article className='contentsHalf flickrText'>
					<div className='flickrTextBox'>
						<h1 className='contentsTitle' {...useScrollFadeIn('up', 1, 0)}>
							Flickr
						</h1>
						<p className='contentsSubTitle' {...useScrollFadeIn('up', 1, 0)}>
							2023 READY-TO-WEAR
						</p>
						<p className='contentsText' {...useScrollFadeIn('up', 1, 0)}>
							개관 100일이 조금 지난 지금 많은 사람들은 프랑스로 떠나는 해외여행의 아쉬움을 이곳에서 풀고 있는 듯하다. 소피텔
							앰배서더 서울에서 이번 달 공개한 따끈한 영상을 통해 그들이 제안하는 모던 시크 가득한 프렌치 럭셔리 라이프스타일을
							만나보자.
						</p>
					</div>
					<div className='galleryBtn' {...useScrollFadeIn('up', 1, 0)}>
						<Link to='/gallery/flickr' className='btnText'>
							view Flickr
							<span className='arrow'></span>
						</Link>
					</div>
				</article>
			</div>
		</section>
	);
}

export default memo(FlickrMain);
