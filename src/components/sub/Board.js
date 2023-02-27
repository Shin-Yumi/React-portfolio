import { Link } from 'react-router-dom';
import Layout from '../common/Layout';
import { useState, useEffect, useRef } from 'react';

function Board() {
	const name = 'Board';
	const title = 'Board';
	const subTitle = '자유게시판';
	const expCaption =
		'미풍양속을 해치지 않는 범위 내에서 Vogue에 대한 의견을 자유롭게 작성해주세요.';

	const getLocalData = () => {
		const data = localStorage.getItem('post');

		return JSON.parse(data);
	};

	const input = useRef(null);
	const textarea = useRef(null);
	const inputEdit = useRef(null);
	const textareaEdit = useRef(null);
	const [Posts, setPosts] = useState(getLocalData());
	const [Allowed, setAllowed] = useState(true);

	const resetForm = () => {
		input.current.value = '';
		textarea.current.value = '';
	};

	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetForm();
			return alert('제목과 본문을 모두 입력하세요.');
		}
		setPosts([{ title: input.current.value, content: textarea.current.value }, ...Posts]);
		resetForm();
	};

	const deletePost = (delIndex) => {
		if (!window.confirm('해당 게시글을 삭제하겠습니까?')) return;
		setPosts(Posts.filter((_, postIndex) => postIndex !== delIndex));
	};

	const enableUpdate = (editIndex) => {
		if (!Allowed) return;
		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === editIndex) post.enableUpdate = true;
				return post;
			})
		);
		setAllowed(false);
	};

	const disableUpdate = (editIndex) => {
		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === editIndex) post.enableUpdate = false;
				return post;
			})
		);
		setAllowed(true);
	};

	const updatePost = (updateIndex) => {
		if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
			return alert('수정할 제목과 본문을 모두 입력하세요.');
		}

		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === updateIndex) {
					post.title = inputEdit.current.value;
					post.content = textareaEdit.current.value;
					post.enableUpdate = false;
				}
				return post;
			})
		);

		setAllowed(true);
	};

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<Layout name={name} title={title} subTitle={subTitle} expCaption={expCaption}>
			<div className='boardSectionCont'>
				<div className='boardCreate'>
					<div className='boardImg'></div>
					<div className='inputBox'>
						<input type='text' placeholder='제목을 입력하세요' ref={input} />
						<br />
						<textarea cols='30' rows='5' placeholder='본문을 입력하세요.' ref={textarea}></textarea>
						<br />

						<div className='btnSet'>
							<button onClick={resetForm}>CANCEL</button>
							<button onClick={createPost}>WRITE</button>
						</div>
					</div>
				</div>

				<table>
					<caption className='hidden'>회원 자유 게시판</caption>
					<thead className='hidden'>
						<tr>
							<th scope='col'>번호</th>
							<th scope='col'>게시글제목</th>
						</tr>
					</thead>
					<tbody>
						{Posts.map((post, idx) => {
							return (
								<tr key={idx}>
									{post.enableUpdate ? (
										<>
											<td>
												<div className='boardList'>
													<div className='enableBox'>
														<input type='text' defaultValue={post.title} ref={inputEdit} />

														<textarea
															cols='30'
															rows='4'
															defaultValue={post.content}
															ref={textareaEdit}
														></textarea>
														<div className='enableBtnBox'>
															<button onClick={() => disableUpdate(idx)}>CANCEL</button>
															<button onClick={() => updatePost(idx)}>UPDATE</button>
														</div>
													</div>
												</div>
											</td>
										</>
									) : (
										<>
											<td>
												<div className='boardList'>
													<p className='boardTit'>{post.title}</p>
													<p className='boardTxt'>{post.content}</p>
													<div className='btnSet'>

														<button onClick={() => enableUpdate(idx)}>EDIT</button>
														<button onClick={() => deletePost(idx)}>DELETE</button>
													</div>
												</div>
											</td>
										</>
									)}
								</tr>
							);
						})}
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
