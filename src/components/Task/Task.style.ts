import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
    },
    paperContainer: {
      marginBottom: theme.spacing(2),
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
    typography: {
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(1),
      },
    },
    typographyDescription: {
      flexGrow: 1,
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(1),
      },
    },
    typographyMeasurement: {
      textAlign: 'left',
      [theme.breakpoints.up('md')]: {
        paddingLeft: theme.spacing(1),
        textAlign: 'right',
      },
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(1),
      },
    },
  })
);
