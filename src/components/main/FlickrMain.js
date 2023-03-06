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
						<p className='contentsText'>2023 READY-TO-WEAR</p>
					</div>
				</article>
			</div>
		</section>
	);
}

export default memo(FlickrMain);
