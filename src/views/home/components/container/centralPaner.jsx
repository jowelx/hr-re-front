import styled from "@emotion/styled"
import { useContext } from "react";
import { UserContext } from "../../../../context/userContext";
import { COLOR_DARK_FIRST, COLOR_LIGHT_FIRST } from "../../../../constants/consts";
import { COLOR_LIGHT_SECOND } from "src/constants/consts";
const Container =styled.div(({darkMode})=>({
    backgroundColor:darkMode===true?  COLOR_DARK_FIRST :COLOR_LIGHT_FIRST,
    width:"100%",
    height:"50vw",
  

}))

const CentralPanel=()=>{
    const {darkMode}=useContext(UserContext)
    return(
        <>
        <Container
        darkMode={darkMode}
        >

        </Container>
        </>
    )
}
export default CentralPanel

