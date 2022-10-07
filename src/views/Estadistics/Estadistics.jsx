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
    const DataContable=[]
    let dataRelative=0
    const [data,setData]=useState([])
    const [value, setValue] = React.useState(dayjs(moment().format()));
    const handleReload=()=>{
        getAllBill().then(e=>setData(e.data.filter(e=>e.type==='Egreso')))
        console.log("ok")
    }
    useEffect(()=>{
        getAllBill().then(e=>setData(e.data.filter(e=>e.type==='Egreso')))
    },[])
    useEffect(()=>{

           if(data.length>0){ 
            for(var i=1; i<=12;i++){
                if(data?.filter(e=>moment(e.date).format("MM")==i).length>0){
                    data?.filter(e=>moment(e.date).format("MM")==i).map((item,index)=>{
                        console.log(data?.filter(e=>moment(e.date).format("MM")==i))
                        dataRelative=parseInt(item.value)
                        console.log(dataRelative)
                        index==data?.filter(e=>moment(e.date).format("MM")==i).length-1&&DataContable.push(dataRelative)
                        console.log(DataContable)
                    })
                }else{
                    DataContable.push(0)
                }
              
            }}
    },[data])
    const dataFinalIngresos=useMemo( function(){
        return{
        datasets:[
            {
                label:'Ingresos',
                data:DataContable,
                tension:0.3,
                borderColor:"rgb(150,250,170)",
                pointBackgroundColor:'rgb(10,250,100)',
                backgroundColor:'rgba(100,250,100,.2)',
                borderCapStyle:"round"
            },
        ],
        labels
        }
    },[data])
    const dataFinalGasto=useMemo( function(){
        return{
        datasets:[
            {
                label:'Gasto',
                data:DataContable,
                tension:0.3,
                borderColor:"rgb(250,150,150)",
                pointBackgroundColor:'rgb(250,20,10)',
                backgroundColor:'rgba(250,20,10,.2)',
                borderCapStyle:"round"
            },
        ],
        labels
        }
    },[data])
    return(
    <>
    {data.length>0&&<Grid container justifyContent={"space-around"}>
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