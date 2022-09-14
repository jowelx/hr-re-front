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

const Create =()=>{
    const {setLoadding,setError,setMessage}=useContext(UserContext)
    const [data,setData]=useState({
        date:"",
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
     <TextInput 
       onChange={handleChange("date")}
       value={data.date}
     id="outlined-basic" label="Fecha de la factura" variant="outlined" />
     <TextInput 
        onChange={handleChange("serial")}
        value={data.serial}
     id="outlined-basic" label="N#" variant="outlined" />
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