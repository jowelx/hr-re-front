import styled from "@emotion/styled"
import { COLOR_DARK_THIRD,COLOR_DARK_SECOND, COLOR_LIGHT_SECOND } from "src/constants/consts"
import { UserContext } from "../../../context/userContext"
import { useContext,useState } from "react"
import Button from '@mui/material/Button';
import { List } from "@mui/material"
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ContainerDark from "src/components/UI/Container";

const Container =styled(ContainerDark)({
    marginTop:"5px",
    width:"95%",
    height: "400px",
    borderRadius:"5px",
    boxShadow:"-1px 1px 2px .1px rgba(20,20,20,.5)",
    padding:"5px"
})

const ButtonPrint = styled(Button)({
    margin:"0px 10px"
})

const ContainerButton=styled.div({
marginTop:"10px"
})

const TotalPrice=styled.p(({darkMode})=>({
    color:darkMode===false ?COLOR_DARK_SECOND:"white"
}))

const ContainerPrice=styled.div({
display:"flex",
padding:"0px 20px",
justifyContent:"space-between",
flexDirection:"row"
})


const Total =({ticketTotal,setItemTotal})=>{
    let price=0
  
    const {darkMode}=useContext(UserContext)
    return(
     <>
  <Container>
  <List
      sx={{
        width: '100%',
        maxWidth: 360,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 350,
     
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >

{ticketTotal?.map((item,i)=>{
    return(
        <ContainerPrice>
<TotalPrice  darkMode={darkMode}>
    {item.Numero} 
</TotalPrice>
<TotalPrice darkMode={darkMode}>
    {item.Precio}
</TotalPrice>
</ContainerPrice>
    )
})}
        
    </List>

<ContainerPrice>
<TotalPrice  darkMode={darkMode}>
    Total
</TotalPrice>
<TotalPrice darkMode={darkMode}>
{ticketTotal?.map((item,i)=>{
   
    price+= parseFloat(item.Precio)
    return(
        <>
       {i===ticketTotal.length-1&&
        `${price}$` }
    
    </> )
   
})}
</TotalPrice>
</ContainerPrice>

  </Container>
<ContainerButton>
<ButtonPrint  variant="contained" endIcon={<DeleteIcon />}>
        Borrar
      </ButtonPrint > 
      <ButtonPrint  variant="contained" endIcon={<SendIcon />}>
        Imprimir
      </ButtonPrint > 
</ContainerButton>

     </>
    )
}
export default Total;