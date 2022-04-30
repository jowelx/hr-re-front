import Switch from '@mui/material/Switch';
import { useContext } from 'react';
import { UserContext } from 'src/context/userContext';

const SwitchMode =()=>{
    const {darkMode,setDarkMode}=useContext(UserContext)
    
    return(
        <Switch  
        onChange={(event)=> setDarkMode(event.target.checked)}
        checked={darkMode}/>
     
    )
}
export default SwitchMode