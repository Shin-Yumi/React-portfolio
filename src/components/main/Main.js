import { Link } from 'react-router-dom';
// import Contents from './Contents';
// import AboutMain from './AboutMain';
// import BoardMain from './BoardMain';
// import GallMain from './GallMain';

function Main(props) {
	return (
		<main id='main'>
			<div className='wrap'>
				{/* <Contents name='mainCont'>
					<article className='contentsHalf visualCont'>
						<div className='visualImgBox'>
							<div className='visualImg'></div>
						</div>
					</article>
					<article className='contentsHalf mainDescription'>
						<div className='mainTextBox'>
							<h1 className='mainTitle'>Portfolio</h1>
							<p className='mainInfo'>
								패션 바이블 보그는 전 세계 27개 시장에서 발행되고 있는 130년의 전통을 지닌 가장 권위
								있는 패션 매거진입니다
							</p>
						</div>
					</article>
				</Contents>
				<Contents name='aboutCont'>
					<article className='contentsHalf aboutImgFull'>
						<div className='aboutImg'>
							<figure className='aboutFigure'>
								<img src={process.env.PUBLIC_URL +'/img/about02.jpg'} alt='' />
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
									차별화 된 기획과 크리에이티브한 비주얼로 사람들에게 영감을 주는 패션 매거진의
									대명사 보그 코리아. 웹, 모바일, 소셜 미디어 등 다양한 디지털 플랫폼과 프린트
									매거진을 통해 강력한 하나의 브랜드로 존재감을 발휘하고 있습니다
								</p>
								<div className='contBtn'>
									<Link to='/about' className='btnText'>
										view &nbsp; <span> about</span>
									</Link>
								</div>
							</div>
						</div>
					</article>
				</Contents>
				<Contents name='galleryCont'>
					<div className='galleryTextCont'>
						<div>
							<h1 className='contentsTitle'>Gallery</h1>
							<p className='contentsText'>
								패셔너블한 셀럽 5인이 보여준 청키 스니커즈 활용법
								<br />
								새로운 청키 스니커즈가 등장하는 것처럼 이 신발의 활용법도 점점 다양해지고 있습니다.
								켄달 제너, 두아 리파와 같이 옷을 잘 입는 셀럽들은 각기 다른 방식으로 이 신발을
								소화하고 있죠. 셀럽들이 제안한 청키 스니커즈 활용법을 확인해봅시다
							</p>
						</div>
						<div className='contBtn'>
							<Link to='/gallery' className='btnText'>
								view &nbsp; <span>Gallery</span>
							</Link>
						</div>
					</div>
					<div className='galleryTabCont'>
						<div className='galleryTabs'>
							<div className='galleryTab on'>
								<Link to='/'>Youtube</Link>
							</div>
							<div className='galleryTab'>
								<Link to='/'>Flickr</Link>
							</div>
						</div>
						<div className='gallerySlideCont'>
							<div className='gallerySlideNav'>
								<div className='swiper-button-next'></div>
								<div className='swiper-button-prev'></div>
							</div>
							<div className='gallerySlide on'>
								<ul className='swiper-wrapper'>
									<li className='swiper-slide'>
										<div className='listCont'>
											<h3 className='galleryTitle'>youtube title</h3>
											<div className='galleryImg'>
												<figure className='galleryFigure'>
													<img src={process.env.PUBLIC_URL +'/img/dummy-yt01.jpg'} alt='' />
												</figure>
											</div>
											<div className='galleryText'>
												<p className='galleryNum'>01 /</p>
												<p className='galleryInfo'>youtube01</p>
											</div>
										</div>
									</li>
									<li className='swiper-slide'>
										<div className='listCont'>
											<h3 className='galleryTitle'>youtube title</h3>
											<div className='galleryImg'>
												<figure className='galleryFigure'>
													<img src={process.env.PUBLIC_URL +'/img/dummy-yt02.jpg'} alt='' />
												</figure>
											</div>
											<div className='galleryText'>
												<p className='galleryNum'>02 /</p>
												<p className='galleryInfo'>youtube01</p>
											</div>
										</div>
									</li>
									<li className='swiper-slide'>
										<div className='listCont'>
											<h3 className='galleryTitle'>youtube title</h3>
											<div className='galleryImg'>
												<figure className='galleryFigure'>
													<img src={process.env.PUBLIC_URL +'/img/dummy-yt03.jpg'} alt='' />
												</figure>
											</div>
											<div className='galleryText'>
												<p className='galleryNum'>03 /</p>
												<p className='galleryInfo'>youtube01</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className='gallerySlide'>
								<ul className='swiper-wrapper'>
									<li className='swiper-slide'>
										<div className='listCont'>
											<h3 className='galleryTitle'>gallery title</h3>
											<div className='galleryImg'>
												<figure className='galleryFigure'>
													<img src={process.env.PUBLIC_URL +'/img/dummy-gallery01.jpg'} alt='' />
												</figure>
											</div>
											<div className='galleryText'>
												<p className='galleryNum'>01 /</p>
												<p className='galleryInfo'>gallery01</p>
											</div>
										</div>
									</li>
									<li className='swiper-slide'>
										<div className='listCont'>
											<h3 className='galleryTitle'>gallery title</h3>
											<div className='galleryImg'>
												<figure className='galleryFigure'>
													<img src={process.env.PUBLIC_URL +'/img/dummy-gallery02.jpg'} alt='' />
												</figure>
											</div>
											<div className='galleryText'>
												<p className='galleryNum'>02 /</p>
												<p className='galleryInfo'>gallery02</p>
											</div>
										</div>
									</li>
									<li className='swiper-slide'>
										<div className='listCont'>
											<h3 className='galleryTitle'>gallery title</h3>
											<div className='galleryImg'>
												<figure className='galleryFigure'>
													<img src={process.env.PUBLIC_URL +'/img/dummy-gallery03.jpg'} alt='' />
												</figure>
											</div>
											<div className='galleryText'>
												<p className='galleryNum'>03 /</p>
												<p className='galleryInfo'>gallery03</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</Contents> */}
				<section className='boardCont'>
					<div className='inner'>
						<div className='boardWrap'>
							<div className='boardMo'>
								<h1 className='contentsTitle'>Board</h1>
								<div className='boardMoBtn'>
									<Link className='boarLink' to='/board'>
										<span className='theArrow left'>
											<span className='shaft'></span>
										</span>
										<span className='linkText'>
											<span className='text'> view </span>
											<span className='theArrow right'>
												<span className='shaft'></span>
											</span>
										</span>
									</Link>
								</div>
							</div>
							<div className='boardBox'>
								<div className='boardTextArea'>
									<p>Hello! This is Board Section</p>
									<p>This is Board Section description</p>
									<p>If you want to go to the board page,</p>
									<p>
										press the view button<span>|</span>
									</p>
								</div>
								<div className='boardBtn'>
									<Link className='boardBtnText' to='/board'>
										view
									</Link>
								</div>
							</div>
						</div>
						<div className='boardInfo'>
							<div className='sectionAccodion'>
								<div className='tab'>
									<input type='radio' name='acc' id='acc1' />
									<label htmlFor='acc1'>
										<h2>01</h2>
										<h3>How do I Apply?</h3>
									</label>
									<div className='tabContents'>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis
											sint animi pariatur, porro asperiores reprehenderit, saepe reiciendis
											similique, fugiat cupiditate explicabo minima est deleniti? Mollitia id
											inventore sapiente accusantium!
										</p>
									</div>
								</div>
								<div className='tab'>
									<input type='radio' name='acc' id='acc2' />
									<label htmlFor='acc2'>
										<h2>02</h2>
										<h3>How do I Apply?</h3>
									</label>
									<div className='tabContents'>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis
											sint animi pariatur, porro asperiores reprehenderit, saepe reiciendis
											similique, fugiat cupiditate explicabo minima est deleniti? Mollitia id
											inventore sapiente accusantium!
										</p>
									</div>
								</div>
								<div className='tab'>
									<input type='radio' name='acc' id='acc3' />
									<label htmlFor='acc3'>
										<h2>03</h2>
										<h3>How do I Apply?</h3>
									</label>
									<div className='tabContents'>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nobis
											sint animi pariatur, porro asperiores reprehenderit, saepe reiciendis
											similique, fugiat cupiditate explicabo minima est deleniti? Mollitia id
											inventore sapiente accusantium!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default Main;
