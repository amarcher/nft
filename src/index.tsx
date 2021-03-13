import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import { ROOT_ELEMENT } from './constants';
import App from './App';

import './index.css';

ReactDOM.render(<App />, document.getElementById(ROOT_ELEMENT));

reportWebVitals();
