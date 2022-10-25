import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import "./style/index.css"
import "./style/Navbar.css"
import "./style/App.css"
import "./style/Test.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
      <App />
  </BrowserRouter>
);
