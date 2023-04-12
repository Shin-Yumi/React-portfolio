function Btns({ setActive, Active }) {
	return (
		<ul className='navBtns'>
			{[0, 1, 2].map((num) => (
				<li key={num} className={Active === num ? 'on' : ''} onClick={() => setActive(num)}>
					{num + 1}
				</li>
			))}
		</ul>
	);
}

export default Btns;
