/**
 * takeLatest : 제일 마지막에 들어온 요청만 수행
 * takeEvery : 들어오는 모든 요청을 수행
 * put : saga에서 만들어진 action 객체를 리듀서에 전달(saga 전용 dispatch함수라고 봐도 무방)
 * call : saga에서 api 관련 axios 함수를 호출할 때 쓰는 함수 두번째 parameter로 인수값 전달
 * fork : saga 관련 명령어들을 실행해주는 함수
 * all : fork로 실행해야 될 함수가 복수개일때 해당 함수를 모두 호출할 때 쓰는 함수
 */

import { takeLatest, put, call, fork, all } from 'redux-saga/effects';
import { fetchYoutube } from './api';
import * as types from './actionType';

//1 - component에서 들어온 youtube_start라는 action요청을 리듀서 함수를 통해서 전달받으면 유투브 호출 함수를 실행해주는 함수

//2 - youtube data 호출한 뒤 결과값을 가지고 다시 새로운 액션 객체를 반환해서 리듀서로 전달해주는 함수

//3- 위의 함수를 최종적으로 호출해주는 함수를 만든 후 최종 export
