import styled from "@emotion/styled"
import { Box} from "@mui/material"
import { ContainerDark,ContainerLight,ContainerHorizontal } from "src/styles/general/components";
import SideMenu from "src/components/Menu";
import SwitchMode from "src/components/UI/SwitchMode";
import History from "../History/History";
import Header from "./components/Header";
import { UserContext } from "src/context/userContext";
import { useContext,useState,useEffect } from "react";
import Text from "src/components/UI/Text";
import InputData from "../Input/Index";
import BooksScreen from "../Books/index";
import Estadistics from "../Estadistics/Estadistics";
import Inventory from "../Inventary";
import ConfigurationScreen from "../Configuration/ConfigurationScreen";
import moment from "moment";
import {Redirect} from 'react-router-dom'
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
'Panel Principal',
'Estadisticas',
'Inventario',
'Facturas',
'Historial',
'Configuracion',
'Salir',
]
const ContainerH=styled(ContainerHorizontal)(({darkmode})=>({
  boxShadow:darkmode===true?"0 2px 3px 0 rgb(10,10,10)":"0 2px 2px 0 rgb(220,220,220)",
  width:"100%",
}))
const Home =()=>{
    const {darkMode,screen,setScreen}=useContext(UserContext)
    const Container = darkMode ===true ?ContainerDark: ContainerLight
    const [menu,setMenu]=useState(0)
    const [Hour,setHour]=useState(moment().format('LT'))
    setInterval(function () {
      setHour(moment().format('LT'))
      }, 10000);
    return(
        <>
        {menu==6&&<Redirect to="/"/>}
      <Container>  
      <ContainerH 
      darkmode={darkMode}
      >
      <SideMenu 
      menu={menu}
      setMenu={setMenu}
      items={items}
      />
      <Text>
        Sistema contable
      </Text>
      <Text>
        {Hour}
      </Text>
      <ContMode>
        <Text>
        Modo oscuro  
        </Text>
      <SwitchMode/>
      </ContMode>
      </ContainerH>
      <Wrapper>
     <Header type={menu}  setScreen={setScreen} />
     {menu===0&&<BooksScreen screen={screen}/>}
     {menu===1&&<Estadistics/>}
     {menu===2&&<Inventory   screen={screen}/>}
     {menu===3&&<InputData   screen={screen}/>}
     {menu===4&&<History/>}
     {menu===5&&<ConfigurationScreen/>}
        </Wrapper> 


      </Container>
        </>
    )
}
export default Home