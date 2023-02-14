import { Link } from 'react-router-dom';
import Layout from '../common/Layout';


function Map() {
	const name = 'About';
	const title = 'Map';
	const subTitle = '지도';
	const expCaption =
		'차별화 된 기획과 크리에이티브한 비주얼로 사람들에게 영감을 주는 패션 매거진의 대명사 보그 코리아의 위치를 확인하세요';

	return (
		<Layout name={name} title={title} subTitle={subTitle} expCaption={expCaption}>
			<article id='location'>
				<div id='map'></div>
				<div className='mapTxt'>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique culpa dolorum,
						consequuntur eius labore cupiditate voluptatibus obcaecati earum aliquam deserunt veniam
						hic nam! Ut animi dolorem expedita repellendus quod sapiente?
					</p>
				</div>
				<div className='mapBtn'>
					<h2 className='mapBtnTitle'>더 살펴보기</h2>
					<ul className='mapBtnLists'>
						<li className='mapBtnList'>
							<div className='listBox'>
								<h3 className='listTitle'>교통상황</h3>
								<ul className='traffic'>
									<li className='trafficList'>
										<Link to='#'>교통정보 보기</Link>
									</li>
									<li className='trafficList on'>
										<Link to='#'>교통정보 끄기</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className='mapBtnList'>
							<div className='listBox'>
								<h3 className='listTitle'>로드뷰</h3>
								<ul className='roadView'>
									<li className='roadViewList'>
										<Link to='#'>로드뷰 켜기</Link>
									</li>
									<li className='roadViewList on'>
										<Link to='#'>로드뷰 끄기</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className='mapBtnList'>
							<div className='listBox'>
								<h3 className='listTitle'>다른 명소 더 보기</h3>
								<ul className='favLocation'>
									<li className='locaList on' data-index='0'>
										<Link to='#'> DDP(동대문디자인플라자) </Link>
									</li>
									<li className='locaList' data-index='1'>
										<Link to='#'> 경복궁 </Link>
									</li>
									<li className='locaList' data-index='2'>
										<Link to='#'> 남산 N 타워 </Link>
									</li>
									<li className='locaList' data-index='3'>
										<Link to='#'> 반포한강공원 </Link>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</article>
		</Layout>
	);
}

export default Map;
