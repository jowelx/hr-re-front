import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import styled from '@emotion/styled';
import CheckIcon from '@mui/icons-material/Check';
import { UserContext } from 'src/context/userContext';
import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import { Grid } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
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
    fontSize:18,
    margin:0,
    marginTop:20,
    color:"rgb(100,100,100)"

})
const ContainerIcon =styled.div({
    width :"100%",
    display:"flex",
    justifyContent:"flex-end",
   // backgroundColor:"rgb(255,100,100)",
    //borderRadius:"10px 10px 0px 0px",

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
      <IconButton  onClick={()=>handleClick()}  aria-label="upload picture" component="label">
        <Icon
         style={{color:"rgb(100,100,100)"}}
        />
      </IconButton>
    </ContainerIcon>
    <Grid>
        <Grid item xs={12}>
        < HighlightOffIcon
         style={{fontSize:100,color:"rgb(250,100,100)"}}
        />
        </Grid>
        <Grid item xs={12}>
        <p style={{fontSize:20,color:"rgb(90,90,90)",margin:0}}>Algo salio mal...</p>
        </Grid>
        <Grid item xs={12}>
        <Text>
         {error==="ERR_NETWORK"?"Error de conexion":error}
            </Text>
        </Grid>
    </Grid>
            
            </Card>
        </Container>
       
        </>
    )
}
export default Error