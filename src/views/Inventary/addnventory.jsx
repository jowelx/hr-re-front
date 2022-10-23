import React from 'react'
import TextField from '@mui/material/TextField';
import TextInput from 'src/components/UI/TextInput';
import SelectInput from 'src/components/Select';
import {useState }from 'react' 
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { addBill } from 'src/api/api';
import { useContext } from 'react';
import moment from 'moment';
import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { UserContext } from 'src/context/userContext';
import { addInventory ,getInventory} from 'src/api/api';
const Container = styled.div({
    display:"flex",
    flexDirection:"column",
    margin:10,
    justifyContent:"center",
    alignItems:"center",
    padding:20
})
const Wrapper =styled.div({
    display:"flex",
    flexDirection:"row",
    boxShadow:"0 2px 5px 0 rgb(20,20,20)",
    marginBottom:"5vw",
    borderRadius:10
})

const Tittle=styled.p({
    fontSize:20
})
const AddInventory =()=>{
    const [value, setValue] = React.useState(dayjs(moment().format()));
    const {setLoadding,setError,setMessage,inventorySettings}=useContext(UserContext)
    const handleChangeDate = (newValue) => {
        setValue(newValue);
    };
    const [data,setData]=useState({
        name:"",
        amount:"",
        category:null
    })
    const handleChange= (prop) => (event)=>{
        setData({ ...data, [prop]: event.target.value });
        console.log(data)
    }
    const handlesend=()=>{
        addInventory(data)
        .then((e)=>{
            console.log(e)
            setLoadding(true)
            setTimeout(function(){
                setLoadding(false)
               },10000);
          
            if(e.status===200){
                setTimeout(function(){
                 setLoadding(false)
                },2000);
            }else{
                setLoadding(false)
                setError(e.status)
            }
        })
        .catch(function(e){
                console.log(e)
        })
    
    }
    return(
           <>
    <Tittle>
    Agregar nuevo item al inventario
    </Tittle>
     <Wrapper>
     <Container>

      <TextInput 
       onChange={handleChange("name")}
       value={data.serial}
       id="outlined-basic" 
       label="Nombre del producto" variant="outlined" />
     <TextInput 
     onChange={handleChange("amount")}
     value={data.value}
     id="outlined-basic" 
     label="Cantidad" variant="outlined" />
     </Container>
     <Container>
        <p>Seleccione la categoria </p>
   <SelectInput 
     data={inventorySettings}
     setValue={setData}
     value={data}
     prop={"category"}
     />
   </Container>
     </Wrapper>
        <Button onClick={()=>handlesend()} variant="contained" endIcon={<SendIcon />}>
      Guardar
      </Button>
        </>
    )
}
export default AddInventory