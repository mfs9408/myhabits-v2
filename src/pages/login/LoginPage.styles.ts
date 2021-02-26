import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    form: {
      flexGrow: 1,
    },
    header: {
      marginBottom: theme.spacing(2),
    },
    textField: {
      marginBottom: theme.spacing(2),
    },
    button: {
      marginTop: theme.spacing(2),
    },
    box: {
      marginTop: theme.spacing(10),
      border: '1px solid #e5e5e5',
      borderRadius: 5,
      padding: theme.spacing(3),
    },
  })
);
