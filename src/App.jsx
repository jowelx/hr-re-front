import './App.css'
import Loader from './components/Loader';
import Routes from './routes/routes';
import Message from './components/Message';
import Error from './components/Error';
import {useContext}from 'react'
import { UserContext } from './context/userContext';

function App() {
  const {loadding,message,error}=useContext(UserContext)
   return (
    <div className="App">
       {error   && <Error/>}
       {message && <Message/>}
       {loadding&& <Loader/>}
      <Routes/>
    
     </div>
  );
}

export default App;
