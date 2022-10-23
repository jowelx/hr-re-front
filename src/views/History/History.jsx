import React from 'react'
import { getAllBill } from 'src/api/api'
import { useEffect,useState } from 'react'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import {Divider} from '@mui/material'
import moment from 'moment'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {Box} from '@mui/material'
const Wrapper=styled.div({
    marginTop:10,
    width:"90%",
})

const columns = [
    { 
      field: '_id',
      headerName: 'ID',
      width: 90 
    },
    {
      field: 'type',
      headerName: 'Nombre',
      width: 150,
      editable: false,
    },
    {
      field: 'value',
      headerName: 'Cantidad',
      width: 150,
      editable: false,
    },
    {
      field: 'date',
      headerName: 'Fecha',
      type: 'number',
      width: 150,
      editable: false,
    },
    {
      field: 'type',
      headerName: 'Tipo de activo',
      width: 110,
      editable: false,
    },
  ];
const History=()=>{
    const [data,setData]=useState([])
    const [value,setValue] = React.useState(dayjs(moment().format()));
    useEffect(()=>{
     getAllBill().then(e=>{
      setData(e.data.filter(e=>moment(e.date).format("YYYY")===moment(value.$d).format("YYYY")))
      console.log(e.data)}
      )}
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
        <Box sx={{ height: 400, width: '90%' }}>
        <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
          </Box>
          
        </Wrapper>
     
       
      
        </>
    )
}
export default History