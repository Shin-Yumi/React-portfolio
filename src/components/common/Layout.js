import { Link } from 'react-router-dom';

function Layout(props) {
	return (
		<main className={`subPage ${props.name}`}>
			<div className='wrap'>
				<div className='subContents'>
					<header className={`subHeader ${props.name}`}>
						<div className='inner'>
							<h1 className='subHeaderTitle'>{props.name}</h1>
							<div className='subHeaderMenu'>
								<ul>
									<li className='subHeadaerMenuList'>
										<Link to={`/${props.name}/${props.sub01}`}>{props.sub01}</Link>
									</li>
									<li className='subHeadaerMenuList'>
										<Link to={`/${props.name}/${props.sub02}`}>{props.sub02}</Link>
									</li>
								</ul>
							</div>
						</div>
					</header>
					<section className='subSection'>
						<div className='inner'>
							<div className='sectionExp'>
								<h3 className='expTitle'>{props.title} / <span>{props.subTitle}</span></h3>
								<p className='expCaption'>{props.expCaption}</p>
							</div>
							<div className='sectionCont'>{props.children}</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}

export default Layout;
