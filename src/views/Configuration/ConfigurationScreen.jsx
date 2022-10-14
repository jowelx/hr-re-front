import React, { useState } from "react";
import styled from "@emotion/styled";
import TextInput from "src/components/UI/TextInput";
import { Grid } from "@mui/material";
import { useContext } from "react";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

import { Delete,Edit,Cancel,Check } from "src/components/Icons";
import { updateTaxes,addInventoryCategory,getAllSettings,editSettings,deleteSettings } from "src/api/api";
import { UserContext } from "src/context/userContext";
const Container=styled.div({
    width:"100%",
    borderRadius:5,
    boxShadow:"0 .1vw .2vw 0 rgb(120,120,120)"
})
const ContainerIconButton=styled.div({
    borderRadius:2,
    boxShadow:"0 .1vw 2px 0 rgb(100,100,100)"
})
const ConfigurationScreen=()=>{
    const {impuestos,setImpuestos,inventorySettings,setInventorySettings}=useContext(UserContext)
    const [values,setValues]=useState({
            id:impuestos.id,
            creditoFiscal:impuestos.creditoFiscal,
            debitoFiscal:impuestos.debitoFiscal
    })
    const [valuesInventory,setValueInventory]=useState({
        value:''
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
    const handleChangesInventory= (event)=>{
        setValueInventory({value:event.target.value})
        console.log({value:event.target.value})
    }
    const handleSumbmitInventory=()=>{
        addInventoryCategory(valuesInventory.value)
        .then(e=>{
            getAllSettings()
            .then(e=>{
                console.log(e.data)
                setInventorySettings(e.data)
            })
        })
        .catch(function(e){
            console.log(e)
        }) 
    }
    const [valueEdit,setValueEdit]=useState({
        index:null,
        id:null,
        category:''
    })
    const handleEdit=(item)=>{
        console.log(valueEdit)
        setValueEdit ({ 
        ...valueEdit,
        category:item.target.value
    })
   
    }
    const handleSubmiteEdit=()=>{
        editSettings(valueEdit)
        .then(e=>{
            setValueEdit({
                index:null,
                id:null,
                category:''
            })
            getAllSettings()
            .then(e=>{
                console.log(e.data)
                setInventorySettings(e.data)
            })
        })
        .catch(function(e){
            console.log(e)
        }) 
    }
    const handleDelete=()=>{
        deleteSettings(valueEdit)
        .then(e=>{
            getAllSettings()
            .then(e=>{
                console.log(e.data)
                setInventorySettings(e.data)
            })
        })
        .catch(function(e){
            console.log(e)
        }) 
    }
    return(
        <>
        <p>{valuesInventory.value}</p>
        <br/>
        <Grid container justifyContent={"center"}  alignItems={"center"}>
            <Grid item xs={8}>
        
                <Container>
                <br/> 
                <Grid container justifyContent={"center"}>
                    <Grid item xs={12}>
                    <p>Configuracion de impuestos</p>
                    </Grid>
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
        <br/>
        <Grid container justifyContent={"center"}  alignItems={"center"}>
            <Grid item xs={8}>
        
                <Container>
                <br/> 
                <Grid container justifyContent={"center"}>
                    <Grid item xs={12}>
                    <p>Configuracion de inventario</p>
                    </Grid>
                    <Grid item xs={12}> 
                    <TextInput
                    onChange={handleChangesInventory}
                    label="Nueva categoria"
                    value={valuesInventory.value}
                    />
                   
                    </Grid>
                    <Grid item xs={12}>
                    <Button
                        onClick={()=>handleSumbmitInventory()}
                        >
                            Añadir Categoria
                        </Button>
                    </Grid>
                    <Grid item xs={12}> 
                    <p>Categorias existentes</p>
                    </Grid>
                    <Grid item xs={10}>
                        <Grid container justifyContent={"flex-start"}spacing={4}>

                   
                    {inventorySettings?.map((i,index)=>{
                        return(
                            <>
                            <Grid item xs={4}>
                            <ContainerIconButton>
                                <Grid container alignItems={"center"}justifyContent="center">
                                    <Grid item xs={7}>
                                  { valueEdit.index===index? 
                                  <TextInput
                    onChange={handleEdit}
                    label="Nueva categoria"
                    value={valueEdit.category}
                    />: <p>{i.category}</p>}
                                    </Grid>
                                    <Grid item xs={2}>
                                        { valueEdit.index===index
                                        ?<IconButton
                                        onClick={()=>setValueEdit({
                                            index:null,
                                            id:null,
                                            category:''
                                        })}>
                                        <Cancel/>
                                        </IconButton>
                                        
                                        :<IconButton
                                        onClick={()=>[setValueEdit({
                                            index:null,
                                            id:i._id,
                                            category:i.category
                                        }),handleDelete()]}
                                        >
                                            <Delete/>
                                        </IconButton>
                                        }
                                    </Grid>
                                    <Grid item xs={2}>
                                       {valueEdit.index===index
                                       ?<IconButton
                                       onClick={()=>handleSubmiteEdit()}
                                       >
                                        <Check/>
                                        </IconButton> 
                                        :<IconButton
                                        onClick={()=>setValueEdit({
                                            index:index,
                                            id:i._id,
                                            category:i.category
                                        })}
                                        >
                                        <Edit/>
                                        </IconButton>}
                                    </Grid>
                                </Grid>
                            </ContainerIconButton>
                            </Grid>
                            
                            </>
                        )
                    })}
                    
                </Grid>
                </Grid>
                    </Grid>
       <br/><br/>
                </Container>
            </Grid>
        </Grid>
        <br/><br/>
        </>
    )
}
export default ConfigurationScreen