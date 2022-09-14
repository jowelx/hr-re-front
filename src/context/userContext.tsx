import {createContext, useState} from 'react';
import { AlertColor } from '@mui/material';
import {Dispatch, SetStateAction} from 'react';


 type UserMutation={
  backgroundImage:string,
  id:Number | null ,
  fullName:string,
  username:string,
  avatar:string
}


 type UserType={
  setUser:Dispatch<SetStateAction<{}>>
  user:UserMutation,
  setError:Dispatch<SetStateAction<String>>,
  error:string,
  setMessage:Dispatch<SetStateAction<String>>
  message:String,
  darkMode:boolean,
  setDarkMode:Dispatch<SetStateAction<Boolean>>,
  islogged:boolean,
  setIslogged:Dispatch<SetStateAction<Boolean>>,
  screen:number,
  setScreen:Dispatch<SetStateAction<Number>>
  nameLotery:string,
  setNameLotery:Dispatch<SetStateAction<String>>
  time:any,
  setTime:Dispatch<SetStateAction<[]>>,
  loadding:boolean,
  setLoadding:Dispatch<SetStateAction<Boolean>>,

}
export const DefaultUserContext:UserType = {
  user: {
    avatar:'',
    backgroundImage:'',
    fullName:'',
    id:null,
    username:''
  },
  setUser: () => {},
  error: "",
  setError:()=>{},
  message:'',
  setMessage:()=>{},
  darkMode:true,
  setDarkMode:()=>{},
  islogged:true,
  setIslogged:()=>{},
  screen:0,
  setScreen:()=>{},
  nameLotery:'',
  setNameLotery:()=>{},
  time:[],
  setTime:()=>{},
  loadding:false,
  setLoadding:()=>{},
};
export const UserContext = createContext(DefaultUserContext);
export default function UserProvider({children}) {
  const [user, setUser] = useState(DefaultUserContext.user);
  const [error, setError]=useState(DefaultUserContext.error)
  const [message, setMessage]=useState(DefaultUserContext.message)
  const [darkMode,setDarkMode]=useState(false)
  const [islogged,setIslogged]=useState(false)
  const [loadding,setLoadding]=useState(false)
  const [screen,setScreen]=useState(0)
  const [nameLotery,setNameLotery]=useState('')
  const [time,setTime]=useState([])
  return (
    <UserContext.Provider value={{
      user, 
      setUser,
      error,
      setError, 
      message, 
      setMessage,
      darkMode,
      setDarkMode, 
      islogged,
      setIslogged,
      screen,
      setScreen,
      nameLotery,
      setNameLotery,
      time,
      setTime,
      loadding,
      setLoadding
      }}>
      {children}
    </UserContext.Provider>
  );
}