import React from "react";
import { ContainerDark,ContainerLight } from "src/styles/general/components";
import {UserContext}from'../../context/userContext'
import { useContext,useState } from 'react';
import SwitchMode from "src/components/UI/SwitchMode";
import TextInput from "src/components/UI/TextInput";
const Login =()=>{
    const {darkMode,setDarkMode}=useContext(UserContext)

    const Container =darkMode ===true?ContainerDark:ContainerLight
    const [value,setValues ]=useState({
        user:"",
        password:""
    })
    const handleChange=(prop,val)=>{
        setValues({...value,[prop]:val})
    }
   
    return(
    <>
    <Container>
       
         <TextInput
         label="Usuario"
         style={{width:"20vw"}}
         value={value.user}
         onChange={(event)=>handleChange("user",event.target.value)}
         />

         <TextInput
         label="Contraseña"
         password={true}
         style={{width:"20vw"}}
         value={value.password}
         onChange={(event)=>handleChange("password",event.target.value)}
      
         />
         
    </Container>
    </>
    )
}
export default Login;