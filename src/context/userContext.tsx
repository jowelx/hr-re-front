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

 type Error={
  message:string,
  severity:AlertColor
}

 type UserType={
  setUser:Dispatch<SetStateAction<{}>>
  user:UserMutation,
  setError:Dispatch<SetStateAction<Error>>,
  error:Error,
  setMessage:Dispatch<SetStateAction<String>>
  message:String,
  darkMode:boolean,
  setDarkMode:Dispatch<SetStateAction<Boolean>>,
  islogged:boolean,
  setIslogged:Dispatch<SetStateAction<Boolean>>,
  lotery:number,
  setLotery:Dispatch<SetStateAction<Number>>
  nameLotery:string,
  setNameLotery:Dispatch<SetStateAction<String>>
  time:any,
  setTime:Dispatch<SetStateAction<[]>>
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
  error: {message:'', severity:'error'},
  setError:()=>{},
  message:'',
  setMessage:()=>{},
  darkMode:true,
  setDarkMode:()=>{},
  islogged:true,
  setIslogged:()=>{},
  lotery:0,
  setLotery:()=>{},
  nameLotery:'',
  setNameLotery:()=>{},
  time:[],
  setTime:()=>{},
};
export const UserContext = createContext(DefaultUserContext);
export default function UserProvider({children}) {
  const [user, setUser] = useState(DefaultUserContext.user);
  const [error, setError]=useState<Error>(DefaultUserContext.error)
  const [message, setMessage]=useState(DefaultUserContext.message)
  const [darkMode,setDarkMode]=useState(false)
  const [islogged,setIslogged]=useState(false)
  const [lotery,setLotery]=useState(0)
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
      lotery,
      setLotery,
      nameLotery,
      setNameLotery,
      time,
      setTime,
      }}>
      {children}
    </UserContext.Provider>
  );
}