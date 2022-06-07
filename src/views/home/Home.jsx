import styled from "@emotion/styled"
import { Box } from "@mui/material"
import { Grid } from "@mui/material";
import { ContainerDark,ContainerLight,ContainerHorizontal } from "src/styles/general/components";
import SideMenu from "src/components/Menu";
import CentralPanel from "./components/container/centralPaner";
import RightPanel from "./components/container/RightPanel";
import SwitchMode from "src/components/UI/SwitchMode";
import Header from "./components/Header";
import { UserContext } from "src/context/userContext";
import { useContext } from "react";
import Text from "src/components/UI/Text";
const Wrapper= styled(Box)({
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"column",
    width:"100%",
})
const ContMode=styled(Box)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
})
const items=[
'Ventas',
'Premiacion',
'Reporte',
'Configuracion',
'Utilidades',
'Actualizar',
'Estadistica',
'Salir',
]

const ContainerH=styled(ContainerHorizontal)(({darkmode})=>({
 
  boxShadow:darkmode===true?"0 2px 3px 0 rgb(10,10,10)":"0 2px 2px 0 rgb(220,220,220)",
  width:"100%",
}))
const Home =()=>{
    const {darkMode,lotery,setLotery}=useContext(UserContext)
    const Container = darkMode ===true ?ContainerDark: ContainerLight
    return(
        <>
      <Container>  
      <ContainerH 
      darkmode={darkMode}
      >
      <SideMenu items={items}/>
      <Text 
        size="2vw"
        text={`Loteria`}/>
      <ContMode>
      <Text 
        size="1vw"
        text="Modo ocuro"/>
      <SwitchMode/>
      </ContMode>
      </ContainerH>
      <Wrapper>
     <Header setTypeLot={setLotery} />

   {  lotery>0&&
     <Grid container>
      <Grid item xs={9}>
        <CentralPanel/>
      </Grid>
      <Grid item xs={3}>
        <RightPanel />
      </Grid>
     </Grid>}
        </Wrapper> 
      </Container>
        </>
    )
}
export default Home