import React,{StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserProvider from './context/userContext'

ReactDOM.render(
  <StrictMode>
    <UserProvider>
    <App />
    </UserProvider>
  </StrictMode>,
  document.getElementById('root')
);

