import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { useSelector } from '../../store';
import { metaActions } from '../../store/meta';

type Returns = [boolean, (newState: boolean) => void];

export const useIsOverDoneDialogOpen = (): Returns => {
  const isOverDoneDialogOpen = useSelector(
    state => state.meta.isOverDoneDialogOpen
  );
  const dispatch = useDispatch();
  const setIsOverDoneDialogOpen = useCallback(
    (newState: boolean) => {
      dispatch(metaActions.setIsOverDoneDialogOpen(newState));
    },
    [dispatch]
  );

  return [isOverDoneDialogOpen, setIsOverDoneDialogOpen];
};
