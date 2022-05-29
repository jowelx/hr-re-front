import styled from "@emotion/styled"
import { Typography } from "@mui/material"
import { UserContext } from "src/context/userContext"
import { useContext } from "react"
import { COLOR_LIGHT_FIRST,COLOR_DARK_FIRST } from "src/constants/consts"
const TextCamp =styled(Typography)(({color,size})=>`
    color:${color};
    font-size:${size};
`)
const Text =({text,size})=>{
const {darkMode}=useContext(UserContext)
return(
        <TextCamp 
        size={size}
        color={darkMode===true?COLOR_LIGHT_FIRST:COLOR_DARK_FIRST}
        >
        {text}
        </TextCamp>
    )
}
export default Text