import { Link } from 'react-router-dom';
import Layout from '../common/Layout';

function Flickr() {
	const name = 'Gallery';
	const title = 'Flickr';
	const subTitle = '플리커 갤러리';
	const sub01 = 'youtube';
	const sub02 = 'flickr';
	const expCaption = 'Vogue의 새로운 화보와 잡지를 flickr에서 만나보세요';
	return (
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
						<li className='item'>
							<div className='itemBox'>
								<Link className='galleryImg' to='/'>
									<img className='thumb' src='img/dummy-gallery02.jpg' alt='' />
								</Link>
								<p className='galleryTitle'>gallery title</p>
							</div>
						</li>
            <li className='item'>
							<div className='itemBox'>
								<Link className='galleryImg' to='/'>
									<img className='thumb' src='img/dummy-gallery02.jpg' alt='' />
								</Link>
								<p className='galleryTitle'>gallery title</p>
							</div>
						</li>
            <li className='item'>
							<div className='itemBox'>
								<Link className='galleryImg' to='/'>
									<img className='thumb' src='img/dummy-gallery02.jpg' alt='' />
								</Link>
								<p className='galleryTitle'>gallery title</p>
							</div>
						</li>
            <li className='item'>
							<div className='itemBox'>
								<Link className='galleryImg' to='/'>
									<img className='thumb' src='img/dummy-gallery02.jpg' alt='' />
								</Link>
								<p className='galleryTitle'>gallery title</p>
							</div>
						</li>
					</ul>
				</article>
			</div>
		</Layout>
	);
}

export default Flickr;
