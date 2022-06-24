import styled from "@emotion/styled"
import { Grid } from "@mui/material"
import { useContext, useState } from "react";
import { UserContext } from "src/context/userContext";
import { useEffect } from "react";
import { animals,lagranjita,guacharo } from "src/components/Animal";


const ContainerImg = styled.div({
    width: "100%",
    height: "auto",
    backgroundColor: "white",
})

const Img = styled.img({
    width: "90%",
    height: "auto",
})

const ImgAnimal=()=>{
const {darkMode,nameLotery}=useContext(UserContext)
const [data,setData]=useState([])
useEffect(()=>{
    nameLotery==="LaGranjita"&& setData(lagranjita)
    nameLotery==="LaGranjita"&& setData(lagranjita)
    nameLotery==="LaGranjita"&& setData(lagranjita)
    nameLotery==="GranjaMillonaria"&& setData(animals)
    nameLotery==="GuacharoActivo"&& setData(guacharo)
},[nameLotery])

return(
<Grid container spacing={0.5}
            justifyContent="center">
                {data.map((item,index)=>{

                return(
                    <Grid item xs={1.7} sm={2} md={1.7} >
                    <ContainerImg>

                    <Img src={item.imagen} />
                    
                    </ContainerImg>

                    </Grid>
                )
                }
                )
                }
            </Grid>
            )
            }

export default ImgAnimal