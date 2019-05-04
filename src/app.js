import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';

import App from './components';

import './styles/index.css';
import 'rc-dropdown/assets/index.css';

(async () => {
  render(
    <App />, /* eslint-disable-line */
    global.document.getElementById('main'),
  );
})();
