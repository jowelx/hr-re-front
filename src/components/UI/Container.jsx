import styled from "@emotion/styled"
import { UserContext } from "src/context/userContext"
import { useContext } from "react"
import { COLOR_LIGHT_FIRST,COLOR_DARK_FIRST } from "src/constants/consts"


const ContainerDark =styled.div(({darkmode})=>({
    backgroundColor:darkmode===true?COLOR_DARK_FIRST:COLOR_LIGHT_FIRST,
}))

const Container = (props) => {
    const {darkMode}=useContext(UserContext)
    return(
        <ContainerDark
        darkmode={darkMode}
        >

            {props.children}
        </ContainerDark>
    )
}

export default Container