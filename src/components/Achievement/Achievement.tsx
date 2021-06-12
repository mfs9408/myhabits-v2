import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import { AchievementsResponse } from '../../types';

const Achievement = ({ id, type, name, date, color }: AchievementsResponse) => {
  return (
    <TableRow selected key={id} style={{ background: color }}>
      <TableCell align="center">
        {type === 'С прогрессией' ? <ShowChartIcon /> : <AccessAlarmIcon />}
      </TableCell>
      <TableCell>
        <Typography variant="h6">{name}</Typography>
      </TableCell>
      <TableCell size="small">
        <Typography variant="h6">
          {new Date(date).toLocaleDateString()}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default Achievement;
