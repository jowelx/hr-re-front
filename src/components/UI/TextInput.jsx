import styled from '@emotion/styled';
import {  TextField } from "@mui/material";
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

 const InputText = styled(TextField)({
     
    borderColor:'white',
    "& label.Mui-focused": {
        color: "rgb(20,20,20)",
    },
    "& label": {
        fontSize: "14px",
        color: "rgb(20,20,20)",
    },
   
    '& .MuiOutlinedInput-root': {
        
      },
    "& .MuiInput-root": {
        fontSize: "14px",
        color: "rgb(20,20,20)",
      
    },
})
const TextInput =({label, onChange,style,error,password,value})=>{

    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
      });
     
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return(
        <>
   {password ===true ?
    <FormControl style={style} variant="standard">
    <InputLabel error={error} htmlFor="standard-adornment-password">{label}</InputLabel>
    <Input
   error={error}
      id="standard-adornment-password"
      type={values.showPassword ? 'text' : 'password'}
      value={value}
      onChange={onChange}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
          error={error}
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {values.showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
         
        </InputAdornment>
      }
    />
    <p style={{color:"rgb(240,40,40)",display:"flex",justifyContent:"left",height:"16px",margin:0,fontSize:12}}>{error}</p>
   </FormControl>
    :
<FormControl      style={style} >
<InputText
     variant="standard"
     id="standard-basic"
     label={label}
     onChange={onChange}

     value={value}
     error={error}
  />
      <p style={{color:"rgb(240,40,40)",display:"flex",justifyContent:"left",height:"14px",margin:0,fontSize:12}}>{error}</p>
</FormControl>

  
 }
 </>
    )
}

export default TextInput 