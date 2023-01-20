import type { Store } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { Context } from 'next-redux-wrapper';
import { createWrapper } from 'next-redux-wrapper';
import type { Task } from 'redux-saga';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer';
import rootSaga from './sagas';

interface SagaStore extends Store {
  sagaTask?: Task;
}

const sagaMiddleware = createSagaMiddleware();
const store: SagaStore = configureStore({
  reducer,
  middleware: [sagaMiddleware],
  devTools: process.env.NODE_ENV === 'development',
});

(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

const makeStore = (_context: Context): SagaStore => store;

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
