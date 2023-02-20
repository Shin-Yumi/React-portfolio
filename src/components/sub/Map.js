import { Link } from 'react-router-dom';
import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';

function Map() {
	const name = 'About';
	const title = 'Map';
	const subTitle = '지도';
	const expCaption =
		'차별화 된 기획과 크리에이티브한 비주얼로 사람들에게 영감을 주는 패션 매거진의 대명사 보그 코리아의 위치를 확인하세요';
	const container = useRef(null);
	const { kakao } = window;
	const mapTypeControl = new kakao.maps.MapTypeControl();
	const zoomControl = new kakao.maps.ZoomControl();
	const markerPoints = [
		{
			title: 'DDP',
			latlng: new kakao.maps.LatLng(37.5665256, 127.0092219),
			imgSrc: process.env.PUBLIC_URL + '/img/marker-red.png',
			imgSize: new kakao.maps.Size(25, 35),
			imgPos: { offset: new kakao.maps.Point(12, 69) },
			//button: Move(false)
		},
		{
			title: '경복궁',
			latlng: new kakao.maps.LatLng(37.579617, 126.977041),
			imgSrc: process.env.PUBLIC_URL + '/img/marker-red.png',
			imgSize: new kakao.maps.Size(25, 35),
			imgPos: { offset: new kakao.maps.Point(12, 69) },
		},
		{
			title: '남산',
			latlng: new kakao.maps.LatLng(37.5511694, 126.9882266),
			imgSrc: process.env.PUBLIC_URL + '/img/marker-red.png',
			imgSize: new kakao.maps.Size(25, 35),
			imgPos: { offset: new kakao.maps.Point(12, 69) },
		},
		{
			title: '반포한강공원',
			latlng: new kakao.maps.LatLng(37.5103556, 126.9960308),
			imgSrc: process.env.PUBLIC_URL + '/img/marker-red.png',
			imgSize: new kakao.maps.Size(25, 35),
			imgPos: { offset: new kakao.maps.Point(12, 69) },
		},
	];
	const [Location, setLocation] = useState(null);
	const [Index, setIndex] = useState(0);
	const [Traffic, setTraffic] = useState(false);
	const [Road, setRoad] = useState(false);

	const options = {
		center: markerPoints[Index].latlng,
		level: 3,
	};

	useEffect(() => {
		container.current.innerHtml = '';
		const mapInstance = new kakao.maps.Map(container.current, options);
		setLocation(mapInstance);

		//마커포인트 변경
		markerPoints.forEach((el) => {
			new kakao.maps.Marker({
				map: mapInstance,
				position: el.latlng,
				image: new kakao.maps.MarkerImage(el.imgSrc, el.imgSize, el.imgPos),
			});
			
		});

		//지도 중심좌표 부드럽게 이동
		mapInstance.panTo(options.center);

		// 줌아웃, 컨트롤
		mapInstance.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
		mapInstance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

		const setCenter = () => {
			mapInstance.setCenter(options.center);
		};

		mapInstance.setZoomable(false);

		//브라우저 리사이즈 될떄마다 마커 가운데 위치시키는 함수 호출
		window.addEventListener('resize', setCenter);

		

		//해당 컴포넌트 unmount시 setCenter함수 이벤트 제거
		return () => {
			window.removeEventListener('resize', setCenter);
		};
	}, [Index]);

	useEffect(() => {
		Traffic
			? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);

	useEffect(() => {
		Road
			? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW)
			: Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
	}, [Road]);
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
									<li
										className={Traffic ? 'trafficList on' : 'trafficList'}
										onClick={() => setTraffic(!Traffic)}
									>
										<Link to='#' replace>
											교통정보 보기
										</Link>
									</li>
									<li
										className={Traffic ? 'trafficList' : 'trafficList on'}
										onClick={() => setTraffic(!Traffic)}
									>
										<Link to='#' replace>
											교통정보 끄기
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className='mapBtnList'>
							<div className='listBox'>
								<h3 className='listTitle'>로드뷰</h3>
								<ul className='roadView'>
									<li
										className={Road ? 'roadViewList on' : 'roadViewList'}
										onClick={() => setRoad(!Road)}
									>
										<Link to='#' replace>
											로드뷰 켜기
										</Link>
									</li>
									<li
										className={Road ? 'roadViewList' : 'roadViewList on'}
										onClick={() => setRoad(!Road)}
									>
										<Link to='#' replace>
											로드뷰 끄기
										</Link>
									</li>
								</ul>
							</div>
						</li>
						<li className='mapBtnList'>
							<div className='listBox'>
								<h3 className='listTitle'>다른 명소 더 보기</h3>
								<ul className='favLocation'>
									{markerPoints.map((el, idx) => {
										return (
											<li
												key={idx}
												className={idx === Index ? 'locaList on' : 'locaList'}
												onClick={() => {
													setIndex(idx);
													setTraffic(false);
													setRoad(false);
												}}
											>
												<Link to='#' replace>
													{' '}
													{el.title}{' '}
												</Link>
											</li>
										);
									})}
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
