import { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Menu = forwardRef((props, ref) => {
	const [Open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		//부모의 토글버튼 클릭시 기존 Open state값이 계속 반전되야 하므로 !Open으로 설정
		
		return { setToggle: () => setOpen(!Open) };
	});

	useEffect(() => {
		window.addEventListener('resize', () => {
			if (window.innerWidth >= 778) setOpen(false);
		});
	});

	return (
		<AnimatePresence>
			{Open && (
				<motion.nav
					id='menuMo'
					initial={{ x: -270, opacity: 0 }}
					animate={{ x: 0, opacity: 1, transition: { duration: 0.3 } }}
					exit={{ x: -270, opacity: 0 }}
					onClick={() => setOpen(false)}
				>
					<div className='inner'>
						<div className='mobileMenu'>
							<Link to='/' className='menuLogo'>
								Vogue
							</Link>
							<ul className='mMenuWrap'>
								<li className='mMenuList'>
									<p className='mMenuTitle'>About</p>
									<ul className='aboutSub'>
										<li className='aboutSubList'>
											<NavLink to='/about/organization'>Organization</NavLink>
										</li>
										<li className='aboutSubList'>
											<NavLink to='/about/map'>map</NavLink>
										</li>
									</ul>
								</li>
								<li className='mMenuList'>
									<p className='mMenuTitle'>Gallery</p>
									<ul className='aboutSub'>
										<li className='aboutSubList'>
											<NavLink to='/gallery/youtube'>youtube</NavLink>
										</li>
										<li className='aboutSubList'>
											<NavLink to='/gallery/flickr'>flickr</NavLink>
										</li>
									</ul>
								</li>
								<li className='mMenuList'>
									<NavLink to='/board'>
										<p className='mMenuTitle'>Board</p>
									</NavLink>
								</li>
								<li className='mMenuList'>
									<NavLink to='/join'>
										<p className='mMenuTitle'>Join</p>
									</NavLink>
								</li>
								<li className='mMenuList'>
									<NavLink to='/contact'>
										<p className='mMenuTitle'>Contact</p>
									</NavLink>
								</li>
							</ul>
							<ul className='mMenuFooter'>
								<li className='mMenuFooterList'>
									<Link to='https://github.com/Shin-Yumi'>
										<FontAwesomeIcon icon={faGithub} />
									</Link>
								</li>
								<li className='mMenuFooterList'>
									<Link to='https://painted-snowshoe-84d.notion.site/Front-end-Developer-cc9e3c1e16d14137af7f0f6bdc8922a2'>
										<i className='notion-icon'></i>
									</Link>
								</li>
								<li className='mMenuFooterList'>
									<Link to='https://hafe-is-me.tistory.com/'>
										<i className='tistory-icon'></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</motion.nav>
			)}
		</AnimatePresence>
	);
});

export default Menu;
