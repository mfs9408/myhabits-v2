import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import AppBar from './components/AppBar';
import theme from './components/theme';
import Template from './components/Template';
import Router from './router';
import store from './store';

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Router navbar={AppBar} template={Template} />
    </Provider>
  </ThemeProvider>
);

export default App;
