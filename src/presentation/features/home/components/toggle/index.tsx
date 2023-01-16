import { useSideBarDispatch } from '@application/hooks/redux/sideBar/dispatch';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

function Toggle(): JSX.Element {
  const { setCurrentMenu } = useSideBarDispatch();

  return (
    <button
      type="button"
      onClick={(): void => {
        setCurrentMenu({
          currentMenu: {
            key: 'settings',
            name: 'Settings',
          },
        });
      }}
    >
      클릭해볼까
    </button>
  );
}

export default memo(Toggle, isEqual);
