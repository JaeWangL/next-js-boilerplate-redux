import type { AnyAction, CombinedState } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { dialogName, dialogReducer } from './dialog/slice';
import { sideBarName, sideBarReducer } from './sideBar/slice';

export const rootReducer = combineReducers({
  [dialogName]: dialogReducer,
  [sideBarName]: sideBarReducer,
});

export const reducer = (
  state: any,
  action: AnyAction
): CombinedState<ReturnType<typeof rootReducer>> => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };
    default: {
      return rootReducer(state, action);
    }
  }
};
