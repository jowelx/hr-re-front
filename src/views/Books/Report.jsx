import React,{useState,useEffect,useContext} from 'react'
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
import { PDFViewer } from '@react-pdf/renderer';
import DocumentPDF from './pdfComponent/Document';
import { UserContext } from 'src/context/userContext';
// Create styles
//////
const Container=styled.div({
  display:"flex",
  width:"100%",
  justifyContent:"center"
  })
  const Tittle=styled.p({
    fontSize:20
  })
  const ContainerDtaPicker=styled.div({
    marginTop:20
  })
  const Wrapper=styled.div({
    overflow:" auto",
    marginTop:20,
    width:"100%",
    height:"32vw",
    padding:"1vw 0vw"
  })
const Report =()=>{
  const {impuestos}=useContext(UserContext)
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
      <Tittle>Selecciona la fecha:</Tittle>
      </Grid>
      <Grid item xs={6}>
       
        <ContainerDtaPicker>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={['year', 'month']}
          label="Año y mes"
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
      <Grid item xs={11}>
        <Wrapper>
       
        <PDFViewer
    style={{width:"99%",height:"85vh"}}
    >
      
      <DocumentPDF
      impuestos={impuestos}
           type={"sell"}
           data={data}
           row={42}
           column={14}
      />
    </PDFViewer>
        </Wrapper>
   
      </Grid>
   
    </Grid>
 

  </Container>
 
  

    </>
    )
}
export default Report