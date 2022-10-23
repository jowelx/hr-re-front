import React, { useEffect } from 'react'
import styled from '@emotion/styled'
import { useState } from 'react'
import TextInput from 'src/components/UI/TextInput'
import { Button } from '@mui/material'
import{ Grid }from '@mui/material'
import { useContext } from 'react'
import { getInventory } from 'src/api/api'
import { UserContext } from 'src/context/userContext'
import SendIcon from '@mui/icons-material/Send';
import { Delete } from 'src/components/Icons'
import {IconButton} from '@mui/material'
import { addWork } from 'src/api/api'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
const Wrapper =styled.div({
    display:"flex",
    flexDirection:"row",
    width:"100%",
    borderRadius:5,
    border:"solid 1px rgb(200,200,200)",
    //boxShadow:"0 .1vw 0 0 rgb(100,100,100)",
  
   
})
const Card=styled.div({
    borderRadius:5,
    border:"solid 1px rgb(200,200,200)",
    boxShadow:"0 .1vw 0 0 rgb(10,10,10)",
    marginBottom:20,
  
})
const ContainerCard=styled.div({
    height:"30vh",
    overflow:"auto",
    width:"100%",
    padding:"2vw 0"
})
const ContainerInventory=styled.div({
    height:"70vh",
    overflow:"auto",
    borderRadius:5,
    border:"solid 1px rgb(200,200,200)",
    //boxShadow:"0 .1vw 0 0 rgb(100,100,100)",
})
const Search=styled.div({
    backgroundColor:"rgb(240,240,240,.9)",
    borderRadius:2,
    paddingLeft:5

})
const NewWork =()=>{
    const {inventory,setInventory,setLoadding,setMessage,setError}=useContext(UserContext)
    const [values,setValue]=useState({
        costo: 0,
        serial:0,
        nameWork:''
    })
    const [valuesList,setValueList]=useState({
        value:'',
        amount:0,
        name:''
    })
    const [list,setList]=useState([])
    const handleChange = (prop) => (event)=>{
        setValue({ 
            ...values,
            [prop]:event.target.value
        })
    }
    const handleChangeList= (prop) => (event)=>{
        setValueList({ 
            ...valuesList,
            [prop]:event.target.value
        })
    }
    const handleAddInventory=()=>{
        if(valuesList.amount==null||valuesList.amount==0){
            setMessage('Debe añadir la cantidad usada para este producto')
        }
        else{
        setList([...list,valuesList])
        }
    }
    const handleClickButton=(index)=>{
        setList(list.filter((e,i)=>i!=index))
    }
    const handleSendWork=()=>{
        if(list.length<1){
            setMessage('Debes añadir items a la lista')
        }
        else if(values.costo===0||values.serial===0||values.nameWork===''){
            setMessage('Completar todos los datos')
        }
        else { addWork(list,values)
        .then(e=>{
                console.log(e.data)
                setLoadding(true)
                setTimeout(function(){
                    setLoadding(false)
                   },10000);
              
                if(e.status===200){
                    setTimeout(function(){
                     setLoadding(false)
                    },2000);
                }else{
                    setLoadding(false)
                    setError(e.status)
                }
        })
        .catch(function(e){
            console.log(e)
        })}
    }
    useEffect(()=>{
        getInventory()
        .then((e)=>{
            setInventory(e.data)
        })
        .catch(function(e){
            console.log(e)
        })
       },[])
       const [buscador,setBuscador]=useState('')
       const handleSearch=(e)=>{
        setBuscador(e.target.value)
       }
       const [itemSelected,setItemSelecte]=useState()
    return(
        <>
        {inventory?.length>0&&
            <>
        <br/>  
        <br/>
                <Grid container justifyContent={"center"} alignItems={"flex-start"} spacing={5}>
                    <Grid item xs={3}>
                        <Grid container justifyContent={"space-around"}alignItems={"center"}>
                        <Grid item xs={3}>
                            <p
                            style={{textAlign:"left",fontSize:20,margin:0}}
                            >Inventario</p>
                          </Grid>
                          <Grid item xs={6}>
                        <Search>
                            <Grid container alignItems={"center"} justifyContent={"center"} >
                                <Grid item xs={9}>
                                <InputBase
                                value={buscador}
                                onChange={handleSearch}
                                placeholder='Buscar'
                                />
                                </Grid>
                                <Grid item xs={3}>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </Grid>
                            </Grid>
                        </Search>
                          </Grid>
                        </Grid>
                    <ContainerInventory>
                    <Grid container justifyContent={"flex-start"}alignItems={"flex-start"}>
                    {inventory.map((i,index)=>{
                        return(
                            <>
                        {  i.name.toLowerCase().includes(buscador)&&  <Grid item xs={12}>    
                               <FormControlLabel
                               style={{
                                paddingLeft:10,
                                display:"flex",
                                justifyContent:"flex-start",
                                alignItems:"center"
                               }}
                               control={<Checkbox
                               checked={itemSelected===i.id?true:false}
                                onClick={()=>[setItemSelecte(i.id), setValueList({ 
                                    ...valuesList,
                                    value:i._id,
                                    name:i.name
                                })]} />} label={i.name} />
                            </Grid>}
                            </>
                        )
                    })}
                     </Grid>
            </ContainerInventory>
                    </Grid>
                    <Grid  item xs={8}>
                    <Wrapper>
            <Grid container justifyContent={"center"} alignItems="center" spacing={2}>
       
                <Grid item xs={4}>
                <br/>
                <TextInput
                    onChange={handleChangeList('amount')}
                    label="Cantidad usada"
                    value={values.amount}
                    />
                </Grid>
                
                <Grid item xs={4}>
                <Button
                variant="contained"
                endIcon={<AddIcon />}
                onClick={()=>handleAddInventory()}
                >
                Añadir a la lista
                </Button>
                </Grid>
                <Grid item xs={12}>
                <ContainerCard>
                    <Grid container justifyContent={"center"} alignItems="center" spacing={2}>
                    {list.map((i,index)=>{
        return(
            <Grid item xs={5}>

                <Card>
                    <Grid container justifyContent={"center"} alignItems="center">
                        <Grid item xs={10}>
                        <p>Id:{i.value}</p>
                        {inventory.filter(e=>e._id==i.value).map(i=>{
                            return(<p>Nombre:{i.name}</p>)
                        })}
                        <p>Cantidad:{i.amount}</p>
                        </Grid>
                        <Grid item xs={2}>
                            < IconButton onClick={()=>handleClickButton(index)}>
                            <Delete/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
       )})}
                    </Grid>
                    </ContainerCard>
                    <br/>
         <Grid container>
         <Grid item xs={4}>
           
            <TextInput
                    onChange={handleChange('nameWork')}
                    label="Nombre del contrato"
                    value={values.nameWork}
                    />
                </Grid>
         <Grid item xs={4}>
                <TextInput
                    onChange={handleChange('serial')}
                    label="Numero de la factura"
                    value={values.serial}
                />
                </Grid>
             <Grid item xs={4}>
                <TextInput
                    onChange={handleChange('costo')}
                    label="Monto de factura"
                    value={values.costo}
                    />
                </Grid>
                <Grid item xs={12}>
                <Button
                variant="contained"
                endIcon={<SendIcon />}
                onClick={()=>handleSendWork()}
                >
        Registrar nuevo trabajo
        </Button>
                </Grid>
         </Grid>
                </Grid>
            </Grid>
            <br/> <br/>

            </Wrapper>
            </Grid>
            </Grid>
        </>
        }
        </>

    )
}
export default NewWork