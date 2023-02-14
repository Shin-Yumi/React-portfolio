import { Link } from 'react-router-dom';
import Layout from '../common/Layout';

function Gallery() {
	const name = 'Gallery';
	const title = 'Youtube';
	const subTitle = '유투브 갤러리';
	const sub01 = 'youtube';
	const sub02 = 'flickr';
	const expCaption = 'Vogue의 새로운 video를 Youtube에서 만나보세요';
	return (
		<Layout name={name} title={title} subTitle={subTitle} expCaption={expCaption} sub01={sub01} sub02={sub02}>
			<div className='youtube'>
				<div id='youtube'>
					<article className='youtubeCont'>
						<Link to='/' className='pic'>
							<img src='img/dummy-gallery01.jpg' alt='' />
						</Link>
						<div className='con'>
							<h2>youtube title</h2>
							<span>youtube date</span>
						</div>
					</article>
					<article className='youtubeCont'>
						<Link to='/' className='pic'>
							<img src='img/dummy-gallery01.jpg' alt='' />
						</Link>
						<div className='con'>
							<h2>youtube title</h2>
							<span>youtube date</span>
						</div>
					</article>
					<article className='youtubeCont'>
						<Link to='/' className='pic'>
							<img src='img/dummy-gallery01.jpg' alt='' />
						</Link>
						<div className='con'>
							<h2>youtube title</h2>
							<span>youtube date</span>
						</div>
					</article>
					<article className='youtubeCont'>
						<Link to='/' className='pic'>
							<img src='img/dummy-gallery01.jpg' alt='' />
						</Link>
						<div className='con'>
							<h2>youtube title</h2>
							<span>youtube date</span>
						</div>
					</article>
					<article className='youtubeCont'>
						<Link to='/' className='pic'>
							<img src='img/dummy-gallery01.jpg' alt='' />
						</Link>
						<div className='con'>
							<h2>youtube title</h2>
							<span>youtube date</span>
						</div>
					</article>
					<article className='youtubeCont'>
						<Link to='/' className='pic'>
							<img src='img/dummy-gallery01.jpg' alt='' />
						</Link>
						<div className='con'>
							<h2>youtube title</h2>
							<span>youtube date</span>
						</div>
					</article>
				</div>
			</div>
		</Layout>
	);
}

export default Gallery;
