import { styled } from "@mui/material"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useContext } from "react";
import { UserContext } from "src/context/userContext";
import { COLOR_DARK_SHADOW } from "src/constants/consts";
import { COLOR_LIGHT_SHADOW } from "src/constants/consts";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
const AntTabs = styled(Tabs)(({darkMode}) => ({
     borderBottom: `1px solid ${darkMode===true?COLOR_DARK_SHADOW: COLOR_LIGHT_SHADOW}`,
    '& .MuiTabs-indicator': {
      backgroundColor: '#1890ff',
    },
  }));
  
  const AntTab = styled(Tab)(({darkMode}) => ({
    textTransform: 'none',
    color: darkMode===true?'rgba(250, 250, 250, 1)':'rgba(20, 20, 20, 0.85)',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&.Mui-selected': {
      color: 'rgb(0,200,255)',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgb(0,200,255)',
    },
  }));
  

const Header =({setTypeLot})=>{
    const [value, setValue] = React.useState('1');
    const {darkMode}=useContext(UserContext)
    const handleChange = (event, newValue) => {
      setValue(newValue);
      setTypeLot(parseInt(newValue)+1)
    };
    return(
        <>
 <Box sx={{ width: '100%' }}>
      <Box >
        <AntTabs 
      
      darkMode={darkMode} 
        value={value}
        onChange={handleChange} 
        aria-label="ant example">
          <AntTab
          icon={
          <CancelOutlinedIcon/>
        }
          iconPosition="end"
           label="Sin signo"
           darkMode={darkMode} 
           />
          <AntTab
          icon={
          < Brightness5OutlinedIcon/>
        }
          iconPosition="end" 
          label="Con signo" 
          darkMode={darkMode}
          />
          <AntTab
          icon={
          <Looks4OutlinedIcon/>
        }
          iconPosition="end" 
          label="4 Cifras"
          darkMode={darkMode}
           />
          <AntTab
          icon={
          <PetsOutlinedIcon />
        }
          iconPosition="end" 
          label="Animales" 
          darkMode={darkMode}
          />
        </AntTabs>
      
      </Box>

    </Box>
        </>
    )
}
export default Header