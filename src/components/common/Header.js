import { useState, useEffect, React } from 'react';

import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function Header(props) {
	const active = { color: '#9DA592' };
	const [isOpen, setOpen] = useState(false);
	
	function toggle() {
		setOpen(!isOpen);
	}

	return (
		<header id='header' className={props.type}>
			<div className='inner'>
				<div className='logo'>
					<h1 className='headerLogo'>
						<NavLink exact to='/'>
							Yoom
						</NavLink>
					</h1>
				</div>
				<nav id='menuPC'>
					<ul className='menuWrap'>
						<li className='menuList'>
							<NavLink to='/about/organization' className='menuLink' activeStyle={active}>
								About
							</NavLink>
							<ul></ul>
						</li>
						<li className='menuList'>
							<NavLink to='/gallery' className='menuLink' activeStyle={active}>
								Gallery
							</NavLink>
						</li>
						<li className='menuList'>
							<NavLink to='/board' className='menuLink' activeStyle={active}>
								Board
							</NavLink>
						</li>
						<li className='menuList'>
							<NavLink to='/join' className='menuLink' activeStyle={active}>
								Join
							</NavLink>
						</li>
						<li className='menuList'>
							<NavLink to='/contact' className='menuLink' activeStyle={active}>
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
				<Link to='/' className={isOpen ? 'hamMenu on' : 'hamMenu'} onClick={toggle}>
					<span>메뉴호출</span>
				</Link>
				<nav id='menuMo' className={isOpen ? 'on' : ''}>
					<div className='inner'>
						<div className='mobileMenu'>
							<h1 className='menuLogo'>YOOM</h1>
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
											<NavLink to='/gallery'>youtube</NavLink>
										</li>
										<li className='aboutSubList'>
											<NavLink to='/gallery'>flickr</NavLink>
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
				</nav>
			</div>
		</header>
	);
}

export default Header;
