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
const Tipe=[
    {
        label:"Ingreso",
        value:"Ingreso"
    },
    {
        label:"Egreso",
        value:"Egreso"
    }
]
const Tittle=styled.p({
    fontSize:20
})
const ContainerDate=styled.div({
    marginBottom:20
})
const Create =()=>{
    
    const [value, setValue] = React.useState(dayjs(moment().format()));
    const {setLoadding,setError,setMessage}=useContext(UserContext)
    const handleChangeDate = (newValue) => {
        setValue(newValue);
    };
    const [data,setData]=useState({
        date:value,
        serial:"",
        value:"",
        type:"Ingreso"
    })
    const handleChange= (prop) => (event)=>{
        setData({ ...data, [prop]: event.target.value });
        console.log(data)
    }
    const handlesend=()=>{
        if(
        data.date===""  ||
        data.serial===""||
        data.value==="" ||
        data.type==="")
          {
            setMessage("Debes completar todos los campos")
        }else{
            setLoadding(true)
            setTimeout(function(){
                setLoadding(false)
               },10000);
            addBill(data).then(res=>{
            if(res.status===200){
                setTimeout(function(){
                 setLoadding(false)
                },2000);
            }else{
                setLoadding(false)
                setError(res.status)
            }
            }).catch((e)=>
            [setLoadding(false),
            setError(e.code)]
            )

            console.log("enviando")
        }


        
    }
    return(
        <>
    <Tittle>
    Agregar nueva factura
    </Tittle>
     <Wrapper>
     <Container>
     <ContainerDate>
     <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
    
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChangeDate}
          renderInput={(params) => <TextField {...params} />}
        />
   

      </LocalizationProvider>
     </ContainerDate>
 
      <TextInput 
       onChange={handleChange("serial")}
       value={data.serial}
       id="outlined-basic" 
       label="N# de factura" variant="outlined" />
     <TextInput 
     onChange={handleChange("value")}
     value={data.value}
     id="outlined-basic" label="Valor" variant="outlined" />
     </Container>
     <Container>
   <SelectInput 
     label={"Activo"}
     data={Tipe}
     setValue={setData}
     value={data}
     prop={"type"}
     />
   </Container>
     
     </Wrapper>
        <Button onClick={()=>handlesend()} variant="contained" endIcon={<SendIcon />}>
      Enviar
      </Button>
        </>
    )
}
export default Create