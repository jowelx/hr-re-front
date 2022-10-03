import './App.css'
import Loader from './components/Loader';
import Routes from './routes/routes';
import Message from './components/Message';
import Error from './components/Error';
import {useContext}from 'react'
import { UserContext } from './context/userContext';
import { useEffect } from 'react';
import { getTaxes } from './api/api';
function App() {
  const {loadding,message,error,setImpuestos,impustos}=useContext(UserContext)
  useEffect(()=>{
    getTaxes()
    .then(e=>{
    
      let data=e.data[0]
      console.log(data._id)
      setImpuestos({
        id:data._id,
        creditoFiscal:data.creditoFiscal,
        debitoFiscal:data.debitoFiscal
      })
    })
    .catch(function(e){
      console.log(e)
    })
  },[])
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
