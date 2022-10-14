import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styled from "@emotion/styled";
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
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
