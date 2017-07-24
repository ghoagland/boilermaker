import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    {/* rest of your app goes here! */}
    <div>the thing is working!!!</div>
  </Provider>,
  document.getElementById('yourApp')
);