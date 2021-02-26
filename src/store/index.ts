import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';
import { RootState } from './configureStore';

export { default } from './configureStore';

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
