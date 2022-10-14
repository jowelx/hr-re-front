import React from 'react'
import styled from '@emotion/styled'
import { Grid } from '@mui/material'
import { useContext ,useEffect} from 'react'
import { UserContext } from 'src/context/userContext'
import { getInventory } from 'src/api/api'
const Container=styled.div({

    width:"100%",
    textAlign:"left"
})
const Card=styled.div({
    borderRadius:2,
    padding:10,
    boxShadow:"0 .1vw 2px 0 rgb(100,100,100)"
})
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
        <Grid container justifyContent={"center"}spacing={5}>

       
      { inventorySettings?.map((i,index)=>{
        return(
            
            <Grid item xs={10}>
                <Container>
                <Grid container>
                    <Grid xs={12}> 
                      <p>{i.category}:</p>
                    </Grid>
                    <Grid item xs={3}>
                        {inventory?.filter(e=>e.category===i.category).map((i,index)=>{
                            return(
                                <>
                                <Card>
                                <p>Nombre:{i.name}</p>
                                <p>Cantidad:{i.amount}</p>
                                
                                </Card>
                           
                                </>
                            )
                        })}
                    </Grid>
                </Grid>

                </Container>
            </Grid>
            
        )
      })  
        }
         </Grid>
        </>
    )
}
export default Sumary