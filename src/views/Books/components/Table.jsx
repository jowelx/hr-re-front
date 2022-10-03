import React from 'react'
import styled from '@emotion/styled'
import { useEffect,useState } from 'react'
import { rows1, rows2, rows3 } from 'src/constants/Shop'
import { rowsSell1 ,rowsSell2,rowsSell3} from 'src/constants/Sell'
import { useContext } from 'react'
import { UserContext } from 'src/context/userContext'
const Table=styled.table({
    marginTop:30,
   
})
const ContainerRow=styled.div({


})
const Row = styled.td({
    margin:0,
    minWidth:"4vw",
    width:"auto",
    height:20,
    textAlign:"left",
    justifyContent:"flex-start",
    alignItems:"flex-start",
    border:"solid 1px rgb(150,150,150)",
    flexDirection:"row",
    display:"flex"
})

const Row1=styled(Row)({
    width:"50vw",
})
const SmallFont=styled(Row1)({
    fontSize:10
})
const Row1StrongLeft=styled(Row)({
    width:"auto",
    minWidth:"50vw",
    fontWeight:"bold",

})
const Row1StrongCenter=styled(Row)({
    width:"50vw",
    fontWeight:"bold",
    display:"flex",
    justifyContent:"center",
    textAlign:"center",
  
})
const Row2=styled(Row)({
    width:"10vw",
    display:"flex",
    justifyContent:"flex-end",
    textAlign:"flex-end"

})
const Column= styled.tr({
    
    flexDirection:"row",
    display:"flex",
    justifyItems:"flex-start",
    justifyContent:"flex-start",
    alignItems:"flex-start",
})
const TableComponent=({type,column,row,data})=>{
    const {impuestos}=useContext(UserContext)
    let dataRow=[]
    let dataColumn=[]
    let num=0
    const [amount1,setAmount1]=useState(0)
    const [rows,setRows]=useState([])
    const [columns,setColumn]=useState([])
    
    useEffect(()=>{
        for (var a =0;a<data?.length;a++){
            num+=parseFloat(data[a]?.value)
            a===data?.length-1&&setAmount1(num)
        }
        for(var r =0;r<row;r++){
            dataRow.push(r)
            dataRow.length===row&&setRows(dataRow)
        }
        for(var i =0;i<column;i++){
            dataColumn.push(i)
            dataColumn.length===column&&setColumn(dataColumn)
        }
    },[data])
    
    return(
        <> 
           { type==="shop"?<Table>
{rows.map((i,indexRow)=>{
    return(
     <Column>
        {columns.map((r,index)=>{
        return(
        <>
        {
         index===0?
         indexRow===1?< Row1StrongLeft>{rows1?.[indexRow]}</ Row1StrongLeft>:
         indexRow===3?< Row1StrongLeft>{rows1?.[indexRow]}</ Row1StrongLeft>:
         indexRow===4?< SmallFont>{rows1?.[indexRow]}</ SmallFont>:
         indexRow===24?< Row1StrongCenter>{rows1?.[indexRow]}</ Row1StrongCenter>:
         
         < Row1>{rows1?.[indexRow]}</ Row1>:
         
         
             index===1?<Row2> 
            {indexRow===3&&rows2}
              {indexRow>=6&&indexRow<23?indexRow===9&& data.length>0
            ?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(amount1) 
            :Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(0)
            :indexRow>24&&indexRow===28&&data.length>0
            ?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(amount1) 
            :indexRow>24&&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(0)}
         </Row2>:
              index===2?<Row2>
                {indexRow>=6&&indexRow<23&&indexRow===9&& data.length>0
                ?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format((amount1*impuestos.creditoFiscal)/100)
                :indexRow>=6&&indexRow<23&&indexRow===9&& data.length===0&&
                Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(0)
           
            }
             {indexRow===3&&rows3}
             {
             indexRow>=6&&
             indexRow<23&&
             indexRow!=18&&
             indexRow!=9&&
             indexRow!=19&&
             indexRow!=21
             ?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(0):
             indexRow>24&&
             indexRow!=28&&
             indexRow!=37&&
             indexRow!=38&&
             indexRow!=40&&
             Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(0)}
             {indexRow===18&&data.length>0?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(amount1+((amount1*impuestos.creditoFiscal)/100)):data.length===0&&indexRow===18&&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(0)}
             {indexRow===19&&data.length>0?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format((amount1*impuestos.creditoFiscal)/100):data.length===0&&indexRow===19&&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(0)}
             {indexRow===21&&data.length>0?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format((amount1*impuestos.creditoFiscal)/100):indexRow===21&&data.length===0&&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(0)}
             {indexRow===28&&data.length>0?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(parseInt((amount1*impuestos.creditoFiscal)/100)):indexRow===28&&data.length===0&&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(0)}
             {indexRow===37&&data.length>0?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(parseInt(amount1+((amount1*impuestos.creditoFiscal)/100))):indexRow===37&&data.length===0&&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(888)}
             {indexRow===38&&data.length>0?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(parseInt((amount1*impuestos.creditoFiscal)/100)):indexRow===38&&data.length===0&&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(0)}
             {indexRow===40&&data.length>0?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(parseInt((amount1*impuestos.creditoFiscal)/100)):indexRow===40&&data.length===0&&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(0)}
      
         </Row2>:<Row></Row>
         }
        </>
        )
        })}
        </Column>
    )
})}
     </Table>
     :
     <Table>
{rows.map((i,indexRow)=>{
    return(
     <Column>
        {columns.map((r,index)=>{
        return(
        <>
        {
         index===0?
         indexRow===1?< Row1StrongLeft>{rowsSell1?.[indexRow]}</ Row1StrongLeft>:
         indexRow===3?< Row1StrongLeft>{rowsSell1?.[indexRow]}</ Row1StrongLeft>:
         indexRow===4?< SmallFont>{rowsSell1?.[indexRow]}</ SmallFont>:
         indexRow===24?< Row1StrongCenter>{rowsSell1?.[indexRow]}</ Row1StrongCenter>:
         
         < Row1>{rowsSell1?.[indexRow]}</ Row1>:
         
         
             index===1?<Row2> 
            {indexRow===3&&rowsSell2}
            
            {indexRow===8&&data.length>0
            ?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(amount1)
            :indexRow===8&&data.length==0&&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(0)
        
        }
            {indexRow>=5&&indexRow<13&&indexRow!=8?
            
            Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(0)
            :indexRow>15&&indexRow!=19
            &&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(0)
            }
             {indexRow===19&&data.length>0
             ?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(amount1)
             :indexRow===19&&data.length==0&&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(0)
             
            }
         </Row2>:
              index===2?<Row2>
             {indexRow===3&&rowsSell3}
            
            {indexRow===8 &&data.length>0? Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format((amount1*impuestos.debitoFiscal)/100):indexRow===8 &&data.length===0&&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(0)}
            {indexRow===19&&data.length>0? Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format((amount1*impuestos.debitoFiscal)/100):indexRow===19&&data.length===0&&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(0)}
             {
             indexRow>=5&&
             indexRow!=8&&
            
             indexRow<13?Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 2}).format(0)
             :indexRow>15&& indexRow!=19
             &&Intl.NumberFormat('en-IN', {style: 'currency',currency: 'USD', minimumFractionDigits: 0}).format(0)

             }

       
         </Row2>:<Row></Row>
         }
        </>
        )
        })}
        </Column>
    )
})}
     </Table>}
        </>
    )
}
export default TableComponent