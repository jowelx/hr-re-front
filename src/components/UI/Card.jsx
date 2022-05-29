import { Box } from "@mui/material"
import styled from "@emotion/styled"
import { UserContext } from "src/context/userContext"
import { useContext } from "react"
import { COLOR_DARK_THIRD,COLOR_LIGHT_FIRST,COLOR_LIGHT_THIRD,COLOR_LIGHT_SHADOW,COLOR_DARK_SHADOW} from "src/constants/consts"
const Wrapper= styled(Box)(({color,shadow})=>`
    position:relative;
    width:15vw;
    margin:1vw;
    border-radius:4px 5px 5px 4px ;
    background-color:${color};
    box-shadow:0 .3vw .4vw .1vw ${shadow}
`)
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
    const {darkMode}=useContext(UserContext)
    return(
    <>
    
    <Wrapper 
      color={darkMode===false?COLOR_LIGHT_FIRST:COLOR_DARK_THIRD}
      shadow={darkMode===false?COLOR_LIGHT_SHADOW:COLOR_DARK_SHADOW}
    >
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