import { styled } from "@mui/material"
import * as React from 'react';
import { useContext } from "react";
import { UserContext } from "src/context/userContext";
import { HeaderOne,HeaderTow,HeaderThree } from "./TypeHeader";
const Header =({type,setScreen})=>{
    const [value, setValue] = React.useState('1');
    const {darkMode}=useContext(UserContext)
    const handleChange = (event, newValue) => {
      setValue(newValue);
      setScreen(parseInt(newValue)+1)
    };
    return(
        <>
       { type===0&&<HeaderOne setScreen={setScreen} />}
       { type===2&&<HeaderThree setScreen={setScreen} />}
       { type===3&&<HeaderTow setScreen={setScreen} />}
        </>
    )
}
export default Header