import styled from "@emotion/styled"
import { Grid } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../../../context/userContext";
import { COLOR_DARK_FIRST, COLOR_LIGHT_FIRST } from "../../../../constants/consts";
import { COLOR_LIGHT_SECOND } from "src/constants/consts";
import ContainerDark from "src/components/UI/Container";
import { animals } from "src/components/Animal";

const Container =styled(ContainerDark)({
    width:"100%",
    height:"50vw",
    
  

})

const ContainerImg = styled.div({
    width: "100%",
    height: "auto",
    backgroundColor: "white",
})

const Img = styled.img({
    width: "90%",
    height: "auto",
})

const LeftPanel=()=>{
    const {darkMode}=useContext(UserContext)
    return(
        <>
        <Container>
            <Grid container spacing={0.5}
            justifyContent="center">
                {animals.map((item,index)=>{

                return(
                    <Grid item xs={1.7} sm={2} md={1.7} >
                    <ContainerImg>

                    <Img src={item.imagen} />
                    
                    </ContainerImg>

                    </Grid>
                )
                }
                )
                }
            </Grid>
        </Container>
        </>
    )

    

}
export default LeftPanel

