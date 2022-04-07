import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, history } from './redux/store';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </ConnectedRouter>
</Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();