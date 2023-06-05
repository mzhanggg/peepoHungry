import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import configureStore from './store';
import { restoreSession } from './store/csrf';
import { createUser, loginUser, logoutUser } from './store/usersReducer'; 
import {csrfFetch} from './store/csrf';
import './index.css';
import * as sessionActions from './store/session';

const store = configureStore();

if (process.env.NODE_ENV !== 'production') {
  window.store = store;
  window.createUser = createUser
  window.loginUser = loginUser
  window.logoutUser = logoutUser
  window.csrfFetch = csrfFetch
  window.sessionActions = sessionActions
}

const initializeApp = () => {
  ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
  );
}

restoreSession().then(initializeApp)
