import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import CheckIcon from '@mui/icons-material/Check';
import { UserContext } from 'src/context/userContext';
import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';

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
    width:300,
    height:200,
    borderRadius:10,
    boxShadow:"0 5px .8vw 0 rgb(20,20,20)",
    backgroundColor:"rgb(255,255,255)",
    display:"flex",
    alignItems:"center",
    justifyContent:"flex-start",
    flexDirection:"column"

})
const Tittle=styled.p({
    fontSize:20,
    margin:0,
    width:20,
    color:"white"
})
const Text=styled.p({
    fontSize:20,
    marginTop:15
})
const Icon=styled(CloseIcon)({
    color:"white",
  
})
const ContainerIcon =styled.div({
    width :"100%",
    display:"flex",
    backgroundColor:"rgb(70,200,255)",
    borderRadius:"10px 10px 0px 0px",
    marginBottom:15,
    justifyContent:"space-between",
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
    <Tittle></Tittle>
    <Tittle>
            Alerta
        </Tittle>
      <IconButton style={{marginRight:5}}onClick={()=>handleClick()}  aria-label="upload picture" component="label">
        <Icon/>
      </IconButton>
      
    </ContainerIcon>
            <Text>
            {message} 
            </Text>
            </Card>
       
        </Container>
       
        </>
    )
}
export default Message