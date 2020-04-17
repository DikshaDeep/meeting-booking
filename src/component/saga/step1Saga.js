import { put, takeEvery, all, call } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* helloSaga() {
  console.log('hello saga!');
};
// In the first case, 
// the yield expression delay(1000) is evaluated before it gets passed to the caller of next 
// (the caller could be the middleware when running our code. 
// It could also be our test code which runs the Generator function and iterates over the returned Generator). 
// So what the caller gets is a Promise.
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
