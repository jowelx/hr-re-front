import styled from "@emotion/styled"
import { Box } from "@mui/material"
import { Grid } from "@mui/material";
import { ContainerDark,ContainerLight,ContainerLogin } from "src/styles/general/components";
import Card from "src/components/UI/Card";
const Wrapper= styled(Box)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"80vw",
})

const Home =()=>{
    return(
        <>
      <ContainerLight>
      <Wrapper>
            <Grid container>
            <Grid item xs={3}>
            <Card 
            vari={1}
            name={"test"}
            description={"sea sapo hta"}
            />
            </Grid>
            <Grid item xs={3}>
            <Card 
            vari={2}
            name={"test"}
            description={"sea sapo hta"}
            />
            </Grid>
            <Grid item xs={3}>
            <Card 
            vari={4}
            name={"test"}
            description={"sea sapo hta"}
            />
            </Grid>
            <Grid item xs={3}>
            <Card 
            vari={1}
            name={"test"}
            description={"sea sapo hta"}
            />
            </Grid>
            <Grid item xs={3}>
            <Card 
            vari={3}
            name={"test"}
            description={"se sapo hta"}
            />
            </Grid>
            
           
            </Grid>
           
        </Wrapper> 
      </ContainerLight>
     
        </>
    )
}
export default Home