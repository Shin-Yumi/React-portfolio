import { memo } from 'react';
import { Link } from 'react-router-dom';
import useScrollFadeIn from '../common/Scroll';

function AboutMain() {
	return (
		<section className={`contents aboutCont myScroll`}>
			<div className='inner'>
				<article className='contentsHalf aboutImgFull'>
					<div className='aboutImg'>
						<figure className='aboutFigure'>
							<img src={process.env.PUBLIC_URL + '/img/about02.jpg'} alt='' />
						</figure>
					</div>
				</article>
				<article className='contentsHalf aboutDescription'>
					<div className='aboutTextBox'>
						<h1 className='contentsTitle' {...useScrollFadeIn('up', 1, 0)}>
							ABOUT
						</h1>
						<div className='aboutDescBox'>
							<div className='subTitle'>
								<h2 className='aboutSubTitle' {...useScrollFadeIn('up', 1, 0)}>
									about company
								</h2>
								<hr className='contentsLine' {...useScrollFadeIn('up', 1, 0)} />
								<span className='subTitleDesc' {...useScrollFadeIn('up', 1, 0)}>
									Organization & Map
								</span>
							</div>

							<p className='aboutDesc' {...useScrollFadeIn('up', 1, 0)}>
								차별화 된 기획과 크리에이티브한 비주얼로 사람들에게 영감을 주는 패션 매거진의 대명사 보그 코리아. 웹, 모바일, 소셜
								미디어 등 다양한 디지털 플랫폼과 프린트 매거진을 통해 강력한 하나의 브랜드로 존재감을 발휘하고 있습니다
							</p>
							<div className='contBtn' {...useScrollFadeIn('up', 1, 0)}>
								<Link to='/about/organization' className='btnText'>
									view &nbsp; <span> about</span>
								</Link>
							</div>
						</div>
					</div>
				</article>
			</div>
		</section>
	);
}

export default memo(AboutMain);
