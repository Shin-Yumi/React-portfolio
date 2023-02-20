import Layout from '../common/Layout';

function Join() {
	const name = 'Join';
	const title = 'Join'; 
	const subTitle = '회원가입';
	const expCaption =
		'vogue의 회원이 되어 정기구독과 할인의 혜택을 누려보세요.';
	return (
		<Layout name={name} title={title} subTitle={subTitle} expCaption={expCaption}>
			<article className='joinCont'>
				<div className='inner'>
					<form action='result.html' method='get' id='member'>
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
												/>
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
												/>
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
												/>
											</div>
										</div>
									</li>

									<li className='joinList'>
										<div className='joinBox'>
											<label className='joinTitle' htmlFor='name'>
												Name
											</label>
											<div className='joinInput'>
												<input type='text' name='name' id='name' placeholder='이름을 입력하세요' />
											</div>
										</div>
									</li>

									<li className='joinList'>
										<div className='joinBox'>
											<p className='joinTitle'>Education</p>
											<div className='joinInput'>
												<div className='eduBox'>
													<select name='edu' id='edu'>
														<option value=''>선택하세요</option>
														<option value='elementary school'>초등학교 졸업</option>
														<option value='middle school'>중학교 졸업</option>
														<option value='high school'>고등학교 졸업</option>
														<option value='college'>대학교 졸업</option>
													</select>
												</div>
											</div>
										</div>
									</li>

									<li className='joinList'>
										<div className='joinBox'>
											<p className='joinTitle'>Gender</p>
											<div className='joinInput'>
												<div className='radioBox'>
													<div className='joinRadio'>
														<input type='radio' name='gender' id='male' value='male' />
														<label htmlFor='male'>Male</label>
													</div>
													<div className='joinRadio'>
														<input type='radio' name='gender' id='female' value='female' />
														<label htmlFor='female'>Female</label>
													</div>
												</div>
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
												/>
											</div>
										</div>
									</li>
									<li className='joinList'>
										<div className='joinBox'>
											<p className='joinTitle'>Favorite</p>
											<div className='joinInput'>
												<div className='joinCheck'>
													<label htmlFor='html'>
														<input type='checkbox' name='favorite' id='html' value='html' />
														<span className='checkIcon'></span>
														<span className='checkTxt'>html</span>
													</label>
												</div>
												<div className='joinCheck'>
													<label htmlFor='css'>
														<input type='checkbox' name='favorite' id='css' value='css' />
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
														/>
														<span className='checkIcon'></span>
														<span className='checkTxt'>Javascript</span>
													</label>
												</div>
												<div className='joinCheck'>
													<label htmlFor='react'>
														<input type='checkbox' name='favorite' id='react' value='react' />
														<span className='checkIcon'></span>
														<span className='checkTxt'>React</span>
													</label>
												</div>
												<div className='joinCheck'>
													<label htmlFor='vue'>
														<input type='checkbox' name='favorite' id='vue' value='vue' />
														<span className='checkIcon'></span>
														<span className='checkTxt'>Vue</span>
													</label>
												</div>
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
												></textarea>
											</div>
										</div>
									</li>
									<li className='joinList'>
										<div className='joinBox'>
											<label className='joinTitle' label htmlFor='submit'>
												button
											</label>
											<div className='joinInput'>
												<input type='submit' value='submit' />
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
