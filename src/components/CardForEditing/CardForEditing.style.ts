import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(2),
    },
    img: {
      height: '150px',
      width: '100%',
      objectFit: 'cover',
    },
    grid: {
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0, 0, 0, 1),
      },
    },
  })
);
