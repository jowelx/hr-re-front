import React from 'react'
import TextField from '@mui/material/TextField';
import TextInput from 'src/components/UI/TextInput';
import SelectInput from 'src/components/Select';
import {useState }from 'react' 
import styled from '@emotion/styled';
import { Grid} from '@mui/material'
import Button from '@mui/material/Button';

import { ButtonLigth } from 'src/components/UI/Button';
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
    const [auth,setAuth]=useState(false)
    const [value,setValues ]=useState({
        password:""
    })
    const handleChange=(prop,val)=>{
        setValues({...value,[prop]:val})
    }
    const handleValidate=()=>{
        console.log(value.password)
        value.password=='123456'&&setAuth(true)
    }
    return(
    
    <div>
    <br/>
    <br/>
       {!auth? <Wrapper>
         <Grid container justifyContent={"center"}>
             <Grid item xs={12}>    
            <h5 style={{margin:0}}>Ingrese la clave de administrador para acceder a esta funcion</h5>
             </Grid>
             <br/> 
             <br/>
             <br/> 
             <Grid item xs={7}>
             <TextInput
          label="Contraseña"
          password={true}
          style={{width:"100%"}}
          value={value.password}
          onChange={(event)=>handleChange("password",event.target.value)}
          />
             </Grid>
            <Grid item xs={7}>
            <ButtonLigth
            onPress={()=>handleValidate()}
         name={"Iniciar sesion"}
         />
            </Grid>
            <br/>
            <br/> 
            <br/>
            <br/> 
         </Grid>
        </Wrapper>
            :
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
        }
         </div>
    )
}
export default Edit