import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import CheckIcon from '@mui/icons-material/Check';
import { UserContext } from 'src/context/userContext';
import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
const Container=styled.div({
    position:"absolute",
    width:"100%",
    height:"100vh",
    backgroundColor:"rgb(20,20,20,0.4)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    zIndex:99
})
const Card=styled.div({
    width:"30%",
    borderRadius:5,
    boxShadow:"0 2px .1vw 0 rgb(100,100,100)",
    backgroundColor:"rgb(255,255,255)",
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-start",
    flexDirection:"column",
    paddingBottom:20

})
const Tittle=styled.p({
    fontSize:20,
    margin:0,
    width:20,
    color:"white"
})
const Text=styled.p({
    fontSize:20,
    marginTop:15,
    color:"rgb(100,100,100)"
})
const Icon=styled(CloseIcon)({
    color:"white",
  
})
const ContainerIcon =styled.div({
    width :"100%",
    display:"flex",
    //backgroundColor:"rgb(70,200,255)",
    borderRadius:"5px 5px 0px 0px",
    justifyContent:"flex-end",
    alignItems:"center"
})
const Message=()=>{
    const {message,setMessage}=useContext(UserContext)
    const handleClick=()=>{
        setMessage("")
    }
    return(
        <>
        <Container>
            <Card>
    <ContainerIcon>
      <IconButton style={{marginRight:5}}onClick={()=>handleClick()}  aria-label="upload picture" component="label">
        <Icon style={{color:"rgb(100,100,100)"}}/>
      </IconButton>
    </ContainerIcon>
        <Grid container>
            <Grid item xs={12}>
            <ErrorOutlineIcon 
            style={{fontSize:120,color:"rgb(255,180,100)"}}
            />
            </Grid>
            <Grid item xs={12}>
            <Text>
            {message} 
            </Text>
            </Grid>
        <Grid item xs={12}>
        <Button variant="contained" size="medium" >
          Aceptar
        </Button>
        </Grid>
        </Grid>
         
            </Card>
       
        </Container>
       
        </>
    )
}
export default Message