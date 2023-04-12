function Btns({ setActive, Active }) {
	return (
		<ul>
			{[0, 1, 2].map((num) => (
				<li className={Active === num ? 'on' : ''} onClick={() => setActive(num)}>
					{num + 1}
				</li>
			))}
		</ul>
	);
}

export default Btns;