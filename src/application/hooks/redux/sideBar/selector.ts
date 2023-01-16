import type { SideBarState } from '@application/redux/sideBar/types';
import type { RootState } from '@application/redux/types';
import { useSelector } from 'react-redux';

export interface SideBarSelector {
  sideBar: SideBarState;
}

export function useSideBarSelector(): SideBarSelector {
  const sideBar = useSelector((state: RootState) => state.sideBar);

  return {
    sideBar,
  };
}
