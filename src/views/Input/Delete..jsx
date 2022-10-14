import TextInput from 'src/components/UI/TextInput';
import {useState }from 'react' 
import styled from '@emotion/styled';
import { Grid ,Button} from '@mui/material'
import { ButtonLigth } from 'src/components/UI/Button';
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
const Tittle=styled.p({
    fontSize:20
})
const Delete =()=>{
    const [auth,setAuth]=useState(null)
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
    return(<div>
    <br/>
    <br/>
    {!auth?
    
     <Wrapper>
 
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
    Eliminar una factura
    </Tittle>
     <Wrapper>
     <Container>

     <TextInput id="outlined-basic" label="N#" variant="outlined" />
     </Container>
    
     
     </Wrapper>
        <Button variant="contained" endIcon={<SendIcon />}>
      Borrar
      </Button>
    </>
    }
        </div>
    )
}
export default Delete