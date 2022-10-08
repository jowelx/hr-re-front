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
import dayjs from 'dayjs'
import { Line } from 'react-chartjs-2'
import { getAllBill } from 'src/api/api'
import moment from 'moment'
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
    const [dataE,setDataE]=useState([])
    const [dataI,setDataI]=useState([])
    const [value, setValue] = React.useState(dayjs(moment().format()));
    useEffect(()=>{
        getAllBill().then(e=>setDataI(e.data.filter(e=>e.type==='Ingreso')))
    },[])
    useEffect(()=>{
        getAllBill().then(e=>setDataE(e.data.filter(e=>e.type==='Egreso')))
    },[])
    useEffect(()=>{

           if(dataE.length>0){ 
            for(var i=1; i<=12;i++){
                if(dataE?.filter(e=>moment(e.date).format("MM")==i).length>0){
                    dataE?.filter(e=>moment(e.date).format("MM")==i).map((item,index)=>{
                        console.log(dataE?.filter(e=>moment(e.date).format("MM")==i))
                        dataRelativeE=parseInt(item.value)
                        console.log(dataRelativeE)
                        index==dataE?.filter(e=>moment(e.date).format("MM")==i).length-1&&DataContableE.push(dataRelativeE)
                        console.log(DataContableE)
                    })
                }else{
                    DataContableE.push(0)
                }
              
            }}
           if(dataI.length>0){ 
                for(var i=1; i<=12;i++){
                    if(dataI?.filter(e=>moment(e.date).format("MM")==i).length>0){
                        dataI?.filter(e=>moment(e.date).format("MM")==i).map((item,index)=>{
                            console.log(dataI?.filter(e=>moment(e.date).format("MM")==i))
                            dataRelativeI=parseInt(item.value)
                            console.log(dataRelativeI)
                            index==dataI?.filter(e=>moment(e.date).format("MM")==i).length-1&&DataContableI.push(dataRelativeI)
                            console.log(DataContableI)
                        })
                    }else{
                        DataContableI.push(0)
                    }
                  
                }}
    },[dataE,dataI])
    const dataFinalIngresos=useMemo( function(){
        return{
        datasets:[
            {
                label:'Ingresos',
                data:DataContableI,
                tension:0.3,
                borderColor:"rgb(150,250,170)",
                pointBackgroundColor:'rgb(10,250,100)',
                backgroundColor:'rgba(100,250,100,.2)',
                borderCapStyle:"round"
            },
        ],
        labels
        }
    },[dataI])
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
    },[dataE])
    return(
    <>
    {dataE.length>0&&<Grid container justifyContent={"space-around"}>
        <Grid item xs={5}>
        <Line data={dataFinalIngresos} options={options}/>
        </Grid>
        <Grid item xs={5}>
        <Line data={dataFinalGasto} options={options}/>
        </Grid>
    </Grid>}

    </>
 )
}
export default Estadistics