import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GlobalStateNames } from '../constants';
import { sideBarMenu } from './constants';
import type { SetCurrentMenuPayload } from './payloads';
import type { SideBarState } from './types';

const initialState: SideBarState = {
  currentMenu: sideBarMenu[0]!,
};

export const sideBarSlice = createSlice({
  name: GlobalStateNames.SIDE_BAR,
  initialState,
  reducers: {
    setCurrentMenu(state, { payload }: PayloadAction<SetCurrentMenuPayload>) {
      state.currentMenu = payload.currentMenu;
    },
  },
});

export const sideBarName = sideBarSlice.name;
export const sideBarReducer = sideBarSlice.reducer;
export const { setCurrentMenu } = sideBarSlice.actions;
export type SideBarActionsWithPayload = typeof setCurrentMenu;
export type SideBarActions = ReturnType<SideBarActionsWithPayload>;
