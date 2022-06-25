import * as React from 'react';
import styled from "@emotion/styled"
import { Grid } from '@mui/material';
import { UserContext } from "../../context/userContext"
import { useContext} from "react"
import { useState } from 'react';
const Time = styled.li(({darkMode})=>({
  display:"flex",
  width: "80%",
  padding:"10px 10px",
  cursor:"pointer",
  userSelect:" none",
  borderRadius:"8px"
}))

const Container =styled.div({
  width:"100%",
  margin:0,
  backgroundColor:"white"
})
const SelectionHours=({change,pm,setPm,am,setAm})=> {
  const {time}=useContext(UserContext)
  
  return (
 
 
       <Container>
  <Grid container spacing={1}>
        <Grid item xs={6}>
        {time.am?.map((item,sectionId) =>{
            return(
              <Time 
              style={{backgroundColor:am===sectionId?"rgba(0,140,255,0.45)":"rgba(0,100,255,0)"}}
              onClick={()=>{
                setAm(sectionId);
                setPm("");
              
              }}>
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
              <Time
              style={{backgroundColor:pm===sectionId?"rgba(0,140,255,0.45)":"rgba(0,100,255,0)"}}
              onClick={()=>{
                setPm(sectionId);
                setAm("");
              
              }}
              >
                {item}
              </Time>
            )
         }
         )
         }

         </Grid>
         </Grid>
       </Container>
      

  );
}

export default SelectionHours