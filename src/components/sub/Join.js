import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Join() {
	const name = 'Join';
	const title = 'Join';
	const subTitle = '회원가입';
	const expCaption = 'vogue의 회원이 되어 정기구독과 할인의 혜택을 누려보세요.';

	const history = useHistory();
	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		name: '',
		email: '',
		gender: false,
		favorite: false,
		comments: '',
		edu: '',
	};

	const [Val, setVal] = useState(initVal);
	const [Err, setErr] = useState({});
	const [Submit, setSubmit] = useState(false);

	//인증 체크함수
	const check = (value) => {
		const errs = {};
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*)]/;

		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}
		if (
			value.pwd1.length < 5 ||
			!eng.test(value.pwd1) ||
			!num.test(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 = '비밀번호는 5글자 이상, 영문, 숫자, 특수문자를 모두 포함하세요';
		}
		if (value.pwd1 !== value.pwd2 || !value.pwd2) {
			errs.pwd2 = '두개의 비밀번호를 동일하게 입력하세요';
		}
		if (value.name.length < 2) {
			errs.name = '이름을 두글자 이상 입력하세요';
		}
		if (value.edu === '') {
			errs.edu = '최종 학력을 선택하세요.';
		}
		if (!value.gender) {
			errs.gender = '성별을 선택하세요.';
		}
		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = '이메일은 8글자 이상 @를 포함하세요';
		}
		if (!value.favorite) {
			errs.favorite = '관심사를 하나이상 선택하세요.';
		}
		if (value.comments.length < 20) {
			errs.comments = '코멘트는 20글자 이상 입력하세요';
		}

		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};


	const handleRadio = (e) => {
		const { name } = e.target;
		const isChecked = e.target.checked;
		setVal({ ...Val, [name]: isChecked });
	};

	const handleCheck = (e) => {
		const { name } = e.target;
		let isChecked = false;
		const inputs = e.target.parentElement.querySelectorAll('input');

		//모든 체크박스를 반복을 돌면서 하나라도 체크된게 있으면 true값으로 변경후 리턴
		inputs.forEach((el) => el.checked && (isChecked = true));
		setVal({ ...Val, [name]: isChecked });
	};

	const handleSelect = (e) => {
		const { name } = e.target;
		const selected = e.target.value;
		setVal({ ...Val, [name]: selected });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(Val));
	};

	useEffect(() => {
		const len = Object.keys(Err).length;
		if (len === 0 && Submit) {
			alert('모든 인증을 통과했습니다.');
			history.push('/');
		}
	}, [Err,history]);

	return (
		<Layout name={name} title={title} subTitle={subTitle} expCaption={expCaption}>
			<article className='joinCont'>
				<div className='inner'>
					<form action='result.html' method='get' id='member' onSubmit={handleSubmit}>
						<fieldset>
							<legend className='hidden'>회원 가입 폼 입력 양식</legend>
							<div className='joinWrap'>
								<ul className='joinListWrap'>
									<li className='joinList'>
										<div className='joinBox'>
											<label className='joinTitle' htmlFor='userid'>
												User ID
											</label>
											<div className='joinInput'>
												<input
													type='text'
													name='userid'
													id='userid'
													placeholder='아이디를 입력하세요.'
													onChange={handleChange}
												/>
												<p className='err'>{Err.userid}</p>
											</div>
										</div>
									</li>

									<li className='joinList'>
										<div className='joinBox'>
											<label className='joinTitle' htmlFor='pwd1'>
												Password
											</label>
											<div className='joinInput'>
												<input
													type='password'
													name='pwd1'
													id='pwd1'
													placeholder='비밀번호를 입력하세요.'
													onChange={handleChange}
												/>
												<p className='err'>{Err.pwd1}</p>
											</div>
										</div>
									</li>

									<li className='joinList'>
										<div className='joinBox'>
											<label className='joinTitle' htmlFor='pwd2'>
												RePassword
											</label>
											<div className='joinInput'>
												<input
													type='password'
													name='pwd2'
													id='pwd2'
													placeholder='비밀번호를 입력하세요.'
													onChange={handleChange}
												/>
												<p className='err'>{Err.pwd2}</p>
											</div>
										</div>
									</li>

									<li className='joinList'>
										<div className='joinBox'>
											<label className='joinTitle' htmlFor='name'>
												Name
											</label>
											<div className='joinInput'>
												<input
													type='text'
													name='name'
													id='name'
													placeholder='이름을 입력하세요'
													onChange={handleChange}
												/>
												<p className='err'>{Err.name}</p>
											</div>
										</div>
									</li>

									<li className='joinList'>
										<div className='joinBox'>
											<p className='joinTitle'>Education</p>
											<div className='joinInput'>
												<div className='eduBox'>
													<select name='edu' id='edu' onChange={handleSelect}>
														<option value=''>선택하세요</option>
														<option value='elementary school'>초등학교 졸업</option>
														<option value='middle school'>중학교 졸업</option>
														<option value='high school'>고등학교 졸업</option>
														<option value='college'>대학교 졸업</option>
													</select>
												</div>
												<p className='err'>{Err.name}</p>
											</div>
										</div>
									</li>

									<li className='joinList'>
										<div className='joinBox'>
											<p className='joinTitle'>Gender</p>
											<div className='joinInput'>
												<div className='radioBox'>
													<div className='joinRadio'>
														<input
															type='radio'
															name='gender'
															id='male'
															value='male'
															onChange={handleRadio}
														/>
														<label htmlFor='male'>Male</label>
													</div>
													<div className='joinRadio'>
														<input
															type='radio'
															name='gender'
															id='female'
															value='female'
															onChange={handleRadio}
														/>
														<label htmlFor='female'>Female</label>
													</div>
												</div>
												<p className='err'>{Err.gender}</p>
											</div>
										</div>
									</li>
									<li className='joinList'>
										<div className='joinBox'>
											<label className='joinTitle' label htmlFor='email'>
												Email
											</label>
											<div className='joinInput'>
												<input
													type='text'
													name='email'
													id='email'
													placeholder='이메일을 입력하세요.'
													onChange={handleChange}
												/>
												<p className='err'>{Err.email}</p>
											</div>
										</div>
									</li>
									<li className='joinList'>
										<div className='joinBox'>
											<p className='joinTitle'>Favorite</p>
											<div className='joinInput'>
												<div className='joinCheck'>
													<label htmlFor='html'>
														<input
															type='checkbox'
															name='favorite'
															id='html'
															value='html'
															onChange={handleCheck}
														/>
														<span className='checkIcon'></span>
														<span className='checkTxt'>html</span>
													</label>
												</div>
												<div className='joinCheck'>
													<label htmlFor='css'>
														<input
															type='checkbox'
															name='favorite'
															id='css'
															value='css'
															onChange={handleCheck}
														/>
														<span className='checkIcon'></span>
														<span className='checkTxt'>Css</span>
													</label>
												</div>
												<div className='joinCheck'>
													<label htmlFor='javascript'>
														<input
															type='checkbox'
															name='favorite'
															id='javascript'
															value='javascript'
															onChange={handleCheck}
														/>
														<span className='checkIcon'></span>
														<span className='checkTxt'>Javascript</span>
													</label>
												</div>
												<div className='joinCheck'>
													<label htmlFor='react'>
														<input
															type='checkbox'
															name='favorite'
															id='react'
															value='react'
															onChange={handleCheck}
														/>
														<span className='checkIcon'></span>
														<span className='checkTxt'>React</span>
													</label>
												</div>
												<div className='joinCheck'>
													<label htmlFor='vue'>
														<input
															type='checkbox'
															name='favorite'
															id='vue'
															value='vue'
															onChange={handleCheck}
														/>
														<span className='checkIcon'></span>
														<span className='checkTxt'>Vue</span>
													</label>
												</div>
												<p className='err'>{Err.favorite}</p>
											</div>
										</div>
									</li>
									<li className='joinList'>
										<div className='joinBox'>
											<label className='joinTitle' label htmlFor='comments'>
												Comments
											</label>
											<div className='joinInput'>
												<textarea
													name='comments'
													id='comments'
													placeholder='남기는 말을 입력하세요'
													onChange={handleChange}
												></textarea>
												<p className='err'>{Err.comments}</p>
											</div>
										</div>
									</li>
									<li className='joinList'>
										<div className='joinBox'>
											<label className='joinTitle' label htmlFor='submit'>
												button
											</label>
											<div className='joinInput'>
												<input type='submit' value='submit' onClick={() => setSubmit(true)} />
											</div>
										</div>
									</li>
								</ul>
							</div>
						</fieldset>
					</form>
				</div>
			</article>
		</Layout>
	);
}

export default Join;
