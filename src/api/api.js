import axios from "axios";
const url='http://localhost:4000'
export const addBill=(newBill)=>axios.post(url+"/api/bill/addBill",{
    newBill
})
export const getAllBill=()=>axios.get(url+"/api/bill/allBill",{
})