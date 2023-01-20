import type { OpenDialogPayload } from '@application/redux/dialog/payloads';
import type { DialogActions } from '@application/redux/dialog/slice';
import { closeDialog, openDialog } from '@application/redux/dialog/slice';
import { useCallback } from 'react';
import { useAppDispatch } from '../use_redux';

export type DialogDispatch = {
  closeDialog: () => DialogActions;
  openDialog: (payload: OpenDialogPayload) => DialogActions;
};

export function useDialogDispatch(): DialogDispatch {
  const dispatch = useAppDispatch();

  const closeDialogDispatch = useCallback(
    () => dispatch(closeDialog()),
    [dispatch]
  );

  const openDialogDispatch = useCallback(
    (payload: OpenDialogPayload) => dispatch(openDialog(payload)),
    [dispatch]
  );

  return {
    closeDialog: closeDialogDispatch,
    openDialog: openDialogDispatch,
  };
}
