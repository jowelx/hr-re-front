import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const Container=styled.div({
    background:"linear-gradient(120deg, rgba(255,255,255,1) 0%, rgba(205,205,205,1) 100%);",
    borderRadius:"50%",
    display:"flex",
    width:"65%",
    padding:5,
    height:"auto",
    justifyContent:"center",
    alignItems:"center",
    boxShadow:"0 1px 2px 0 rgb(20,20,20"
})
const ContainerMony=styled.div({
    padding:10,
    borderRadius:10,
    marginRight:20,
    marginLeft:20
})
export const Delete =()=>{
    return(
    <>
    <Container>
    <DeleteIcon/>
    </Container>
    </>
    )
}
export const Edit =()=>{
    return(
        <>
    <Container>
    <EditIcon/>
    </Container>
        </>
    )
}
export const Check=()=>{
    return(
        <>
         <Container>
    <CheckIcon/>
    </Container>
        </>
    )
}
export const Cancel=()=>{
    return(
        <>
         <Container>
    <CloseIcon/>
    </Container>
        </>
    )
}
export const ArrowUp=()=>{
    return(
        <ArrowDropUpIcon style={{color:"green",fontSize:60}}/>
        )
}
export const ArrowDown=()=>{
   return(
    <ArrowDropDownIcon style={{color:"red",fontSize:60}}/>
    )
}
export const Mony=({color})=>{
    return(
        <ContainerMony style={{backgroundColor:color==='red'?"rgb(255,200,200)":'rgb(200,255,200)'}}>
                
        <AttachMoneyIcon style={{color:color,fontSize:40}}/>
        </ContainerMony>
    )
}