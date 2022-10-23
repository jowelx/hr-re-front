import React,{useState,useEffect} from 'react'
import dayjs from 'dayjs';
import styled from '@emotion/styled';
import { getAllBill } from 'src/api/api';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TableComponent from './components/Table';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';
const Container=styled.div({
display:"flex",
width:"100%",
justifyContent:"center"
})
const Tittle=styled.p({
  fontSize:30,
  marginLeft:"10%",
  textAlign:"left"
})
const ContainerDtaPicker=styled.div({
  marginTop:20
})
const Wrapper=styled.div({
  overflow:" auto",
  marginTop:20,
  width:"100%",
  height:"26vw",
  padding:"1vw 0vw"
})
const PurchaseBook=()=>{
  const [value, setValue] = React.useState(dayjs(moment().format()));
  const [data,setData]=useState([])
  useEffect(()=>{
   getAllBill().then(e=>setData(e.data.filter(e=>e.type==='Egreso'&&moment(e.date).format("YYYY-MM")==moment(value.$d).format("YYYY-MM"))))
   console.log(moment(value.$d).format("YYYY-MM"))
  },[value])
  
    return(
    <>
  <Container>
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={6}>
      <Tittle>Libro de compras</Tittle>
      </Grid>
      <Grid item xs={6}>
       <Grid container justifyContent={"center"} alignItems={"center"}>
        <Grid item xs={10}>
      <p style={{textAlign:"right",fontSize:24}}>Selecciona una fecha</p>
        </Grid>
        <Grid item xs={10}>
        <ContainerDtaPicker
        style={{display:"flex",justifyContent:"flex-end"}}
        >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={['year', 'month']}
          label=""
          minDate={dayjs('2012-03-01')}
          maxDate={dayjs('2023-06-01')}
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} helperText={null} />}
        />
   

      </LocalizationProvider>
        </ContainerDtaPicker>
        </Grid>
       </Grid>
     
    
      </Grid>
      <Grid item xs={11}>
        <Wrapper>
       
        <TableComponent 
     
        type={"shop"}
        data={data}
        row={42}
        column={14}
        />
        </Wrapper>
   
      </Grid>
   
    </Grid>
 

  </Container>
 
    </>
    )
}
export default PurchaseBook