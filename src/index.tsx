import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './serviceWorkerRegistration';

import { ROOT_ELEMENT } from './constants';
import App from './App';

import './index.css';

ReactDOM.hydrate(<App />, document.getElementById(ROOT_ELEMENT));

reportWebVitals();
registerServiceWorker();
