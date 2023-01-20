import type { SetCurrentMenuPayload } from '@application/redux/sideBar/payloads';
import type { SideBarActions } from '@application/redux/sideBar/slice';
import { setCurrentMenu } from '@application/redux/sideBar/slice';
import { useCallback } from 'react';
import { useAppDispatch } from '../use_redux';

export type SideBarDispatch = {
  setCurrentMenu: (payload: SetCurrentMenuPayload) => SideBarActions;
};

export function useSideBarDispatch(): SideBarDispatch {
  const dispatch = useAppDispatch();

  const setCurrentMenuDispatch = useCallback(
    (payload: SetCurrentMenuPayload) => dispatch(setCurrentMenu(payload)),
    [dispatch]
  );

  return {
    setCurrentMenu: setCurrentMenuDispatch,
  };
}
