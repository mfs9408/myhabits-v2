import React from 'react';
import { Alert } from '@material-ui/lab';
import Snackbar from '@material-ui/core/Snackbar';
import { useIsAlertSnackBarSuccessOpen } from '../../utils/hooks/useIsAlertSnackBarSuccessOpen';

type AlertSnackBarProps = {
  text: string;
};

const AlertSnackBar = ({ text }: AlertSnackBarProps) => {
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsAlertSnackBarOpen(false);
  };
  const [
    isAlertSnackBarOpen,
    setIsAlertSnackBarOpen,
  ] = useIsAlertSnackBarSuccessOpen();

  return (
    <Snackbar
      open={isAlertSnackBarOpen}
      autoHideDuration={2500}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="success">
        {text}
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackBar;
