import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import store from './store';
import './index.css';

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
