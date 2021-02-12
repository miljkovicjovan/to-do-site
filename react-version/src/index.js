import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Input from './components/Input';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Input />
  </React.StrictMode>,
  document.getElementById('root')
);