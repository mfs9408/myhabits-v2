import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
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
import { useIsAlertSnackBarSuccessOpen } from '../../utils/hooks/useIsAlertSnackBarSuccessOpen';
import AlertSnackBar from '../AlertSnackBar';
import UseStyles from './NewTask.style';
import DatePicker from '../DatePicker';
import { post } from '../../Api';
import { NewTaskType } from '../../types';

const NewTask = () => {
  const classes = UseStyles();
  const { handleSubmit, errors, control, reset } = useForm();
  const [opened, setOpened] = useState(false);
  const setOpen = () => setOpened(true);
  const setClose = () => setOpened(false);
  const [, setIsAlertSnackBarOpen] = useIsAlertSnackBarSuccessOpen();

  const onSubmit: SubmitHandler<NewTaskType> = data => {
    post('/newtask', JSON.stringify(data)).then(() => {
      setIsAlertSnackBarOpen(true);
      reset({
        name: '',
        description: '',
        measure: 'раз',
        quantity: '',
        dateTo: null,
      });
    });
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
            <Grid container spacing={2}>
              <Grid container item xs={12}>
                <Typography variant="h5">Задай себе новую цель!</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="textSecondary">
                  Тип цели
                </Typography>
                <Controller
                  name="type"
                  control={control}
                  defaultValue="Обычная"
                  render={({ value, onChange, ref }) => (
                    <Select
                      fullWidth
                      onChange={onChange}
                      inputRef={ref}
                      value={value}
                      variant="outlined"
                    >
                      <MenuItem value="Обычная" onClick={setClose}>
                        Обычная
                      </MenuItem>
                      <MenuItem value="С прогрессией" onClick={setOpen}>
                        С прогрессией
                      </MenuItem>
                    </Select>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="textSecondary">
                  Название цели
                </Typography>
                <Controller
                  control={control}
                  name="name"
                  defaultValue=""
                  rules={{
                    required: 'Введите имя вашей цели',
                    minLength: {
                      value: 3,
                      message: 'Минимум 3 символа',
                    },
                    maxLength: {
                      value: 350,
                      message: 'Максимум 350 символов',
                    },
                  }}
                  render={({ value, onChange, ref }) => (
                    <TextField
                      fullWidth
                      onChange={onChange}
                      inputRef={ref}
                      value={value}
                      variant="outlined"
                      error={!!errors.name}
                      helperText={errors.name && errors.name.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" color="textSecondary">
                  Описание цели
                </Typography>
                <Controller
                  control={control}
                  name="description"
                  defaultValue=""
                  rules={{
                    required: 'Опишите вашу цель',
                    maxLength: {
                      value: 500,
                      message: 'Максимум 500 символов',
                    },
                  }}
                  render={({ value, onChange, ref }) => (
                    <TextField
                      fullWidth
                      onChange={onChange}
                      inputRef={ref}
                      value={value}
                      variant="outlined"
                      error={!!errors.description}
                      helperText={
                        errors.description && errors.description.message
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" color="textSecondary">
                  Количество
                </Typography>
                <Controller
                  control={control}
                  name="quantity"
                  defaultValue=""
                  rules={{
                    pattern: {
                      value: /[0-9]/,
                      message: 'Введите число',
                    },
                  }}
                  render={({ value, onChange, ref }) => (
                    <TextField
                      fullWidth
                      onChange={onChange}
                      inputRef={ref}
                      type="number"
                      value={value}
                      variant="outlined"
                      error={!!errors.quantity}
                      helperText={errors.quantity && errors.quantity.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1" color="textSecondary">
                  Ед.измерения
                </Typography>
                <Controller
                  control={control}
                  name="measure"
                  defaultValue="раз"
                  render={({ value, onChange, ref }) => (
                    <Select
                      fullWidth
                      onChange={onChange}
                      inputRef={ref}
                      value={value}
                      variant="outlined"
                    >
                      <MenuItem value="раз">раз</MenuItem>
                      <MenuItem value="метров">метров</MenuItem>
                      <MenuItem value="минут">минут</MenuItem>
                    </Select>
                  )}
                />
              </Grid>
              {!opened && (
                <Grid item xs={12}>
                  <Typography variant="body1" color="textSecondary">
                    Дата окончания цели
                  </Typography>
                  <Controller
                    name="dateTo"
                    control={control}
                    defaultValue={null}
                    rules={{
                      required: 'Укажите дату',
                    }}
                    render={({ value, onChange }) => (
                      <DatePicker
                        value={value}
                        onChange={onChange}
                        errors={errors}
                      />
                    )}
                  />
                </Grid>
              )}
              {opened && (
                <>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" color="textSecondary">
                      Шаг
                    </Typography>
                    <Controller
                      control={control}
                      name="increment"
                      defaultValue={0}
                      rules={{
                        required: 'Укажите шаг',
                        pattern: {
                          value: /[0-9]/,
                          message: 'Введите число',
                        },
                      }}
                      render={({ value, onChange, ref }) => (
                        <TextField
                          fullWidth
                          onChange={onChange}
                          inputRef={ref}
                          value={value}
                          variant="outlined"
                          type="number"
                          error={!!errors.increment}
                          helperText={
                            errors.increment && errors.increment.message
                          }
                        />
                      )}
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
                    <Controller
                      control={control}
                      name="speed"
                      defaultValue={0}
                      rules={{
                        required: 'Укажите скорость изменения',
                        pattern: {
                          value: /[1-9]/,
                          message: 'Введите число',
                        },
                      }}
                      render={({ value, onChange, ref }) => (
                        <TextField
                          fullWidth
                          onChange={onChange}
                          inputRef={ref}
                          value={value}
                          type="number"
                          variant="outlined"
                          error={!!errors.speed}
                          helperText={errors.speed && errors.speed.message}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" color="textSecondary">
                      Дата окончания цели
                    </Typography>
                    <Controller
                      name="dateTo"
                      control={control}
                      rules={{
                        required: 'Укажите дату',
                      }}
                      defaultValue={null}
                      render={({ value, onChange }) => (
                        <DatePicker
                          value={value}
                          onChange={onChange}
                          errors={errors}
                        />
                      )}
                    />
                  </Grid>
                </>
              )}
              <Grid item xs={12}>
                <Button
                  fullWidth
                  size="large"
                  variant="outlined"
                  color="primary"
                  endIcon={<CheckIcon />}
                  type="submit"
                >
                  Создать
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
      <AlertSnackBar text="Задача добавлена!" />
    </MuiPickersUtilsProvider>
  );
};

export default NewTask;
