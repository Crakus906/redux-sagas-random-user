import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import Routes from  './routes/index'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import store from './redux/store'

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
