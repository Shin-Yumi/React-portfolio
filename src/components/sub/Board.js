import { Link } from 'react-router-dom';
import Layout from '../common/Layout';
import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash, faUpload, faXmark } from '@fortawesome/free-solid-svg-icons';

function Board() {
	const name = 'Board';
	const title = 'Board';
	const subTitle = '자유게시판';
	const expCaption = '미풍양속을 해치지 않는 범위 내에서 Vogue에 대한 의견을 자유롭게 작성해주세요.';

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
				<div className='boardListWrap'>
					<ul className='boardLists'>
						{Posts.map((post, idx) => {
							const title = post.title;
							const content = post.content;
							return (
								<li className='boardList' key={idx}>
									{post.enableUpdate ? (
										<>
											<div className='bListBox'>
												<div className='listBox'>
													<div className='enableBox'>
														<input type='text' defaultValue={post.title} ref={inputEdit} />

														<textarea cols='30' rows='4' defaultValue={post.content} ref={textareaEdit}></textarea>
														<div className='enableBtnBox'>
															<button onClick={() => updatePost(idx)}>
																<FontAwesomeIcon icon={faUpload} />
															</button>
															<button onClick={() => disableUpdate(idx)}>
																<FontAwesomeIcon icon={faXmark} />
															</button>
														</div>
													</div>
												</div>
											</div>
										</>
									) : (
										<>
											<div>
												<div className='bListBox'>
													<div className='boxText'>
														<p className='boardTit'>{title.length > 20 ? title.substr(0, 20) + '...' : title}</p>
														<p className='boardTxt'>{content.length > 100 ? content.substr(0, 100) + '...' : content}</p>
													</div>

													<div className='btnSet'>
														<button onClick={() => enableUpdate(idx)}>
															<FontAwesomeIcon icon={faPenToSquare} />
														</button>
														<button onClick={() => deletePost(idx)}>
															<FontAwesomeIcon icon={faTrash} />
														</button>
													</div>
												</div>
											</div>
										</>
									)}
								</li>
							);
						})}
					</ul>
				</div>

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
