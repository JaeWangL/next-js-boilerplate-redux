import { useSideBarStore } from '@application/hooks/redux/sideBar';
import { memo } from 'react';
import isEqual from 'react-fast-compare';

function Toggle(): JSX.Element {
  const { setCurrentMenu } = useSideBarStore();

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
