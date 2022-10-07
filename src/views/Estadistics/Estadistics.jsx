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
import { Grid } from '@mui/material'
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
        responsive:true,
        scales:{
            y:{
                min:0
            }
        }
    }
    let DataContable=[]
    const labels=['Enero','Febrero','marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    const dataFinal=useMemo(function(){
        return{
            datasets:[
                {
                    label:'mis datos',
                    data:DataContable,
                    tension:0.3
                },
            ],
            labels
        }
    },[])
    const [data,setData]=useState([])
    const [value, setValue] = React.useState(dayjs(moment().format()));
    useEffect(()=>{
        getAllBill().then(e=>setData(e.data.filter(e=>e.type==='Egreso')))
    },[])
    useEffect(()=>{
           if(data.length>0){ 
            for(var i=0; i<=12;i++){
                let dataRelative=0
                
                data?.filter(e=>moment(e.date).format("MM")==i).map((item,index)=>{
                    console.log(parseInt(item.value))
                    dataRelative+=parseInt(item.value)
                    console.log(DataContable)

                    index===data.length-1&&DataContable.push(dataRelative)
                })
            }}
    },[data])
    return(
    <>
    {DataContable&&<Grid container justifyContent={"space-around"}>
        <Grid item xs={4}>
        <Line data={dataFinal} options={options}/>
        </Grid>
        <Grid item xs={4}>
        <Line data={dataFinal} options={options}/>
        </Grid>
    </Grid>}

    </>
 )
}
export default Estadistics