import Modal from '../common/Modal';
import { Link } from 'react-router-dom';
import { memo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

function FlickrMain() {
	const open = useRef(null);
	const [Index, setIndex] = useState(0);
	const Items = useSelector((store) => store.flickrReducer.flickr);
	console.log(Items);

	return (
		<section className={`contents flickrCont myScroll`}>
			<div className='inner'>
				<article className='contentsHalf flickrList'>
					{Items.map((item, index) => {
						if (index >= 4) return null;
						const imgSrcBig = `https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_b.jpg`;

						return (
							<div key={item.id} className='flickrItem'>
								<div className='itemBox'>
									<Link
										to='/'
										className='galleryImg'
										onClick={(e) => {
											e.preventDefault();
											open.current.open();
											setIndex(index);
										}}
									>
										<img className='thumb' src={imgSrcBig} alt={item.title} />
									</Link>
								</div>
							</div>
						);
					})}
					<Modal ref={open}>
						<img
							src={`https://live.staticflickr.com/${Items[Index]?.server}/${Items[Index]?.id}_${Items[Index]?.secret}_b.jpg`}
							alt={Items[Index]?.title}
						/>
					</Modal>
				</article>
				<article className='contentsHalf flickrText'>
					<div className='flickrTextBox'>
						<h1 className='contentsTitle'>Flickr</h1>
						<p className='contentsSubTitle'>2023 READY-TO-WEAR</p>
						<p className='contentsText'>개관 100일이 조금 지난 지금 많은 사람들은 프랑스로 떠나는 해외여행의 아쉬움을 이곳에서 풀고 있는 듯하다. 소피텔 앰배서더 서울에서 이번 달 공개한 따끈한 영상을 통해 그들이 제안하는 모던 시크 가득한 프렌치 럭셔리 라이프스타일을 만나보자.</p>
					</div>
				</article>
			</div>
		</section>
	);
}

export default memo(FlickrMain);
