import React, { useEffect,useState } from 'react'
import { useMemo } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js'
import { ArrowDown,ArrowUp,Mony } from 'src/components/Icons';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs'
import { Line } from 'react-chartjs-2'
import { getAllBill } from 'src/api/api'
import moment from 'moment'
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import styled from '@emotion/styled';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Button, Grid } from '@mui/material'
ChartJS.register({
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
})
const Card = styled.div({
    backgroundColor:"rgb(250,250,250,.9)",
    padding:"5%",
    borderRadius:5,
    boxShadow:"0 1px 2px 0 rgb(100,100,100)"
})
const Container =styled.div({
    backgroundColor:"rgba(200,200,205,.6)",
    width:"100%",
    height:"94vh",
    overflow:"auto",
    
})
const ContainerHeader=styled.div({
    backgroundColor:"rgba(255,255,255,1)",
    width:"100%",
    position:"fixed",
    padding:10,
    boxShadow:"0 2px 4px 0 rgb(100,100,100)",
   
 
})
const Estadistics = ()=>{
    const options={
        fill:true,
        responsive:true,
        scales:{
            y:{
                min:0
            }
        }
    }
    const options1={
        fill:true,
        responsive:true,
        scales:{
            y:{
                min:-10000
            }
        }
    }
    const labels=[
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre'
]
    const DataContableE=[]
    let dataRelativeE=0
    const DataContableI=[]
    let dataRelativeI=0
    const DataContableT=[]
    let dataRelativeT=0
    const DataContableA=[]
    let dataRelativeA=0
    const [dataE,setDataE]=useState([])
    const [dataI,setDataI]=useState([])
    const [dataT,setDataT]=useState([])
    const [dataA,setDataA]=useState([])
    const [dataG,setDataG]=useState([])
    const [load,setLoad]=useState(false)
    const [balance,setBalance]=useState(0)
    let TotalI=0
    let TotalE=0
    let relativeAmount=0
    const [value,setValue] = React.useState(dayjs(moment().format()));
   // const [value, setValue] = React.useState(dayjs(moment().format()));
    useEffect(()=>{
        getAllBill().then(e=>{
            setDataT(e.data.filter(e=>moment(e.date).format("YYYY")===moment(value.$d).format("YYYY")))
            setDataA(e.data.filter(e=>moment(e.date).format("YYYY")===moment(value.$d).format("YYYY")))
            setDataE(e.data.filter(e=>e.type==='Egreso'&&moment(e.date).format("YYYY")===moment(value.$d).format("YYYY")))
            setDataI(e.data.filter(e=>e.type==='Ingreso'&&moment(e.date).format("YYYY")===moment(value.$d).format("YYYY")))
            setDataG([])
           
        }
            )
    },[value])
    useEffect(()=>{
      
          
                for(let i=1; i<=12;i++){
                    dataRelativeE=0
                    if(dataE?.filter(e=>moment(e.date).format("MM")==i).length>0){
                        dataE?.filter(e=>moment(e.date).format("MM")==i).map((item,index)=>{
                            dataRelativeE+=parseInt(item.value)
                            index==dataE?.filter(e=>moment(e.date).format("MM")==i).length-1&&DataContableE.push(dataRelativeE)
                            console.log(DataContableE)
                        })
                    }else{
                        DataContableE.push(0)
                    }
                  
                }
                    for(let i=1; i<=12;i++){
                        dataRelativeI=0
                        if(dataI?.filter(e=>moment(e.date).format("MM")==i).length>0){
                            dataI?.filter(e=>moment(e.date).format("MM")==i).map((item,index)=>{
                                dataRelativeI+=parseInt(item.value)
                                index==dataI?.filter(e=>moment(e.date).format("MM")==i).length-1&&DataContableI.push(dataRelativeI)
    
                            })
                        }else{
                            DataContableI.push(0)
                        }
                      
                }
                    for(let i=1; i<=12;i++){
                        dataRelativeT=0
                        
                        if(dataT?.filter(e=>moment(e.date).format("MM")==i).length>0){
                            dataT?.filter(e=>moment(e.date).format("MM")==i).map((item,index)=>{
                                if(item.type=="Ingreso"){
                                    dataRelativeT+=parseInt(item.value)
                                }
                                if(item.type=="Egreso"){
                                    dataRelativeT-=parseInt(item.value)
                                }
                                console.log(dataRelativeT)
                                    index==dataT?.filter(e=>moment(e.date).format("MM")==i).length-1&&DataContableT.push(dataRelativeT)
                                    setLoad(true)
                            })
                        }else{
                            DataContableT.push(0)
                        }
                      
                }
                dataRelativeA=0
                for(let i=1; i<=12;i++){
                    
                    
                    if(dataA?.filter(e=>moment(e.date).format("MM")==i).length>0){
                        dataA?.filter(e=>moment(e.date).format("MM")==i).map((item,index)=>{
                            if(item.type=="Ingreso"){
                                dataRelativeA+=parseInt(item.value)
                            }
                            if(item.type=="Egreso"){
                                dataRelativeA-=parseInt(item.value)
                            }
                            console.log(dataRelativeA)
                                index==dataA?.filter(e=>moment(e.date).format("MM")==i).length-1&&DataContableA.push(dataRelativeA)
                                setLoad(true)
                        })
                    }else{
                        DataContableA.push(dataRelativeA)
                    }
                
            }
    },[dataE,dataI,dataT,dataA,value,load])
    useEffect(()=>{
        dataA.map((item,index)=>{
            if(item.type=="Ingreso"){
               relativeAmount+=parseInt(item.value)
           }
           if(item.type=="Egreso"){
               relativeAmount-=parseInt(item.value)
           }
          index===dataA.length-1&&  setBalance(relativeAmount)
        })
    },[balance,dataA])
    const dataFinalIngresos=useMemo( function(){
        return{
        datasets:[
            {
                label:'Ingresos',
                data:DataContableI,
                tension:0.3,
                borderColor:"rgb(150,240,150)",
                pointBackgroundColor:'rgb(10,250,100)',
                backgroundColor:'rgba(100,250,100,.2)',
                borderCapStyle:"round"
            },
        ],
        labels
        }
    },[dataI,value])
    const dataFinalGasto=useMemo( function(){
        return{
        datasets:[
            {
                label:'Gasto',
                data:DataContableE,
                tension:0.3,
                borderColor:"rgb(250,150,150)",
                pointBackgroundColor:'rgb(250,20,10)',
                backgroundColor:'rgba(250,20,10,.2)',
                borderCapStyle:"round"
            },
        ],
        labels
        }
    },[dataE,value])
    const dataFinalMensual=useMemo(function(){
        return{
        datasets:[
            {
                label:'Balance Acumulado',
                data: DataContableA,
                tension:0.3,
                borderColor:balance<0?"rgb(250,100,100)":"rgb(100,220,100)",
                pointBackgroundColor:balance<0?"rgb(250,50,50)":"rgb(100,250,100)",
                backgroundColor:balance<0?"rgba(250,50,50,0.5)":"rgba(100,250,100,.5)",
                borderCapStyle:"round"
            },
        ],
        labels
        }
    },[dataA,dataT,value,balance])
    const dataFinalTotal=useMemo( function(){
        return{
        datasets:[
            {
                label:'Balance Mensual',
                data:DataContableT,
                tension:0.3,
                borderColor:"rgb(150,200,250)",
                pointBackgroundColor:'rgb(100,220,250)',
                backgroundColor:'rgba(100,200,250,.2)',
                borderCapStyle:"round"
            },
        ],
        labels
        }
    },[dataT,value])
    return(
    <>
<Container>
<Grid container justifyContent={"center"} alignContent="center"alignItems={"center"}>
        
        <Grid iten xs={12}>
            <div 
            style={{position:"relative",display:"flex",justifyContent:"center",width:"100%"}}>
            <ContainerHeader>
                <Grid container>
                    <Grid item xs={6}>
                    <p style={{fontSize:30,margin:0}}>
                        Estadisticas
                    </p>
                    </Grid>
                    <Grid item xs={6}>
                    <p
            style={{margin:0}}
            >Seleccione una fecha </p>
           
           
       
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
      </ContainerHeader>
            </div>
            
        </Grid>
    </Grid>
  <br/> <br/> <br/> <br/> <br/>
   {dataA.length>0&&<Grid container justifyContent={"center"} spacing={2}>
   <Grid item xs={6}>
            <Card>
                {dataA.map((item,index)=>{
                     if(item.type=="Ingreso"){
                        relativeAmount+=parseInt(item.value)
                    }
                    if(item.type=="Egreso"){
                        relativeAmount-=parseInt(item.value)
                    }
                    return(
                        <>
                        {index===dataA.length-1&&
                            <>
                            <Grid container justifyContent={"flex-start"}alignItems={"center"}spacing={2}>
                                <Grid item xs={12}>
                                     <u style={{
                                    fontSize:40,
                                    margin:0,
                                    color:"rgb(100,100,100)",
                                    marginTop:-2}}>Balance acumulado </u>
                                </Grid>
                                <Grid item xs={2}>
                                    <div
                                    style={{display:"flex",flexDirection:"row",alignItems:"center"}}
                                    >
                                     {relativeAmount<0? <Mony color={"red"}/>:<Mony color={"green"}/>}
                                    <u style={{
                                    fontSize:60,
                                    margin:0,
                                    marginTop:-2,
                                    color:relativeAmount<0?"rgb(200,150,150)":"rgb(150,200,150)",
                                    }}>{ Intl.NumberFormat('es-ES').format(parseInt(relativeAmount))}</u>
                                       {relativeAmount<0? <ArrowDown/>:<ArrowUp/>}
                                 
                                    </div>
                               
                                </Grid>
                             
                            </Grid>
                            </>
                        }
                        </>
                    )
                })}
        <Line data={dataFinalMensual} options={options1}/>
            </Card>
    </Grid>
    <Grid item xs={5}>
            <div style={{height:"76vh",overflow:"auto"}}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <Card>
               { dataI.map((i,index)=>{
                TotalI+=parseInt(i.value)
                return(
                    <>
                    {index===dataI.length-1&&
                    
                    <>
                    <Grid container justifyContent={"flex-start"}alignItems={"center"}spacing={2}>
                        <Grid item xs={12}>
                             <u style={{
                            textAlign:"left",
                            fontSize:30,
                            margin:0,
                            color:"rgb(100,100,100)",
                            marginTop:-2}}>Ingresos</u>
                        </Grid>
                        <Grid item xs={4}>
                            <p style={{
                            fontSize:20,
                            margin:0,
                            color:"rgb(100,100,100)"}}>Ingresos Totales:</p>
                        </Grid>
                        <Grid item xs={8}>
                            <div
                            style={{display:"flex",flexDirection:"row",alignItems:"center"}}
                            >
                               {TotalI<0?<ArrowDown/>:<ArrowUp/>}
                        
                         
                            <u style={{
                            fontSize:35,
                            margin:0,
                            marginTop:-2,
                            color:TotalI<0?"rgb(200,150,150)":"rgb(150,200,150)",
                            }}>{Intl.NumberFormat('es-ES').format(parseInt(TotalI))}</u>
                           
                       
                            
                                 {TotalI<0? <Mony color={"red"}/>:<Mony color={"green"}/>}
                               
                         
                            </div>
                       
                        </Grid>
                     
                    </Grid>
                    </>
                    
                    }
                    </>
                )
               })} 
        <Line data={dataFinalIngresos} options={options}/>
            </Card>

        </Grid>
        <Grid item xs={12}>
            <Card>
            { dataE.map((i,index)=>{
                TotalE-=parseInt(i.value)
                return(
                    <>
                    {index===dataE.length-1&&
                    
                    <>
                    <Grid container justifyContent={"flex-start"}alignItems={"center"}spacing={2}>
                        <Grid item xs={12}>
                             <u style={{
                            textAlign:"left",
                            fontSize:30,
                            margin:0,
                            color:"rgb(100,100,100)",
                            marginTop:-2}}>Gastos</u>
                        </Grid>
                        <Grid item xs={4}>
                            <p style={{
                            fontSize:16,
                            margin:0,
                            color:"rgb(100,100,100)"}}>Gastos Totales:</p>
                        </Grid>
                        <Grid item xs={8}>
                            <div
                            style={{display:"flex",flexDirection:"row",alignItems:"center"}}
                            >
                               {TotalE<0?<ArrowDown/>:<ArrowUp/>}
                          <Grid>
                            <Grid item xs={12}>
                            <u style={{
                            fontSize:30,
                            margin:0,
                            marginTop:-2,
                            color:TotalE<0?"rgb(200,150,150)":"rgb(150,200,150)",
                            }}>{Intl.NumberFormat('es-ES').format(parseInt(TotalE))}</u>
                            </Grid>
                          </Grid>
                            
                                 {TotalE<0? <Mony color={"red"}/>:<Mony color={"green"}/>}
                               
                         
                            </div>
                       
                        </Grid>
                     
                    </Grid>
                    </>
                    
                    }
                    </>
                )
               })} 
        <Line data={dataFinalGasto} options={options}/>
            </Card>
        </Grid>
        <Grid item xs={12}>
            <Card>
            { dataA.map((i,index)=>{
            
                return(
                    <>
                    {index===dataA.length-1&&
                    <>
                    <Grid container justifyContent={"flex-start"}alignItems={"center"}spacing={2}>
                        <Grid item xs={12}>
                             <u style={{
                            textAlign:"left",
                            fontSize:30,
                            margin:0,
                            color:"rgb(100,100,100)",
                            marginTop:-2}}>Balance mensual</u>
                        </Grid>
                        <Grid item xs={4}>
                            <p style={{
                            fontSize:16,
                            margin:0,
                            color:"rgb(100,100,100)"}}>Promedio mensual:</p>
                        </Grid>
                        <Grid item xs={7}>
                            <div
                            style={{display:"flex",flexDirection:"row",alignItems:"center"}}
                            >
                               {relativeAmount<0?<ArrowDown/>:<ArrowUp/>}
                           
                            <u style={{
                            fontSize:25,
                            margin:0,
                            marginTop:-2,
                            color:relativeAmount<0?"rgb(200,150,150)":"rgb(150,200,150)",
                            }}>{Intl.NumberFormat('es-ES').format(parseInt(relativeAmount/12))}</u>
                            {relativeAmount<0? <Mony color={"red"}/>:<Mony color={"green"}/>}
                              
                            </div>
                        </Grid>
                    </Grid>
                    </>
                    }
                    </>
                )
               })} 
        <Line data={dataFinalTotal} options={options1}/>
            </Card>
        </Grid>
                    </Grid>
            </div>
                  
    </Grid>
       
    </Grid>}

</Container>

    </>
 )
}
export default Estadistics