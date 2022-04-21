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
  setDarkMode:Dispatch<SetStateAction<Boolean>>
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
  setDarkMode:()=>{}
  
};

export const UserContext = createContext(DefaultUserContext);

export default function UserProvider({children}) {
  const [user, setUser] = useState(DefaultUserContext.user);
  const [error, setError]=useState<Error>(DefaultUserContext.error)
  const [message, setMessage]=useState(DefaultUserContext.message)
 const  [darkMode,setDarkMode]=useState(false)
  return (
    <UserContext.Provider value={{user, setUser, error, setError, message, setMessage,darkMode,setDarkMode}}>
      {children}
    </UserContext.Provider>
  );
}