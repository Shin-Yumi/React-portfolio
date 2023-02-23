function Contents(props) {
	return (
		<section className={`contents ${props.name} myScroll`}>
			<div className='inner'>
				{props.children}
			</div>
		</section>
	);
}

export default Contents;
