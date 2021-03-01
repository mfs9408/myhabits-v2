import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useSelector } from '../../store';
import { metaActions } from '../../store/meta';

type Returns = [boolean, (newState: boolean) => void];

export const useIsPartiallyDoneDialogOpen = (): Returns => {
  const isPartiallyDoneDialogOpen = useSelector(
    state => state.meta.isPartiallyDialogOpen
  );
  const dispatch = useDispatch();
  const setIsPartiallyDoneDialogOpen = useCallback(
    (newState: boolean) => {
      dispatch(metaActions.setIsPartiallyDialogOpen(newState));
    },
    [dispatch]
  );

  return [isPartiallyDoneDialogOpen, setIsPartiallyDoneDialogOpen];
};
