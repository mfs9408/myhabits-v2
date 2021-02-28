import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegistrationPage from '../pages/registration';
import TasksPage from '../pages/TasksPage/TasksPage';
import NewTaskPage from '../pages/TasksPage/add/NewTaskPage';
import SuccessPage from '../pages/SuccessPage/SuccessPage';

// @ts-ignore
const Router = ({ navbar: NavBar, template: Template }) => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <HomePage />
        </Route>
        <Route path="/login">
          <NavBar />
          <LoginPage />
        </Route>
        <Route path="/registration">
          <NavBar />
          <RegistrationPage />
        </Route>
        <Route path="/logout">
          <div>LogOut</div>
        </Route>
        <Route path="/tasks/add">
          <NewTaskPage />
        </Route>
        <Route path="/tasks">
          <TasksPage />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
