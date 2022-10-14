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
    width:"30%",
    position:"fixed",
    padding:10,
    boxShadow:"0 2px 4px 0 rgb(100,100,100)",
    borderRadius:"0px 0px 40px 40px"
 
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
                borderColor:"rgb(250,200,100)",
                pointBackgroundColor:'rgb(250,220,20)',
                backgroundColor:'rgba(200,200,50,.2)',
                borderCapStyle:"round"
            },
        ],
        labels
        }
    },[dataA,dataT,value])
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

        <Grid iten xs={5}>
            <div 
            style={{position:"relative",display:"flex",justifyContent:"center",width:"100%"}}>
            <ContainerHeader>
            <p
            style={{margin:0}}
            >Seleccione una fecha para visulizar Estadisticas</p>
           
           
       
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
      </ContainerHeader>
            </div>
            
        </Grid>
    </Grid>
  <br/> <br/> <br/> <br/> <br/> <br/>
   {dataA.length>0&&<Grid container justifyContent={"center"} spacing={2}>
        <Grid item xs={5}>
            <Card>
                
        <Line data={dataFinalIngresos} options={options}/>
            </Card>

        </Grid>

        <Grid item xs={5}>
            <Card>
                
        <Line data={dataFinalGasto} options={options}/>
            </Card>
        </Grid>
        <Grid item xs={5}>
            <Card>
                
        <Line data={dataFinalMensual} options={options1}/>
            </Card>
           
        </Grid>
        <Grid item xs={5}>
            <Card>
                
        <Line data={dataFinalTotal} options={options1}/>
            </Card>
        </Grid>
    </Grid>}

</Container>

    </>
 )
}
export default Estadistics