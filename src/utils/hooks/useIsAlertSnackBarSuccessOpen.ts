import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useSelector } from '../../store';
import { metaActions } from '../../store/meta';

type Returns = [boolean, (newState: boolean) => void];

export const useIsAlertSnackBarSuccessOpen = (): Returns => {
  const isAlertSnackBarOpen = useSelector(
    state => state.meta.isAlertSnackBarOpen
  );
  const dispatch = useDispatch();
  const setIsAlertSnackBarOpen = useCallback(
    (newState: boolean) => {
      dispatch(metaActions.setIsAlertSnackBarOpen(newState));
    },
    [dispatch]
  );

  return [isAlertSnackBarOpen, setIsAlertSnackBarOpen];
};
