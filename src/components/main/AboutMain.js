import Contents from './Contents';
import { Link } from 'react-router-dom';

function AboutMain() {
	return (
		<Contents name='aboutCont'>
			<article className='contentsHalf aboutImgFull'>
				<div className='aboutImg'>
					<figure className='aboutFigure'>
						<img src={process.env.PUBLIC_URL + '/img/about02.jpg'} alt='' />
					</figure>
				</div>
			</article>
			<article className='contentsHalf aboutDescription'>
				<div className='aboutTextBox'>
					<h1 className='contentsTitle'>ABOUT</h1>
					<div className='aboutDescBox'>
						<div className='subTitle'>
							<h2 className='aboutSubTitle'>about company</h2>
							<hr className='contentsLine' />
							<span className='subTitleDesc'>Organization & Map</span>
						</div>

						<p className='aboutDesc'>
							차별화 된 기획과 크리에이티브한 비주얼로 사람들에게 영감을 주는 패션 매거진의 대명사
							보그 코리아. 웹, 모바일, 소셜 미디어 등 다양한 디지털 플랫폼과 프린트 매거진을 통해
							강력한 하나의 브랜드로 존재감을 발휘하고 있습니다
						</p>
						<div className='contBtn'>
							<Link to='/about/organization' className='btnText'>
								view &nbsp; <span> about</span>
							</Link>
						</div>
					</div>
				</div>
			</article>
		</Contents>
	);
}

export default AboutMain;
