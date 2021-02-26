import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
    },
    paperContainer: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    moodBadIcon: {
      color: 'orange',
    },
    partiallyDone: {
      marginRight: 17,
    },
    doneOutlineIcon: {
      marginLeft: 44,
      color: 'green',
    },
    errorIcon: {
      marginLeft: 27,
    },
    img: {
      height: '150px',
      width: '100%',
      objectFit: 'cover',
    },
    typographyDescription: {
      textAlign: 'left',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(1),
      },
    },
    typographyHeader: {
      paddingLeft: theme.spacing(1),
    },
  })
);
