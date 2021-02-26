import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Grid from '@material-ui/core/Grid';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import Typography from '@material-ui/core/Typography';
import UseStyles from './SuccessTable.style';
import rows from './stubs';

const renderSwitch = (condition: string) => {
  switch (condition) {
    case 'Выполнено':
      return { background: 'rgb(235, 248, 236)' };
    case 'Перевыполнено':
      return { background: 'rgb(231, 244, 254)' };
    case 'Частично':
      return { background: 'rgb(255, 244, 228)' };
    default:
      return { background: 'rgb(255, 235, 234)' };
  }
};

const SuccessTable = () => {
  const classes = UseStyles();

  return (
    <>
      <Grid item xs={11} className={classes.outerGrid}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="h6" align="center">
                    Тип
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Название</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h6">Дата</Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow
                  selected
                  key={row.id}
                  style={renderSwitch(row.isDone)}
                >
                  <TableCell align="center">
                    {row.type === 'С прогрессией' ? (
                      <ShowChartIcon />
                    ) : (
                      <AccessAlarmIcon />
                    )}
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">{row.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="h6">{row.date}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default SuccessTable;
