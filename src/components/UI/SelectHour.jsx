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
  borderRadius:"8px",
  marginBottom:"5px"
 
}))

const Container =styled.div({
  width:"100%",
  margin:0,
  backgroundColor:"white",
  padding:"0px 10px"
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
              style={{
                
                backgroundColor:am?.index===sectionId?"rgba(0,140,255,0.45)":"rgba(0,100,255,0)",
                boxShadow:am?.index===sectionId?"0px 1px 1px 0px rgba(20,20,20,.4)":"0px 1px 1px 0px rgba(20,20,20,0)"
              }}
              onClick={()=>{
                setAm({
                  value:item,
                 index: sectionId
                  });
                setPm(null);
              
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
              style={{
                
                
                backgroundColor:pm?.index===sectionId?"rgba(0,140,255,0.45)":"rgba(0,100,255,0)",
                boxShadow:pm?.index===sectionId?"0px 1px 1px 0px rgba(20,20,20,.4)":"0px 1px 1px 0px rgba(20,20,20,0)"
            
            }}
              onClick={()=>{
                setPm({
                  value:item,
                 index: sectionId
                  });
                setAm(null);
              
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