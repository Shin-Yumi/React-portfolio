function Contents(props) {
	return (
		<section className={`contents ${props.name}`}>
			<div className='inner'>
				{props.children}
			</div>
		</section>
	);
}

export default Contents;
