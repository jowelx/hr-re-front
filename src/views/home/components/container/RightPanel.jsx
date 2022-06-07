import styled from "@emotion/styled"
import { useContext} from "react";
import { UserContext } from "../../../../context/userContext";
import {  COLOR_DARK_SECOND,  COLOR_DARK_THIRD } from "../../../../constants/consts";
import { COLOR_LIGHT_SECOND } from "src/constants/consts";
import ListLotery from "../List";
import Total from "../Total";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { List } from "@mui/material"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
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
const Container =styled.div(({darkMode})=>({
    backgroundColor:darkMode===true?  COLOR_DARK_SECOND :COLOR_LIGHT_SECOND,
    width:"100%",
    height:"50vw",
    boxShadow:"-2px 0px 2px 0px rgba(20,20,20,.4)",
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    flexDirection:"column",
    flexWrap:"wrap"

}))

const Tittle = styled.p(({darkMode})=>({
    width:"90%",
    marginLeft:"20px",
    display:"flex",
    alignItems:"flex-start",
    color:darkMode===false ?COLOR_DARK_SECOND:"white"
}))
const RightPanel = ()=>{
    const {darkMode}=useContext(UserContext)
  
    return(
        <>
        <Container
        darkMode={darkMode}
        >
          <List
      sx={{
        width: '100%',
        maxWidth: 360,
        position: 'relative',
        overflow: 'auto',
        flexDirection:"row",
        maxHeight: 840,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      <Accordion >
        <AccordionSummary 
        
        expandIcon={< ArrowRightIcon sx={{ color:"rgb(80,220,255)",fontSize: '2rem' }} />}
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
      </Accordion>
      <Accordion >
        <AccordionSummary 
        
        expandIcon={< ArrowRightIcon sx={{ color:"rgb(80,220,255)",fontSize: '2rem' }} />}
        darkMode={darkMode}
        aria-controls="panel1d-content" id="panel1d-header">
          <Tittle
          darkMode={darkMode}

          >Ticket
          </Tittle>
        </AccordionSummary>
        <AccordionDetails darkMode={darkMode}>
        <Total/>
        </AccordionDetails>
      </Accordion>
      </List>
         
           
        </Container>
        </>
    )
}
export default RightPanel