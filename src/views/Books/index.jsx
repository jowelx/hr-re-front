import React from 'react'
import PurchaseBook from './PurchaseBook'
import SellBook from './SellBook'
const BooksScreen=({screen})=>{
    return(
        <>
    {screen===1&&<PurchaseBook/>}
    {screen===2&&<SellBook/>}
        </>
    )
}

export default BooksScreen