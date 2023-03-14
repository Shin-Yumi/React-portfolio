import { useState, useEffect, memo } from 'react';
import {} from 'react-router-dom';
import useScrollFadeIn from '../common/Scroll';

function BoardMain() {
	const getLocalData = () => {
		const dummys = [
			{
				title: '디스커버리 익스페디션 프리미엄 남자 고어텍스 후기',
				content:
					'안녕하세요 저는 이번에 좋은 기회로 디스커버리 익스페디션 고어텍스 바람막이 체험하게 되었습니다 우선 사이즈는 정사이즈입니다. 색상도 딱 우리가 아는 cream사이즈 입니다 ㅎㅎ',
			},
			{
				title: '어바웃톤 리턴 투 베이직 팔레트 02소프트 체험후기',
				content:
					'저는 개인적으로 펄을 별로 안좋아해서 손이 잘 안가게 되더라구요.그래서 저는 무펄섀도우들 위주로 사용하는 걸 좋아하는데,좋은 기회로 무신사 체험단을 통해서 어바웃톤 팔레트를 체험하게 되었어요!',
			},
			{
				title: '팔렛 락밴드 니트 아이보리 m 체험단 후기',
				content:
					'이 제품의 가장 장점이 아닐까 싶어요.제가 어깨가 직각에 넓은 편이라 상의를 고를 때 핏을 매우 꼼꼼히 보는데요, 락밴드 니트는 촤르르 떨어지는 재질에 소매길이가 길어서 더욱 여리한 핏으로 착용이 가능했습니다. 소매가 짧거나 애매하게 딱 맞으면 더욱 부해보일 수 있는데 제가 팔이 긴편인데도 손을 다 가리는 길이라서 정말 좋았구요, 또 어깨라인도 애매하지않고 아래로 내려와있어서 넓어보이지않게 착용가능했습니다.밑단이 조이지 않고 넓게 떨어지고 길어서 치마나 반바지를 안에 입고 착용하니 가리고 싶은 부분은 다 가려주면서 이쁜 코디가 완성되었습니다!',
			},
			{
				title: '어바웃톤 리턴 투 베이직 팔레트 02소프트 체험후기',
				content:
					'저는 개인적으로 펄을 별로 안좋아해서 손이 잘 안가게 되더라구요.그래서 저는 무펄섀도우들 위주로 사용하는 걸 좋아하는데,좋은 기회로 무신사 체험단을 통해서 어바웃톤 팔레트를 체험하게 되었어요!',
			},
		];
		const data = localStorage.getItem('post');

		if (data) return JSON.parse(data);
		else return dummys;
	};

	const [Posts] = useState(getLocalData());

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<section className='contents boardCont myScroll'>
			<div className='inner'>
				<article className='contentsHalf boardTitleCont'>
					<div className='bContWrap'>
						<div className='bTitleWrap'>
							<div className='bBox'>
								<h1 className='contentsTitle' {...useScrollFadeIn('up', 1, 0)}>
									Board
								</h1>
								<div className='boardDescWrap moBlock'>
									<p className='contentsSubTitle' {...useScrollFadeIn('up', 1, 0)}>
										{' '}
										Write your comments for vogue
									</p>
									<p className='boardDesc' {...useScrollFadeIn('up', 1, 0)}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem, harum ex laudantium quas nisi
										quae voluptatum repudiandae at quisquam maiores vero itaque sapiente ut sint fugit, molestiae fugiat? Dolorem.
									</p>
								</div>
							</div>
						</div>
						<div className='bTextWrap'>
							<div className='boardDescWrap'>
								<p className='contentsSubTitle' {...useScrollFadeIn('up', 1, 0)}>
									{' '}
									Write your comments for vogue
								</p>
								<p className='boardDesc' {...useScrollFadeIn('up', 1, 0)}>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe exercitationem, harum ex laudantium quas nisi
									quae voluptatum repudiandae at quisquam maiores vero itaque sapiente ut sint fugit, molestiae fugiat? Dolorem.
								</p>
							</div>
						</div>
					</div>
				</article>
				<article className='contentsHalf boardListCont'>
					<ul className='boardLists'>
						{Posts.map((post, idx) => {
							if (idx >= 3) return null;
							const title = post.title;
							const content = post.content;
							return (
								<li className='boardList' key={idx}>
									<div className='boardBox'>
										<p className='bListTitle'>{title.length > 20 ? title.substr(0, 20) + '...' : title}</p>
										<p className='bListText'>{content.length > 100 ? content.substr(0, 100) + '...' : content}</p>
									</div>
								</li>
							);
						})}
						<li className='boardList'>
							<img src={process.env.PUBLIC_URL + '/img/dummy-gallery02.jpg'} alt='보드이미지입니다' />
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
}
// <p>{post.content}</p>

export default memo(BoardMain);
