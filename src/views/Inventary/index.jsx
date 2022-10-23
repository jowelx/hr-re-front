import React from 'react'
import Sumary from './Sumary'
import AddInventory from './addnventory'
import NewWork from './NewWork'
const Inventory=({screen})=>{
    return(
        <>
        {screen ===1&&<Sumary/>}
        {screen ===2&&<AddInventory/>}
        {screen ===3&&<NewWork/>}
        </>
    )
}
export default Inventory