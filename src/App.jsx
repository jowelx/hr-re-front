import './App.css'
import Login from './views/login/Login';
import {UserContext}from'./context/userContext'
import { useContext } from 'react';

function App() {
   return (
    <div className="App">
      <Login/>
     </div>
  );
}

export default App;
