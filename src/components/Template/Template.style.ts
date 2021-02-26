import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: '240',
    },
    grid: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  })
);
