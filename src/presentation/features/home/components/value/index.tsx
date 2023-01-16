import { useSideBarSelector } from '@application/hooks/redux/sideBar/selector';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

function Value(): JSX.Element {
  const { sideBar } = useSideBarSelector();

  return <p>{sideBar.currentMenu.key}</p>;
}

export default memo(Value, isEqual);
