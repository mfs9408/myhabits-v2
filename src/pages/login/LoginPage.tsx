import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useForm } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import useStyles from './LoginPage.styles';

const LoginPage = () => {
  const classes = useStyles();
  const methods = useForm();
  const { handleSubmit, register, errors } = methods;
  const onSubmit = (data: any) => console.log(data);

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item xs={12} sm={8} md={4} lg={3}>
          <Box className={classes.box}>
            <Typography
              align="center"
              variant="h4"
              color="primary"
              className={classes.header}
            >
              Авторизация
            </Typography>
            <TextField
              className={classes.textField}
              name="email"
              variant="outlined"
              label="Ваш email"
              inputRef={register({
                required: 'Введите ваш email',
                pattern: {
                  value: /[A-Za-z0-9]+@+[A-Za-z]+[.]+[A-Za-z]/,
                  message: 'Некорректный email',
                },
              })}
              error={!!errors.email}
              helperText={errors.email && errors.email.message}
              fullWidth
            />
            <TextField
              className={classes.textField}
              name="password"
              variant="outlined"
              label="Введите пароль"
              type="password"
              inputRef={register({
                required: 'Некорректный email или пароль',
                minLength: {
                  value: 5,
                  message: 'Пароль должен включать не менее 5 символов',
                },
              })}
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
              fullWidth
            />
            <Button
              className={classes.button}
              type="submit"
              variant="outlined"
              color="primary"
              size="large"
              fullWidth
            >
              Войти
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginPage;
