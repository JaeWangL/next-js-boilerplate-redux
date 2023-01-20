import { type PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GlobalStateNames } from '../constants';
import type { OpenDialogPayload } from './payloads';
import type { DialogState } from './types';

const initialState: DialogState = {
  isOpen: false,
  message: '',
  title: undefined,
  onOK: undefined,
};

export const dialogSlice = createSlice({
  name: GlobalStateNames.DIALOG,
  initialState,
  reducers: {
    openDialog(state, { payload }: PayloadAction<OpenDialogPayload>) {
      state.isOpen = true;
      state.message = payload.message;
      state.title = payload.title;
      state.onOK = payload.onOK;
    },
    closeDialog(state) {
      state.isOpen = false;
      state.message = '';
      state.title = undefined;
      state.onOK = undefined;
    },
  },
});

export const dialogName = dialogSlice.name;
export const dialogReducer = dialogSlice.reducer;
export const { closeDialog, openDialog } = dialogSlice.actions;
export type DialogActionsWithPayload = typeof openDialog | typeof closeDialog;
export type DialogActions = ReturnType<DialogActionsWithPayload>;
