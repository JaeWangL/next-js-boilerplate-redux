import { memo } from 'react';
import isEqual from 'react-fast-compare';
import Toggle from './components/toggle';
import Value from './components/value';

function Home(): JSX.Element {
  return (
    <div>
      <Value />
      <Toggle />
    </div>
  );
}

export default memo(Home, isEqual);
