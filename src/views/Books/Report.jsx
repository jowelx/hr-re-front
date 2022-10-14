import React,{useState,useEffect,useContext} from 'react'
import dayjs from 'dayjs';
import styled from '@emotion/styled';
import { getAllBill } from 'src/api/api';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment from 'moment';
import { PDFViewer } from '@react-pdf/renderer';
import DocumentPDF from './pdfComponent/Document';
import { UserContext } from 'src/context/userContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const Container=styled.div({
  display:"flex",
  width:"100%",
  backgroundColor:"rgba(100,100,125,0.1)",
  justifyContent:"center"
  })
const Card1 =styled.div({
marginTop:20,
backgroundColor:"rgba(250,250,255,0.8)",
padding:"2vw 0",
borderRadius:10,
boxShadow:"0 1px 1px 0 rgb(200,200,200)"
})

  const Tittle=styled.p({
    fontSize:16,
    margin:0,
    marginBottom:10,
    textAlign:"left"
  })
  const ContainerDtaPicker=styled.div({
  
  })
  const Wrapper=styled.div({
    overflow:" auto",
    marginTop:5,
    width:"100%",
    height:"40vw",
    padding:"1vw 0vw"
  })
const Report =()=>{
  const {impuestos}=useContext(UserContext)
  const [value, setValue] = React.useState(dayjs(moment().format()));
  const [book,setBook]=useState("")
  const [data,setData]=useState([])
  useEffect(()=>{
    if(book==='sell'){
      getAllBill().then(e=>setData(e.data.filter(e=>e.type==='Ingreso'&&moment(e.date).format("YYYY-MM")==moment(value.$d).format("YYYY-MM"))))
      console.log(moment(value.$d).format("MM"))
    }
    else if(book==='shop'){
      getAllBill().then(e=>setData(e.data.filter(e=>e.type==='Egreso'&&moment(e.date).format("YYYY-MM")==moment(value.$d).format("YYYY-MM"))))
      console.log(moment(value.$d).format("MM"))
    }
 
  },[value,book])
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setBook(event.target.value);
  };
    return(
    <>
 
    <Container>

    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item xs={3}>
        <Card1>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={10}>
          <Tittle>Selecciona que libro desea imprimir:</Tittle>
          </Grid>
          <Grid item xs={10}>
          <Select
          style={{width:"100%",textAlign:"left"}}
          value={book}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          >
          <MenuItem value="">
            <em>Ninguno</em>
          </MenuItem>
          <MenuItem value={"shop"}>Compras</MenuItem>
          <MenuItem value={"sell"}>Ventas</MenuItem>
  
        </Select>
          </Grid>
        </Grid>
        </Card1>
      
      
      </Grid>
      <Grid item xs={3}>
        <Card1>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={9}>
            <Tittle>Selecciona la fecha:</Tittle>
            </Grid>
            <Grid item xs={12}>
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
          renderInput={(params) => <TextField
           
            
            {...params} helperText={null} />}
          />
      </LocalizationProvider>
        </ContainerDtaPicker>
            </Grid>
          </Grid>
        </Card1>
     
    
      </Grid>
     { book!=''&&<Grid item xs={11}>
        <Wrapper>
       
        <PDFViewer
    style={{width:"99%",height:"75vh"}}
    >
      
      <DocumentPDF
          impuestos={impuestos}
          type={book}
          data={data}
          row={book==='shop'?42:24}
          column={14}
      />
    </PDFViewer>
        </Wrapper>
   
      </Grid>}
   
    </Grid>
 

  </Container>
 
  

    </>
    )
}
export default Report