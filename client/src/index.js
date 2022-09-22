import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import "./style/index.css"
import "./style/Navbar.css"
import "./style/App.css"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
