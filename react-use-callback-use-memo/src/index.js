import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//
// React StrictMode renders components twice in dev 
// <React.StrictMode>
//   <App />
// </React.StrictMode>
// 
ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);
