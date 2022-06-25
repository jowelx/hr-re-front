import styled from "@emotion/styled"
import { Grid } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../../context/userContext";
import { COLOR_DARK_FIRST, COLOR_LIGHT_FIRST } from "../../../../constants/consts";
import { COLOR_LIGHT_SECOND } from "src/constants/consts";
import ContainerDark from "src/components/UI/Container";
import ImgAnimal from "./components/animal";

const Container =styled(ContainerDark)({   
    width:"100%",
    height:"50vw",
})

const LeftPanel=()=>{
    const {darkMode,lotery}=useContext(UserContext)
    return(
        <>
        <Container>
        {lotery===4&&<ImgAnimal />}

        </Container>
        </>
    )
}
export default LeftPanel

