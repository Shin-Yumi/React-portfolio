import Layout from '../common/Layout';
import { useState, useRef, useEffect } from 'react';

function Community() {
	//로컬스토리지의 데이터를 반환하는 함수
	//로컬스토리지의 값이 있으면 해당 값을 다시 json형태로 변경해서 반환
	//로컬스토리지의 값이 없으면 빈 배열을 반환
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

	//post 추가함수
	const createPost = () => {
		if (!input.current.value.trim() || !textarea.current.value.trim()) {
			resetForm();
			return alert('제목과 본문을 모두 입력하세요.');
		}
		setPosts([{ title: input.current.value, content: textarea.current.value }, ...Posts]);
		resetForm();
	};

	//post 삭제함수
	const deletePost = (delIndex) => {
		if (!window.confirm('해당 게시글을 삭제하겠습니까?')) return;
		setPosts(Posts.filter((_, postIndex) => postIndex !== delIndex));
	};

	//post 수정모드 변경함수
	const enableUpdate = (editIndex) => {
		if (!Allowed) return;
		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === editIndex) post.enableUpdate = true;
				return post;
			})
		);
		//수정모드에 진입하면 Allowed값을 false로 바꿔서 다른글의 수정모드 진입을 방지
		setAllowed(false);
	};

	//post 출력모드 변경함수
	const disableUpdate = (editIndex) => {
		setPosts(
			Posts.map((post, postIndex) => {
				if (postIndex === editIndex) post.enableUpdate = false;
				return post;
			})
		);
		//출력모드로 변경시 다시 Allowed값을 true로 변경해서 다시 다른 글 수정모드로 변경할 수 있게 처리
		setAllowed(true);
	};

	//post 수정함수
	const updatePost = (updateIndex) => {
		if (!inputEdit.current.value.trim() || !textareaEdit.current.value.trim()) {
			return alert('수정할 제목과 본문을 모두 입력하세요.');
		}

		setPosts(
			Posts.map((post, postIndex) => {
				//현재 반복도는 post순번과 파라미터로 전달받은 수정할 포스트 순번이 같으면
				if (postIndex === updateIndex) {
					//수정모드에서 입력한 input, textarea값으로 기존 포스트 제목, 본문을 변경
					post.title = inputEdit.current.value;
					post.content = textareaEdit.current.value;
					//출력모드로 다시 변경
					post.enableUpdate = false;
				}
				return post;
			})
		);

		//수정 완료시 다시 다른글 수정모드로 진입할 수 있게 수정
		setAllowed(true);
	};

	useEffect(() => {
		//console.log(Posts);
		//Posts값이 변경될때마다 해당 데이터를 문자화해서 다시 localStorage에 저장
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<Layout name={'Community'}>
			<div className='inputBox'>
				<input type='text' placeholder='제목을 입력하세요' ref={input} />
				<br />
				<textarea cols='30' rows='3' placeholder='본문을 입력하세요.' ref={textarea}></textarea>
				<br />

				<div className='btnSet'>
					<button onClick={resetForm}>CANCEL</button>
					<button onClick={createPost}>WRITE</button>
				</div>
			</div>

			<div className='showBox'>
				{Posts.map((post, idx) => {
					return (
						<article key={idx}>
							{post.enableUpdate ? (
								//현재 반복도는 post의 enableUpdate값이 true면
								//수정모드 렌더링
								<>
									<div className='txt'>
										<input type='text' defaultValue={post.title} ref={inputEdit} />
										<br />
										<textarea
											cols='30'
											rows='3'
											defaultValue={post.content}
											ref={textareaEdit}
										></textarea>
									</div>

									<div className='btnSet'>
										<button onClick={() => disableUpdate(idx)}>CANCEL</button>
										<button onClick={() => updatePost(idx)}>UPDATE</button>
									</div>
								</>
							) : (
								//현재 반복도는 post의 enableUpdate값이 없거나 false면
								//출력모드 렌더링
								<>
									<div className='txt'>
										<h2>{post.title}</h2>
										<p>{post.content}</p>
									</div>

									<div className='btnSet'>
										{/* 수정버튼 클릭시 수정할 글의 순번을 enableUpdate함수의 인수로 전달 */}
										<button onClick={() => enableUpdate(idx)}>EDIT</button>
										{/* 삭제버튼 클릭시 삭제할 글의 순번을 deletePost함수의 인수로 전달 */}
										<button onClick={() => deletePost(idx)}>DELETE</button>
									</div>
								</>
							)}
						</article>
					);
				})}
			</div>
		</Layout>
	);
}

export default Community;
