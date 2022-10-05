import React from 'react'
import PurchaseBook from './PurchaseBook'
import SellBook from './SellBook'
import Report from './Report'

const BooksScreen=({screen})=>{
    return(
        <>
   
    {screen===1&&<PurchaseBook/>}
    {screen===2&&<SellBook/>}
    {screen===3&& <Report/>}
        </>
    )
}

export default BooksScreen