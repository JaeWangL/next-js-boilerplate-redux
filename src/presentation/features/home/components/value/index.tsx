import type { RootState } from '@application/redux/types';
import { memo } from 'react';
import isEqual from 'react-fast-compare';
import { useSelector } from 'react-redux';

function Value(): JSX.Element {
  const sideBar = useSelector((state: RootState) => state.sideBar);

  return <p>{sideBar.currentMenu.key}</p>;
}

export default memo(Value, isEqual);
