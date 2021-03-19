import React from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './AchievementsTable.style';
import { AchievementsPropertyGroup } from '../../types';
import Achievement from '../Achievement';

interface AchievementsTableProperties {
  achievements: AchievementsPropertyGroup;
}

const AchievementsTable = (achievements: AchievementsTableProperties) => {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={11} className={classes.root}>
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
              {achievements.achievements.map(achievement => (
                <Achievement key={achievement.id} {...achievement} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default AchievementsTable;
