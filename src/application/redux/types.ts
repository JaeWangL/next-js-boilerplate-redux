import type { rootStore } from './index';
import type { rootReducer } from './reducer';

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof rootStore>;
export type AppDispatch = AppStore['dispatch'];
