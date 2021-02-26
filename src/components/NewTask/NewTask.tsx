import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import CheckIcon from '@material-ui/icons/Check';
import TextField from '@material-ui/core/TextField';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Tooltip from '@material-ui/core/Tooltip';
import UseStyles from './NewTask.style';

const NewTask = () => {
  const classes = UseStyles();
  const { register, handleSubmit, errors, control } = useForm();
  const [, setType] = useState('');
  const [opened, setOpened] = useState(false);
  const setOpen = () => setOpened(true);
  const setClose = () => setOpened(false);
  const onSubmit = data => console.log(data);
  const handleChange = event => {
    setType(event.target.value);
  };

  return (
    <>
      <Grid
        container
        justify="center"
        item
        xs={12}
        sm={10}
        md={8}
        lg={6}
        className={classes.outerGrid}
      >
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column" justify="flex-start">
              <Typography variant="h5" paragraph>
                Задай себе новую цель!
              </Typography>
              <Grid item xs className={classes.grid}>
                <Typography variant="body1" color="textSecondary">
                  Тип цели
                </Typography>
                <Controller
                  as={
                    <Select
                      fullWidth
                      name="type"
                      variant="outlined"
                      onChange={handleChange}
                    />
                  }
                  name="type"
                  control={control}
                  defaultValue="Обычная"
                >
                  <MenuItem value="Обычная" onClick={setClose}>
                    Обычная
                  </MenuItem>
                  <MenuItem value="С прогрессией" onClick={setOpen}>
                    С прогрессией
                  </MenuItem>
                </Controller>
              </Grid>
              <Grid item xs className={classes.grid}>
                <Grid container justify="space-between">
                  <Typography variant="body1" color="textSecondary">
                    Название цели
                  </Typography>
                  <Tooltip
                    title={
                      <Typography variant="body2">
                        Название цели стоит писать в повелительном наклонении,
                        например: 'Гуляй ежедневно в течение часа'.
                      </Typography>
                    }
                  >
                    <HelpOutlineIcon fontSize="small" color="primary" />
                  </Tooltip>
                </Grid>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="name"
                  inputRef={register({
                    required: 'Введите имя вашей цели',
                    minLength: {
                      value: 3,
                      message: 'Минимум 3 символа',
                    },
                    maxLength: {
                      value: 350,
                      message: 'Максимум 350 символов',
                    },
                  })}
                  error={!!errors.name}
                  helperText={errors.name && errors.name.message}
                />
              </Grid>
              <Grid item xs className={classes.grid}>
                <Typography variant="body1" color="textSecondary">
                  Описание цели
                </Typography>
                <TextField
                  variant="outlined"
                  fullWidth
                  name="description"
                  inputRef={register({
                    required: 'Опишите вашу цель',
                    maxLength: {
                      value: 500,
                      message: 'Максимум 500 символов',
                    },
                  })}
                  error={!!errors.description}
                  helperText={errors.description && errors.description.message}
                />
              </Grid>
              <Grid container className={classes.grid} spacing={1}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1" color="textSecondary">
                    Количество
                  </Typography>
                  <TextField
                    variant="outlined"
                    type="number"
                    fullWidth
                    name="quantity"
                    inputRef={register({
                      pattern: {
                        value: /[0-9]/,
                        message: 'Введите число',
                      },
                    })}
                    error={!!errors.quantity}
                    helperText={errors.quantity && errors.quantity.message}
                    className={classes.textField}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1" color="textSecondary">
                    Ед.измерения
                  </Typography>
                  <Controller
                    as={<Select fullWidth variant="outlined" />}
                    name="measure"
                    control={control}
                    defaultValue="раз"
                  >
                    <MenuItem value="раз">раз</MenuItem>
                    <MenuItem value="метров">метров</MenuItem>
                    <MenuItem value="минут">минут</MenuItem>
                  </Controller>
                </Grid>
              </Grid>
              {opened && (
                <Grid container className={classes.grid} spacing={1}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" color="textSecondary">
                      Шаг
                    </Typography>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="number"
                      name="increment"
                      inputRef={register({
                        pattern: {
                          value: /[0-9]/,
                          message: 'Введите число',
                        },
                      })}
                      error={!!errors.increment}
                      helperText={errors.increment && errors.increment.message}
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container justify="space-between">
                      <Typography variant="body1" color="textSecondary">
                        Скорость изменения
                      </Typography>
                      <Tooltip
                        title={
                          <Typography variant="body2">
                            Скорость изменения показывает через сколько дней
                            ваша цель станет выше на выбранный вами шаг.
                          </Typography>
                        }
                      >
                        <HelpOutlineIcon fontSize="small" color="primary" />
                      </Tooltip>
                    </Grid>
                    <TextField
                      variant="outlined"
                      fullWidth
                      type="number"
                      name="speed"
                      inputRef={register({
                        pattern: {
                          value: /[0-9]/,
                          message: 'Введите число',
                        },
                      })}
                      error={!!errors.speed}
                      helperText={errors.speed && errors.speed.message}
                    />
                  </Grid>
                </Grid>
              )}
              <Button
                size="large"
                variant="outlined"
                color="primary"
                endIcon={<CheckIcon />}
                type="submit"
              >
                Создать
              </Button>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default NewTask;
