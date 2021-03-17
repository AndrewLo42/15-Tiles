import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Board initialConfiguration="[1,2,0,4,3,5,6,7,8,9,10,11,13,15,12,14,]"/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
