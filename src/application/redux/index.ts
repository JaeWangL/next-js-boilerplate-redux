import type { Store } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import type { Task } from 'redux-saga';
import createSagaMiddleware from 'redux-saga';
import { reducer } from './reducer';
import rootSaga from './sagas';

interface SagaStore extends Store {
  sagaTask?: Task;
}

export const rootStore = (): SagaStore => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer,
    middleware: [sagaMiddleware],
    devTools: process.env.NODE_ENV === 'development',
  });

  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(rootStore, {
  debug: process.env.NODE_ENV === 'development',
});
