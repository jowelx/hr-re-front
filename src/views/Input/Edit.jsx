import React from 'react'
import TextField from '@mui/material/TextField';
import TextInput from 'src/components/UI/TextInput';
import SelectInput from 'src/components/Select';
import {useState }from 'react' 
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
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
const Edit =()=>{
    const [select,setSelect]=useState("")
    return(
        <>
    <Tittle>
    Editar una factura
    </Tittle>
     <Wrapper>
     <Container>
     <TextInput id="outlined-basic" label="N#" variant="outlined" />
     <TextInput id="outlined-basic" label="Fecha de la factura" variant="outlined" />
     <TextInput id="outlined-basic" label="Valor" variant="outlined" />
     </Container>
     <Container>
   <SelectInput 
     label={"Activo"}
     data={Tipe}
     setValue={setSelect}
     value={select}/>
   </Container>
     
     </Wrapper>
        <Button variant="contained" endIcon={<SendIcon />}>
      Guardar
      </Button>
        </>
    )
}
export default Edit