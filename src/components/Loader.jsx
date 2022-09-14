import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import styled from '@emotion/styled';
import CheckIcon from '@mui/icons-material/Check';

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
    width:300,
    height:200,
    borderRadius:10,
    boxShadow:"0 5px .8vw 0 rgb(20,20,20)",
    backgroundColor:"rgb(255,255,255)",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"column"

})
const Tittle=styled.p({

})
const Icon=styled(CheckIcon)({
    color:"rgb(150,255,150)",
    fontSize:40
})
const Loader=()=>{
    return(
        <>
        <Container>
            <Card>
            
            <CircularLoader/>
            <Tittle>
                    Cargando...
                </Tittle>
            </Card>
       
        </Container>
       
        </>
    )
}
export default Loader