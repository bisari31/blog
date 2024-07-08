import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';

type DispatchFunc = () => AppDispatch;
export { default as useKeyboardSelection } from './useKeyboardSelection';
export { default as useOutsideClick } from './useOutsideClick';
export { default as useModalOpen } from './useModalOpen';
export { default as useTheme } from './useTheme';
export { default as useFocus } from './useFocus';
export { default as useScrollHidden } from './useScrollHidden';

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
