import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import CheckIcon from '@mui/icons-material/Check';
import { UserContext } from 'src/context/userContext';
import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';

const CircularLoader=styled(CircularProgress)({
    color:"rgb(100,205,250)",
})
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
    width:250,
    height:180,
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
    margin:0,

})
const ContainerIcon =styled.div({
    width :"100%",
    display:"flex",
    justifyContent:"space-between",
    backgroundColor:"rgb(255,100,100)",
    borderRadius:"10px 10px 0px 0px",
    marginBottom:15,
    alignItems:"center"

})
const Icon=styled(CloseIcon)({
    color:"white"
})
const Error=()=>{
    const {error,setError}=useContext(UserContext)
    const handleClick=()=>{
        setError("")
    }
    return(
        <>
        <Container>
        <Card>
    <ContainerIcon>
    <Tittle></Tittle>
    <Tittle>
            Error
        </Tittle>
      <IconButton  onClick={()=>handleClick()}  aria-label="upload picture" component="label">
        <Icon/>
      </IconButton>
    </ContainerIcon>
            <Text>
         {error==="ERR_NETWORK"?"Error de conexion":error}
            </Text>
            </Card>
        </Container>
       
        </>
    )
}
export default Error