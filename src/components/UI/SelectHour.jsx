import * as React from 'react';
import styled from "@emotion/styled"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@mui/material';
import { red } from '@mui/material/colors';
import { UserContext } from "../../context/userContext"
import { useContext, useEffect, useState } from "react"

const Time = styled.li(({darkMode})=>({
  display:"flex",
  alignItems:"flex-start",
  width: "100%",
  backgroundColor: "blue",
  
}))


const SelectionHours=()=> {
  const {time}=useContext(UserContext)
  return (
 
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "red",
          }}
        >
          <Typography>Loteria Hora</Typography>
        </AccordionSummary>
          
        
        <AccordionDetails sx={{
        width: '100%',
        maxWidth: 265,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 90,
        backgroundColor: "black",
        '& ul': { padding: 0 },
      }}>
       
        <Grid container spacing={1}>
        <Grid item xs={6}>
        {time.am?.map((item,sectionId) =>{
            return(
              <Time>
                {item}
              </Time>
            )
         }
         )
         }
         </Grid>

         <Grid item xs={6}>
         {time.pm?.map((item,sectionId) =>{
            return(
              <Time>
                {item}
              </Time>
            )
         }
         )
         }

         </Grid>
         </Grid>
     </AccordionDetails>
      
      </Accordion>
  );
}

export default SelectionHours