import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';

type DispatchFunc = () => AppDispatch;
export { default as useFocus } from './useFocus';
export { default as useKeyboardSelection } from './useKeyboardSelection';
export { default as useModalOpen } from './useModalOpen';
export { default as useOutsideClick } from './useOutsideClick';
export { default as useScrollHidden } from './useScrollHidden';
export { default as useTheme } from './useTheme';

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
