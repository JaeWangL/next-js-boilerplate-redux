import type { SideBarState } from '@application/redux/sideBar/types';
import { useAppSelector } from '../use_redux';

export type SideBarSelector = {
  sideBar: SideBarState;
};

export function useSideBarSelector(): SideBarSelector {
  const sideBar = useAppSelector((state) => state.sideBar);

  return {
    sideBar,
  };
}
