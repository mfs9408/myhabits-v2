import React from 'react';
import Typography from '@material-ui/core/Typography';
import Template from '../../components/Template';
import SuccessTable from '../../components/SuccessTable/SuccessTable';
import NewTaskButton from '../../components/NewTaskButton/NewTaskButton';
import UseStyles from './SuccessPage.style';

const SuccessPage = () => {
  const classes = UseStyles();
  return (
    <>
      <Template>
        <Typography display="block" variant="h4" className={classes.typography}>
          Ваши успехи
        </Typography>
        <SuccessTable />
        <NewTaskButton />
      </Template>
    </>
  );
};

export default SuccessPage;
