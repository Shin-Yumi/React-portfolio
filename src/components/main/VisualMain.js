import Contents from "./Contents";

function VisualMain() {
	return (
		<Contents name='mainCont'>
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
	);
}

export default VisualMain;

