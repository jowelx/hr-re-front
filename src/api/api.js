import axios from "axios";
const url='http://localhost:4000'
const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  };
export const addBill=(newBill)=>axios.post(url+"/api/bill/addBill",{
    newBill
})
export const getAllBill=async()=> await axios.get(url+"/api/bill/allBill")
export const getTaxes=()=>axios.get(url+"/api/bill/getTaxes")
export const updateTaxes=async(id)=>await axios.post(url+'/api/bill/updateTaxes',{
    id
})
export const addInventoryCategory=async(newCategory)=>await axios.post(url+'/api/bill/addCategory',{
  newCategory
})
export const getAllSettings=async()=> await axios.post(url+'/api/bill/getSettings')
export const editSettings=async(values)=>await axios.post(url+'/api/bill/editSettings',{
  values
})
export const deleteSettings=async(values)=>await axios.post(url+'/api/bill/deleteSettings',{
  values
})
export const addInventory = async(values)=>await axios.post(url+'/api/bill/addInventory',{
  values
})
export const getInventory = async()=>await axios.post(url+'/api/bill/getInventory')