import React from 'react';
import { Link } from 'react-router-dom';

function SubHeader(props) {
	return (
		<header className={`subHeader ${props.name}`}>
			<div className='inner'>
				<h1 className='subHeaderTitle'>{props.name}</h1>
				<div className='subHeaderMenu'>
					<ul>
						<li className='subHeadaerMenuList'>
							<Link to='/about'>Organization</Link>
						</li>
						<li className='subHeadaerMenuList'>
							<Link to='/about'>map</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default SubHeader;
