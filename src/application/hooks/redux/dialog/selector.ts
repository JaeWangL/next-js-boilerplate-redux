import type { DialogState } from '@application/redux/dialog/types';
import type { RootState } from '@application/redux/types';
import { useSelector } from 'react-redux';

export interface DialogSelector {
  dialog: DialogState;
}

export function useDialogSelector(): DialogSelector {
  const dialog = useSelector((state: RootState) => state.dialog);

  return {
    dialog,
  };
}
