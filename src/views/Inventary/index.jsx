import React from 'react'
import Sumary from './Sumary'
import AddInventory from './addnventory'
const Inventory=({screen})=>{
    return(
        <>
        {screen ===1&&<Sumary/>}
        {screen ===2&&<AddInventory/>}
        </>
    )
}
export default Inventory