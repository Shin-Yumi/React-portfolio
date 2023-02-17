import { Link } from 'react-router-dom';
import Layout from '../common/Layout';
import { useRef, useEffect } from 'react';

function Map() {
	const name = 'About';
	const title = 'Map';
	const subTitle = '지도';
	const expCaption =
		'차별화 된 기획과 크리에이티브한 비주얼로 사람들에게 영감을 주는 패션 매거진의 대명사 보그 코리아의 위치를 확인하세요';
	const container = useRef(null);
	// 실제 윈도우 객체에서 kakao 객체를 비구조화 할당으로 바로 할당
	const { kakao } = window;

	useEffect(() => {
		kakaomap();
	}, []);

	const kakaomap = () => {
		const options = {
			center: new kakao.maps.LatLng(37.5665256, 127.0092219),
			level: 8,
		};
		const mapInstance = new kakao.maps.Map(container.current, options);
		const markerPoints = [
			{
				title: 'DDP',
				latlng: new kakao.maps.LatLng(37.5665256, 127.0092219),
				imgSrc: process.env.PUBLIC_URL +'/img/marker-border.png',
				imgSize: new kakao.maps.Size(25, 35),
				imgPos: { offset: new kakao.maps.Point(12, 69) },
			},
			{
				title: '경복궁',
				latlng: new kakao.maps.LatLng(37.579617, 126.977041),
				imgSrc: process.env.PUBLIC_URL +'/img/marker-border.png',
				imgSize: new kakao.maps.Size(25, 35),
				imgPos: { offset: new kakao.maps.Point(12, 69) },
			},
			{
				title: '남산',
				latlng: new kakao.maps.LatLng(37.5511694, 126.9882266),
				imgSrc: process.env.PUBLIC_URL +'/img/marker-border.png',
				imgSize: new kakao.maps.Size(25, 35),
				imgPos: { offset: new kakao.maps.Point(12, 69) },
			},
			{
				title: '반포한강공원',
				latlng: new kakao.maps.LatLng(37.5103556, 126.9960308),
				imgSrc: process.env.PUBLIC_URL +'/img/marker-border.png',
				imgSize: new kakao.maps.Size(25, 35),
				imgPos: { offset: new kakao.maps.Point(12, 69) },
			},
		];

		markerPoints.forEach((el) => {
			// 마커를 생성합니다
			new kakao.maps.Marker({
				//마커가 표시 될 지도
				map: mapInstance,
				//마커가 표시 될 위치
				position: el.latlng,
				image: new kakao.maps.MarkerImage(el.imgSrc, el.imgSize, el.imgPos),
				//마커에 hover시 나타날 title
				title: el.title,
			});
		});
	};

	return (
		<Layout name={name} title={title} subTitle={subTitle} expCaption={expCaption}>
			<article id='location'>
				<div id='map' ref={container}></div>
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
