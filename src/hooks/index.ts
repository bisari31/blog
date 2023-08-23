import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux';
import { AppDispatch, RootState } from 'redux/store';

import useKeyboardSelection from './useKeyboardSelection';
import useOutsideClick from './useOutsideClick';
import useModalOpen from './useModalOpen';
import useTheme from './useTheme';
import useFocus from './useFocus';
import useScrollHidden from './useScrollHidden';

type DispatchFunc = () => AppDispatch;
const useAppDispatch: DispatchFunc = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export {
  useAppDispatch,
  useAppSelector,
  useKeyboardSelection,
  useOutsideClick,
  useModalOpen,
  useTheme,
  useFocus,
  useScrollHidden,
};
