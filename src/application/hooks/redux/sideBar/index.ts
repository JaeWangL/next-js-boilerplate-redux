import type { SetCurrentMenuPayload } from '@application/redux/sideBar/payloads';
import type { SideBarActions } from '@application/redux/sideBar/slice';
import { setCurrentMenu } from '@application/redux/sideBar/slice';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export interface SideBarStore {
  setCurrentMenu: (payload: SetCurrentMenuPayload) => SideBarActions;
}

export function useSideBarStore(): SideBarStore {
  const dispatch = useDispatch();

  const setCurrentMenuDispatch = useCallback(
    (payload: SetCurrentMenuPayload) => dispatch(setCurrentMenu(payload)),
    [dispatch]
  );

  return {
    setCurrentMenu: setCurrentMenuDispatch,
  };
}
