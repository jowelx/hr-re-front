import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserProvider from './context/userContext'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <UserProvider>
      <Router>
      <App />
      </Router>
    </UserProvider>
  </StrictMode>,
  document.getElementById('root')
);

