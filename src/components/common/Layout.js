function Layout(props) {
	return (
		<section className={`content ${props.name}`}>
			<div className='wrap'>
				<figure></figure>
				<div className='inner'>
					<h1>{props.name}</h1>
          {props.children}
				</div>
			</div>
		</section>
	);
}

export default Layout;