import { Box } from "@mui/material"
import styled from "@emotion/styled"
const Wrapper= styled(Box)({
    position:"relative",
    width:"15vw",
    margin:"1vw",
    borderRadius:"4px 5px 5px 4px ",
    backgroundColor:"rgb(255,255,255)",
    boxShadow:"0 .5vw 1vw .1vw rgb(140,140,140)",
})
const Border1=styled(Box)({
    borderRadius:"4px 0px 0px 4px ",
    width:".8vw",
    background:"linear-gradient(0deg, rgb(25,120,250) 0%, rgb(0,255,200) 100%)",
    height:"100%",
    marginLeft:0,
    position:"absolute"
})
const Border2=styled(Box)({
    borderRadius:"4px 0px 0px 4px ",
    background:"linear-gradient(0deg, rgb(250,20,200) 0%, rgb(80,150,255) 100%)",
    width:".8vw",
    height:"100%",
    marginLeft:0,
    position:"absolute"
})
const Border3=styled(Box)({
    borderRadius:"4px 0px 0px 4px ",
    background:"linear-gradient(0deg, rgb(255,240,0) 0%, rgb(255,80,200) 100%)",
    width:".8vw",
    height:"100%",
    marginLeft:0,
    position:"absolute"
})
const Border4=styled(Box)({
    borderRadius:"4px 0px 0px 4px ",
    background:"linear-gradient(0deg, rgb(50,250,250) 0%, rgb(0,250,100) 100%)",
    width:".8vw",
    height:"100%",
    marginLeft:0,
    position:"absolute"
})
const Card =({vari,name, description})=>{
    return(
    <>
    
    <Wrapper>
    {vari===1&&<Border1/> }
    {vari===2&&<Border2/>}
    {vari===3&&<Border3/>}
    {vari===4&&<Border4/>}
        
      
        <h4>{name}</h4>
        <p>{description}</p>
    </Wrapper>


    </>
    )
}
export default Card