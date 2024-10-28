import './App.css';
import React from 'react';
import RouteContainer from './services/routes';
import { ThemeProvider } from '@emotion/react';
import { Theme } from './common/Theme';

const App = () => (<ThemeProvider theme={Theme}><RouteContainer /></ThemeProvider>)

export default App;