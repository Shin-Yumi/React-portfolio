import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<App />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

/**
 * actionType.js : 각 데이터 별로 활용한 문자열 액션 타입을 변수처럼 모아놓은 객체
 * reducer.js : 전역 state의 데이터를 변경하는 함수
 * saga.js : reducer에 추가 기능 확장을 위한 미들웨어(비동기 데이터 요청을 컴포넌트 외부에서 관리)
 * api.js : 외부 비동기 데이터 호출문을 이 곳에 컴포넌트 외부 파일로 따로 관리
 * store.js : state가 저장될 전역 공간(saga 적용이 가능하도록 미들웨어 설정)
 * 
 * 위의 파일들은 부수효과(side effect)를 발생시키지 않는 순수 함수(pure function) 형태로 동작이 되어야함
 * -부수효과(DOM 같이 web api가 개입해야 되는 효과를 순수 자바스크립트 만으로 동작할 수 없는 기능들
 * - 순수함수 : 부수효과를 발생시키지 않는 순수 자바스크립트로만 동작되는 함수
 * : 동일한 인풋에는 항상 동일한 결과값 반환
 * : 함수 외북의 상태변경이나 영향을 받지 않음
 */