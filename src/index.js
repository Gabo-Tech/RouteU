import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.css';
import { Grommet } from 'grommet';

const container = document.getElementById('root');
const root = createRoot(container);
const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '14px',
      height: '20px',
    },
  },
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Grommet theme={theme}>
        <App />
      </Grommet>
    </Provider>
  </React.StrictMode>
);