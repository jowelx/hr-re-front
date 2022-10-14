import React from 'react'
import { getAllBill } from 'src/api/api'
import { useEffect,useState } from 'react'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import {Divider} from '@mui/material'
import moment from 'moment'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'

import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
const Wrapper=styled.div({
    marginTop:10,
    width:"90%",
})
const Container =styled.div({

    width:"100%",
    borderRadius:4,
    boxShadow:"0 2px .6vw 0 rgb(150,150,150)"
})
const ContainerInfo = styled.div({
    display:"flex",
    flexDirection:"row",
    marginLeft:5,
    alignItems:"center"
})
const Text=styled.p({
    
})
const Text2=styled.p({
fontSize:15
})
const HeaderGreen=styled.div({
backgroundColor:"rgb(120,250,150)",
borderRadius:"4px 4px 0 0px",
display:"flex",
justifyContent:"center"
})
const HeaderRed=styled.div({
backgroundColor:"rgb(255,130,130)",
borderRadius:"4px 4px 0 0px",
display:"flex",
justifyContent:"center"
})
const Tittle=styled.p({
    backgroundColor:"rgb(255,255,255)",
    margin:"5px 0px",
    padding:"4px 15px",
    borderRadius:10
})
const History=()=>{
    const [data,setData]=useState([])
    const [value,setValue] = React.useState(dayjs(moment().format()));
    useEffect(()=>{
     getAllBill().then(e=>setData(e.data.filter(e=>moment(e.date).format("YYYY")===moment(value.$d).format("YYYY"))))}
    ,[value])
    return(
        <>
        <Wrapper>
        <br/>
            <Grid container>
                <Grid item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
      
          views={['year']}
        
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
                </Grid>
            </Grid>
        <br/>
        <Grid container  spacing={4}>
        {data?.map((i,index)=>{
            return(
                <>
                <Grid item xs={2}>
                   <Container>
                    {
                    i.type==="Ingreso"?
                    <HeaderGreen>
                    <Tittle>{i.type}</ Tittle>
                    </HeaderGreen>
                    :<HeaderRed>
                    <Tittle>{i.type}</ Tittle>
                    </HeaderRed>
                    }
                        <ContainerInfo>
                        <Text>
                        Fecha:
                        </Text>
                        <Text2>
                        {moment(i.date).format("YYYY-MM") }
                        </Text2>
                        </ContainerInfo>
                    <Divider/>
                        <ContainerInfo>
                        <Text>
                        Serial:
                        </Text>
                        <Text2>
                        {i.serial}
                        </Text2>
                        </ContainerInfo>
                        <Divider/>
                        <ContainerInfo>
                        <Text>
                        Monto:
                        </Text>
                        <Text2>
                        {i.value}
                        </Text2>
                        </ContainerInfo>
                        <Divider/>
         
                    </Container>
              
                </Grid>
            
                </>
            )
        })}
        </Grid>
        </Wrapper>
     
       
      
        </>
    )
}
export default History