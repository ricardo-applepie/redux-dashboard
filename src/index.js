import React from 'react';
import store from './redux/store/store';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);
