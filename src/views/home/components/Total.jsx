import styled from "@emotion/styled"
import { COLOR_DARK_THIRD,COLOR_DARK_SECOND, COLOR_LIGHT_SECOND } from "src/constants/consts"
import { UserContext } from "../../../context/userContext"
import { useContext,useState } from "react"
import Button from '@mui/material/Button';
import { List , Grid,IconButton} from "@mui/material"
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import ContainerDark from "src/components/UI/Container";
import moment from "moment";
const Container =styled(ContainerDark)({
    marginTop:"5px",
    width:"95%",
    height: "400px",
    borderRadius:"5px",
    boxShadow:"-1px 1px 2px .1px rgba(20,20,20,.5)",
    padding:"5px"
})

const ButtonPrint = styled(Button)({
    margin:"0px 10px",

})

const ContainerButton=styled.div({
marginTop:"10px"
})

const TotalPrice=styled.p(({darkMode})=>({
    color:darkMode===false ?COLOR_DARK_SECOND:"white",
    
    margin: 5,
}))

const ContainerPrice=styled.div({
display:"flex",
justifyContent:"flex-start",
flexDirection:"row",

})
const ContainerPriceTotal=styled.div({
    display:"flex",
    justifyContent:"space-between",
    flexDirection:"row",
    
    })
const ListTime=styled.p({
    margin:5,
    textAlign:"start"
})

const Icon=styled(IconButton)({
backgroundColor:"rgb(255,255,255)",
margin:"0px 5px",
boxShadow:"0px 1px 2px .1px rgb(25,25,25)",
color:"rgb(80,80,80)"
})
const Ul=styled.ul({
    textAlign:"start",
    marginLeft:"20px"
})
const Total =({ticketTotal,setTicketTotal})=>{
    let price=0
  console.log(ticketTotal)
  const date=moment().format()
  const ticketId=parseInt(Math.random() *1000000)
    const {darkMode}=useContext(UserContext)
    return(
     <>
     
  <Container>
  <List
      sx={{
        width: '100%',
        maxWidth: 360,
        maxHeight: 300,
        position: 'relative',
        overflow: 'auto',
       
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
     <Ul>Loterias Alex</Ul>  
     <Ul>Fecha {date}</Ul>  
     <Ul>TICKET NO: { ticketId}</Ul>



{ticketTotal?.map((item,i)=>{
    return(
        <ContainerPrice>
            <Grid container  >
                <Grid item xs={3}>
                <TotalPrice  darkMode={darkMode}>
    #{item.Numero}
</TotalPrice>
                </Grid>


<Grid item xs={4}>
<ListTime>
   {item.hora.value}
</ListTime>

</Grid>

<Grid item xs={4}>
<TotalPrice darkMode={darkMode}>
    {item.Precio}$
</TotalPrice>
</Grid>


</Grid>
</ContainerPrice>
    )
})}

    </List>

<ContainerPriceTotal>
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
</ContainerPriceTotal>

  </Container>
<ContainerButton>

      
<Icon  onClick={()=>setTicketTotal([])} variant="contained" >
<DeleteIcon />
    </Icon>
 
      <Icon  variant="contained" >
      <LocalPrintshopIcon/>
    </Icon>
</ContainerButton>

     </>
    )
}
export default Total;