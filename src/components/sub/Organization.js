import Layout from '../common/Layout';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Organization() {
	const name = 'about';
	const title = 'Organization';
	const subTitle = '조직도';
	const sub01 = 'organization';
	const sub02 = 'map';
	const expCaption =
		'Vogue의 새로운 사업 부문인 CCL(Creative Content Lab.) 팀은 두산매거진이 보유한 국내 최고의 컨텐츠 제작 역량을 기반으로, 브랜드의 가치를 높여주는 커뮤니케이션 통합 솔루션을 제시하고 있습니다';

	const [Members, setMembers] = useState([]);

	useEffect(() => {
		axios.get(`${process.env.PUBLIC_URL}/DB/member.json`).then((json) => {
			setMembers(json.data.members);
		});
	}, []);

	useEffect(() => {
		console.log(Members);
	}, [Members]);

	return (
		<Layout
			name={name}
			title={title}
			subTitle={subTitle}
			expCaption={expCaption}
			sub01={sub01}
			sub02={sub02}
		>
			<article id='organization' className='aboutCont'>
				<div className='inner'>
					<div className='aboutSectionCont'>
						<ul className='organizationWarp'>
							{Members.map((el, index) => {
								return (
									<li key={index} className='organizationList'>
										<div className='organizationBox'>
											<h2 className='organizationTitle'>{el.position}</h2>
											<div className='organizationImg'>
												<img src={`${process.env.PUBLIC_URL}/img/${el.pic}`} alt={el.name} />
											</div>
											<p className='organizationJob'>
												0{index + 1} / <span>{el.name}</span>
											</p>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</article>
		</Layout>
	);
}

export default Organization;
