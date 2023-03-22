import styled from 'styled-components';

const ModalContainer = styled.div`
	position: fixed;
	top: 100px;
	right: 10px;
	z-index: 1000;
	width: 300px;
	height: 250px;
	padding: 30px;
	background-color: #ecece3;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border: 1px solid #777;
`;

const ModalContent = styled.div`
	width: 100%;
	p {
		font-family: 'S-CoreDream-3Light';
		font-size: 16px;
		line-height: 1.3;
		letter-spacing: -0.6px;
		color: #777;
	}
`;

const ModalCloseWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	p {
		font-family: 'S-CoreDream-3Light';
		font-size: 12px;
		line-height: 1.3;
		letter-spacing: -0.6px;
		color: #777;
		cursor: pointer;
	}
`;

function Cookie({ closeModal }) {
	return (
		<ModalContainer>
			<ModalContent>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione labore sint impedit, optio mollitia quae soluta possimus
				itaque obcaecati unde expedita laudantium ducimus distinctio quasi rerum molestiae velit, quibusdam cum.
			</ModalContent>
			<ModalCloseWrapper>
				<p>오늘 하루 더 이상 보지 않기</p>
				<p onClick={closeModal}>닫기</p>
			</ModalCloseWrapper>
		</ModalContainer>
	);
}

export default Cookie;
