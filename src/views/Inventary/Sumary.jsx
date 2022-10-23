import React from 'react'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import { useContext ,useEffect} from 'react'
import { UserContext } from 'src/context/userContext'
import { getInventory } from 'src/api/api'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
const Container=styled.div({
    width:"100%",
    textAlign:"left"
})
const columns = [
    { 
      field: '_id',
      headerName: 'ID',
      width: 90 
    },
    {
      field: 'name',
      headerName: 'Nombre',
      width: 150,
      editable: false,
    },
    {
      field: 'amount',
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
      field: 'category',
      headerName: 'Categoria',
      width: 110,
      editable: false,
    },
  ];
const Sumary =()=>{
    const {inventorySettings,inventory,setInventory}=useContext(UserContext)
   useEffect(()=>{
    getInventory()
    .then((e)=>{
        setInventory(e.data)
    })
    .catch(function(e){
        console.log(e)
    })
   },[])

    return(
        <>
        <br/>
    <Box sx={{ height: 500, width: '90%' }}>
          <DataGrid
            rows={inventory}
            columns={columns}
            pageSize={20}
            rowsPerPageOptions={[20]}
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
    </Box>
        <Grid container justifyContent={"center"}spacing={5}>    
            <Grid item xs={10}>
                <Container>
                </Container>
            </Grid>
         </Grid>
        </>
    )
}
export default Sumary