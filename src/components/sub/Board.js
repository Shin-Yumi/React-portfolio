import { Link } from 'react-router-dom';
import Layout from '../common/Layout';

function Board() {
	const name = 'Board';
	const title = 'Board';
	const subTitle = '자유게시판';
	const expCaption =
		'미풍양속을 해치지 않는 범위 내에서 Vogue에 대한 의견을 자유롭게 작성해주세요.';
	return (
		<Layout name={name} title={title} subTitle={subTitle} expCaption={expCaption}>
			<div className='boardSectionCont'>
				<table>
					<caption className='hidden'>회원 자유 게시판</caption>
					<thead className='hidden'>
						<tr>
							<th scope='col'>번호</th>
							<th scope='col'>게시글제목</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Link to='/'>
									<p className='boardText'>Lorem, ipsum dolor.</p>
									<div className='boardArrow'></div>
								</Link>
							</td>
						</tr>
						<tr>
							<td>
								<Link to='/'>
									<p className='boardText'>Lorem, ipsum dolor.</p>
									<div className='boardArrow'></div>
								</Link>
							</td>
						</tr>
						<tr>
							<td>
								<Link to='/'>
									<p className='boardText'>Lorem, ipsum dolor.</p>
									<div className='boardArrow'></div>
								</Link>
							</td>
						</tr>
						<tr>
							<td>
								<Link to='/'>
									<p className='boardText'>Lorem, ipsum dolor.</p>
									<div className='boardArrow'></div>
								</Link>
							</td>
						</tr>
						<tr>
							<td>
								<Link to='/'>
									<p className='boardText'>Lorem, ipsum dolor.</p>
									<div className='boardArrow'></div>
								</Link>
							</td>
						</tr>
						<tr>
							<td>
								<Link to='/'>
									<p className='boardText'>Lorem, ipsum dolor.</p>
									<div className='boardArrow'></div>
								</Link>
							</td>
						</tr>
						<tr>
							<td>
								<Link to='/'>
									<p className='boardText'>Lorem, ipsum dolor.</p>
									<div className='boardArrow'></div>
								</Link>
							</td>
						</tr>
						<tr>
							<td>
								<Link to='/'>
									<p className='boardText'>Lorem, ipsum dolor.</p>
									<div className='boardArrow'></div>
								</Link>
							</td>
						</tr>
						<tr>
							<td>
								<Link to='/'>
									<p className='boardText'>Lorem, ipsum dolor.</p>
									<div className='boardArrow'></div>
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
				<div className='pagination'>
					<Link to='/' className='prev'></Link>

					<p className='numbers'>
						<Link to='/'>1</Link>
						<Link to='/'>2</Link>
						<Link to='/'>3</Link>
						<Link to='/'>4</Link>
						<Link to='/'>5</Link>
					</p>

					<Link to='/' className='next'></Link>
				</div>
			</div>
		</Layout>
	);
}

export default Board;
