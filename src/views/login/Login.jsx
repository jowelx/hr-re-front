import React from "react";
import { ContainerDark,ContainerLight } from "src/styles/general/components";
import { Input } from "src/styles/views/login/login";
import {UserContext}from'../../context/userContext'
import { useContext,useState } from 'react';
import Switch from '@mui/material/Switch';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
const Login =()=>{
    const {darkMode,setDarkMode}=useContext(UserContext)

    const Container =darkMode ===true?ContainerDark:ContainerLight

    const handleChangeMode=(mode)=>{
   
        setDarkMode(mode)
    }

    return(
    <>
    <Container>
        
        <Switch  onChange={(event)=> handleChangeMode(event.target.checked)}value={darkMode} />
        <Input
           id="outlined-helperText"
           label="Helper text"
           defaultValue="Default Value"
           
        />
    </Container>
    </>
    )
}
export default Login;