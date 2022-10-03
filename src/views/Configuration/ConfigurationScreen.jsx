import React, { useState } from "react";
import styled from "@emotion/styled";
import TextInput from "src/components/UI/TextInput";
import { Grid } from "@mui/material";
import { useContext } from "react";
import Button from '@mui/material/Button';
import { updateTaxes } from "src/api/api";
import { UserContext } from "src/context/userContext";
const Container=styled.div({
    width:"100%",
    borderRadius:5,
    boxShadow:"0 .1vw .2vw 0 rgb(120,120,120)"
})

const ConfigurationScreen=()=>{
    const {impuestos,setImpuestos}=useContext( UserContext)
    const [values,setValues]=useState({
            id:impuestos.id,
            creditoFiscal:impuestos.creditoFiscal,
            debitoFiscal:impuestos.debitoFiscal
    })
    const handleChange= (prop) => (event)=>{
        setValues({...values,[prop]:event.target.value})
    }
    const handleSumbmit=()=>{
        updateTaxes(values)
        .then(e=>{
            console.log(e.data)
            setImpuestos(e.data)
        })
        .catch(function(e){
            console.log(e)
        }) 
    }
    return(
        <>
        <br/>
        <Grid container justifyContent={"center"}  alignItems={"center"}>
            <Grid item xs={11}>
                <Container>
                <Grid container justifyContent={"center"}>
                    <Grid item xs={6}> 
                    <TextInput
                    onChange={handleChange("debitoFiscal")}
                    label="Impuesto por debito fiscal"
                    value={values.debitoFiscal}
                    />
                    </Grid>
                    <Grid item xs={6}> 
                    <TextInput
                    onChange={handleChange("creditoFiscal")}
                    label="Impuesto por crebito fiscal"
                    value={values.creditoFiscal}
                    />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                        onClick={()=>handleSumbmit()}
                        >
                            Guardar cambios
                        </Button>
                    </Grid>
                </Grid>
                
                </Container>
            </Grid>
        </Grid>
      
        </>
    )
}
export default ConfigurationScreen