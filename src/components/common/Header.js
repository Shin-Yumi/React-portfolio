import { useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { toggle } from '../../redux/menuSlice';

function Header(props) {
	const dispatch = useDispatch();
	const active = { color: '#9DA592' };

	return (
		<>
			<header id='header'>
				<div className='inner'>
					<div className='logo'>
						<h1 className='headerLogo'>
							<NavLink exact to='/'>
								Vogue
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
								<NavLink to='/gallery/youtube' className='menuLink' activeStyle={active}>
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
					<Link
						to='/'
						className='hamMenu'
						onClick={(e) => {
							e.preventDefault();
							dispatch(toggle());
						}}
					>
						<span>메뉴호출</span>
					</Link>
				</div>
			</header>
		</>
	);
}

export default Header;
