import React,{useState} from 'react'
import Box from '@mui/material/Box';
import dayjs from 'dayjs';
import { DataGrid } from '@mui/x-data-grid';
import styled from '@emotion/styled';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TableComponent from './components/Table';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';
const Container=styled.div({

display:"flex",

justifyContent:"center"
})
const Tittle=styled.p({
  fontSize:20
})
const ContainerDtaPicker=styled.div({
  marginTop:20
})
const Wrapper=styled.div({
  overflow:" scroll",
  marginTop:20,
  width:"70vw",
  height:"30vw",
  padding:"1vw 0vw"
})
const SellBook=()=>{
  const [value, setValue] = React.useState(dayjs(moment().format()));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
    return(
    <>
  <Container>
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={6}>
      <Tittle>Selecciona la fecha:</Tittle>
      </Grid>
      <Grid item xs={6}>
       
        <ContainerDtaPicker>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/DD/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
   

      </LocalizationProvider>
        </ContainerDtaPicker>
    
      </Grid>
      <Grid item xs={8}>
        <Wrapper>
       
        <TableComponent 
        type={"sell"}
    row={24}
    column={14}
    />
        </Wrapper>
   
      </Grid>
   
    </Grid>
 

  </Container>
 
    </>
    )
}
export default SellBook