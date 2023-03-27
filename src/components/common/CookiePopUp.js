import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';

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
	text-align: center;
	svg {
		width: 40px;
		height: 40px;
		color: #9da592;
		
	}
	h1 {
		margin-top: 10px;
		font-size: 40px;
		color: #333;
	}
	p {
		margin-top: 10px;
		font-family: 'S-CoreDream-3Light';
		font-size: 12px;
		line-height: 1.3;
		letter-spacing: -0.6px;
		color: #777;
		//text-align: left;
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

function Cookie({ closeModal, closeModalUntilExpires }) {
	return (
		<ModalContainer>
			<ModalContent>
				<FontAwesomeIcon icon={faCookieBite} />
				<h1>Cookie!</h1>
				<p>we use cookies to make your experience on this website better!</p>
			</ModalContent>
			<ModalCloseWrapper>
				<p onClick={closeModalUntilExpires}>오늘 하루 더 이상 보지 않기</p>
				<p onClick={closeModal}>닫기</p>
			</ModalCloseWrapper>
		</ModalContainer>
	);
}

export default Cookie;
