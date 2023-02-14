import Layout from '../common/Layout';

function About() {
	const name = 'About';
	const title = 'Organization';
	const subTitle = '조직도';
	const sub01 = 'organization';
	const sub02 = 'map';
	const expCaption = 'Vogue의 새로운 사업 부문인 CCL(Creative Content Lab.) 팀은 두산매거진이 보유한 국내 최고의 컨텐츠 제작 역량을 기반으로, 브랜드의 가치를 높여주는 커뮤니케이션 통합 솔루션을 제시하고 있습니다';

	return (
		<Layout name={name} title={title} subTitle={subTitle} expCaption={expCaption} sub01={sub01} sub02={sub02}>
			<article id='organization' className='aboutCont'>
				<div className='inner'>
					<div className='aboutSectionCont'>
						<ul className='organizationWarp'>
							<li className='organizationList'>
								<div className='organizationBox'>
									<h2 className='organizationTitle'>developer</h2>
									<div className='organizationImg'>
										<img src='img/member01.jpg' alt='조직도 첫번째 멤버입니다' />
									</div>
									<p className='organizationJob'>
										01 / <span>name</span>
									</p>
								</div>
							</li>
							<li className='organizationList'>
								<div className='organizationBox'>
									<h2 className='organizationTitle'>developer</h2>
									<div className='organizationImg'>
										<img src='img/member02.jpg' alt='조직도 두번째 멤버입니다' />
									</div>
									<p className='organizationJob'>
										02 / <span>name</span>
									</p>
								</div>
							</li>
							<li className='organizationList'>
								<div className='organizationBox'>
									<h2 className='organizationTitle'>developer</h2>
									<div className='organizationImg'>
										<img src='img/member03.jpg' alt='조직도 세번째 멤버입니다' />
									</div>
									<p className='organizationJob'>
										03 / <span>name</span>
									</p>
								</div>
							</li>
							<li className='organizationList'>
								<div className='organizationBox'>
									<h2 className='organizationTitle'>developer</h2>
									<div className='organizationImg'>
										<img src='img/member04.jpg' alt='조직도 네번째 멤버입니다' />
									</div>
									<p className='organizationJob'>
										04 / <span>name</span>
									</p>
								</div>
							</li>
							<li className='organizationList'>
								<div className='organizationBox'>
									<h2 className='organizationTitle'>developer</h2>
									<div className='organizationImg'>
										<img src='img/member05.jpg' alt='조직도 다섯번째 멤버입니다' />
									</div>
									<p className='organizationJob'>
										05 / <span>name</span>
									</p>
								</div>
							</li>
							<li className='organizationList intro'>
								<div className='organizationBox'>
									<h2 className='organizationTitle'>
										Introduce <br />
										My Team
									</h2>
									<p className='organizationSub'>Best Team Member</p>
									<p className='organizationCaption'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illo quia
										voluptatem! Facilis, cumque repudiandae maxime animi officiis, quae sint tenetur
										consequatur odio, quia mollitia similique cum illo veritatis magni.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</article>
		</Layout>
	);
}

export default About;
