import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
`;

const ModalBackground = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 1000;
`;

const ModalContainer = styled.div`
	position: fixed;
	top: 100px;
	right: 20px;
	z-index: 1000;
	width: 320px;
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
		font-size: 16px;
		line-height: 1.3;
		letter-spacing: -0.6px;
		color: #777;
		cursor: pointer;
	}
`;

function Cookie({ closeModal }) {
	return (
		<Container>
			<ModalBackground />
			<ModalContainer>
				<ModalContent>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione labore sint impedit, optio mollitia quae soluta
					possimus itaque obcaecati unde expedita laudantium ducimus distinctio quasi rerum molestiae velit, quibusdam cum.
				</ModalContent>
				<ModalCloseWrapper>
					<p>오늘 하루 더 이상 보지 않기</p>
					<p onClick={closeModal}>닫기</p>
				</ModalCloseWrapper>
			</ModalContainer>
		</Container>
	);
}

export default Cookie;
