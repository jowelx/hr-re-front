import axios from "axios";
const url='https://proyecto4-back.herokuapp.com'
const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  };
export const addBill=(newBill)=>axios.post(url+"/api/bill/addBill",{
    newBill
})
export const getAllBill=async()=> await axios.get(url+"/api/bill/allBill")


export const getTaxes=()=>axios.get(url+"/api/bill/getTaxes",
)
export const updateTaxes=async(id)=>await axios.post(url+'/api/bill/updateTaxes',{
    id
})