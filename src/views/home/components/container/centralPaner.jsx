import styled from "@emotion/styled"
import { useContext, useEffect, useState} from "react";
import { UserContext } from "../../../../context/userContext";
import {  COLOR_DARK_SECOND,  COLOR_DARK_THIRD } from "../../../../constants/consts";
import { COLOR_LIGHT_SECOND } from "src/constants/consts";
import ListLotery from "../List";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { List } from "@mui/material"
import ContainerDark from "src/components/UI/Container"
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button'
import SelectHours from '../../../../components/UI/SelectHour'


const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={2} square {...props} />
  ))(({ theme }) => ({
      marginBottom:"1px",
    width:"100%",
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
   
      {...props}
    />
  ))(({ darkMode }) => ({
    height:"20px",
    backgroundColor: darkMode===true?COLOR_DARK_THIRD:COLOR_LIGHT_SECOND,
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
    },
  }));
  const AccordionDetails = styled(MuiAccordionDetails)(({ darkMode }) => ({
    backgroundColor: darkMode===true?COLOR_DARK_SECOND:COLOR_LIGHT_SECOND,
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));
const Container =styled(ContainerDark)({
    width:"100%",
    height:"50vw",
    boxShadow:"-2px 0px 2px 0px rgba(20,20,20,.4)",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"column",
    flexWrap:"wrap"

})

const Tittle = styled.p(({darkMode})=>({
    width:"100%",
    marginLeft:"20px",
    display:"flex",
    alignItems:"flex-start",
    color:darkMode===false ?COLOR_DARK_SECOND:"white"
}))

const ContainerImput=styled.div({
  margin: "3%"
  })


const ContainerAgg=styled.div({
  margin: "3%"
})


const CentralPanel = ({ticketTotal,setItemTotal})=>{
    const {darkMode}=useContext(UserContext)
    let ticket=[]
    const [am,setAm]=useState(null)
    const [pm,setPm]=useState(null)
    const [ticketItem,setTicketItem]=useState({
      Numero: "",
      Precio: "",
      hora:""
    })
    const hanledSummit=()=>{
      setItemTotal([...ticketTotal,ticketItem])
    }
    const hanledChange=(props)=>(event)=>{
     
      setTicketItem({...ticketItem, [props]:event.target.value})
    }
useEffect(()=>{
  if(am!=null){
    console.log(ticketItem)
 setTicketItem({...ticketItem, hora:am})
  }else{
  setTicketItem({...ticketItem, hora:pm})
  }
  


},[pm,am])
    return(
        <>
        <Container
        darkMode={darkMode}
        >
          <List
      sx={{
        width: '100%',
        maxWidth: 400,
        position: 'relative',
        overflow: 'auto',
        flexDirection:"row",
        maxHeight: 840,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >

    
        <AccordionSummary 
        
        
        darkMode={darkMode}
        aria-controls="panel1d-content" id="panel1d-header">
          <Tittle
          darkMode={darkMode}

          >Loterias
          </Tittle>
        </AccordionSummary>
        <AccordionDetails darkMode={darkMode}>
        <ListLotery />
        </AccordionDetails>

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        
        >
          <Typography>Loteria Hora</Typography>
        </AccordionSummary>
          
        
        <AccordionDetails
        darkMode={darkMode}
        sx={{
        width: '100%',
        maxWidth: 290,
      
        position: 'relative',
        overflow: 'auto',
        maxHeight: 105,
    
        '& ul': { padding: 0 },
      }}>

          <SelectHours
          pm={pm}
          setPm={setPm}
          am={am}
          setAm={setAm}
          Change={setTicketItem}
          />
      
      </AccordionDetails>
   
      
      
      </Accordion>
        <ContainerImput>
            <Grid container spacing={0.5}>
              <Grid item xs={6}>
              <TextField id="outlined-basic" label="Numero" variant="outlined" 
              onChange={hanledChange("Numero")}
              value={ticketItem.Numero}
              
              />
              </Grid>
              <Grid item xs={6}>
              <TextField  id="outlined-basic" label="Precio" variant="outlined"
              onChange={hanledChange("Precio")}
              value={ticketItem.Precio}
              />
              </Grid>
            </Grid>
      </ContainerImput>

      <ContainerAgg>
      <Grid >
      <Button variant="contained" sx={{ width: "100%"}}
      onClick={hanledSummit}
      >
        Agregar
      </Button>
      </Grid>
      </ContainerAgg>
   

      </List>
         
           
        </Container>
        </>
    )
}
export default CentralPanel

