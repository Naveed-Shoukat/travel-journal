import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const elem = document.createElement('div');
elem.setAttribute('id', 'root');
document.body.appendChild(elem);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
