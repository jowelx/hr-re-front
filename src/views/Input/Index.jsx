import React from 'react'
import TextField from '@mui/material/TextField';
import TextInput from 'src/components/UI/TextInput';
import SelectInput from 'src/components/Select';
import {useState }from 'react' 
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Create from './Create';
import Edit from './Edit';
import Delete from './Delete.';
const Tittle=styled.p({
    fontSize:20
})
const InputData=({screen})=>{
    const [select,setSelect]=useState("")
    return(
        <>
      
     { screen===1&&  <Create/>}
     { screen===2&&  <Edit/>}
     { screen===3&&  <Delete/>}
        </>
    )
}
export default InputData 