import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './state/store';
import './index.scss';

import App from './views/App.js';
import registerServiceWorker from './registerServiceWorker';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
  <ReduxProvider store={reduxStore}>
    <App />
  </ReduxProvider>,
  document.getElementById('root'));
registerServiceWorker();
