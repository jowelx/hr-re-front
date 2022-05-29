import styled from "@emotion/styled"
import { COLOR_DARK_THIRD,COLOR_DARK_SECOND, COLOR_LIGHT_SECOND } from "src/constants/consts"
import { UserContext } from "../../../context/userContext"
import { useContext } from "react"
import { List } from "@mui/material"

  
const Container =styled.div(({darkmode})=>({
    marginTop:"5px",
    backgroundColor:darkmode===true?COLOR_DARK_THIRD:COLOR_LIGHT_SECOND,
    width:"90%",
    height: "150px",
    borderRadius:"5px",
    boxShadow:"-1px 1px 2px .1px rgba(20,20,20,.5)",
    padding:"5px"
}))
const Lotery=[
   "Loteria 1",
   "Loteria 2",
   "Loteria 3",
   "Loteria 4",
   "Loteria 5",
   "Loteria 6",
   "Loteria 4",
   "Loteria 5",
   "Loteria 6",
]
const Tittle = styled.p(({darkMode})=>({
    display:"flex",
    alignItems:"flex-start",
    color:darkMode===false ?COLOR_DARK_SECOND:"white"
}))
const ListLotery =()=>{
    const {darkMode}=useContext(UserContext)
    return(
        <>
        <Container darkmode={darkMode}>
        <List
      sx={{
        width: '100%',
        maxWidth: 360,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 140,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}
    >
      {Lotery.map((item,sectionId) => (
        <li 
        style={{
            display:"flex",
            alignItems:"flex-start $",
            paddingLeft:"15px",
            borderBottom:`solid 1px ${darkMode===true?"rgb(100,100,100)":"rgb(200,200,200)"}`
        }}
        key={`section-${sectionId}`}>
          <ul>
           <Tittle
            darkMode={darkMode}
           >
               {item}
           </Tittle>
           
          </ul>
        </li>
      ))}
    </List>
        </Container>
        </>
    )
}
export default ListLotery