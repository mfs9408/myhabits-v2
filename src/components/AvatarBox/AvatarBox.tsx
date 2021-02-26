import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import UseStyles from './AvatarBox.style';

const AvatarBox = () => {
  const classes = UseStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      wrap="wrap"
      className={classes.gridAvatar}
    >
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Input
          name="avatar-upload"
          className={classes.input}
          id="avatar-upload"
          type="file"
        />
        <label htmlFor="avatar-upload">
          <MenuItem onClick={handleClose}>Сменить аватар</MenuItem>
        </label>
        <MenuItem onClick={handleClose}>Выйти из аккаунта</MenuItem>
      </Menu>
      <IconButton onClick={handleClick}>
        <Avatar className={classes.avatar} />
      </IconButton>
      <Typography variant="body1" align="center" className={classes.typography}>
        Фёдор
      </Typography>
    </Grid>
  );
};

export default AvatarBox;
