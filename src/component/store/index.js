import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers';
import helloSaga from '../saga/step1Saga';

const sagaMiddleware = createSagaMiddleware();
// const initialState = {};

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  );

sagaMiddleware.run(helloSaga);

export default store;