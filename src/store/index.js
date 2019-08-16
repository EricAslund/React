import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './ducks/index';
import sagas from './saga/index';
import createSagaMiddleware from 'redux-saga';



const sagaMonitor = null;

const middlewares = [];

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;


