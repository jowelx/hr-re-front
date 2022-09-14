import { styled } from "@mui/material"
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { useContext } from "react";
import { UserContext } from "src/context/userContext";
import { COLOR_DARK_SHADOW } from "src/constants/consts";
import { COLOR_LIGHT_SHADOW } from "src/constants/consts";
import AddIcon from '@mui/icons-material/Add';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import Brightness5OutlinedIcon from '@mui/icons-material/Brightness5Outlined';
import SellIcon from '@mui/icons-material/Sell';
import StoreIcon from '@mui/icons-material/Store';
import FeedIcon from '@mui/icons-material/Feed';
import EditIcon from '@mui/icons-material/Edit';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import ClearIcon from '@mui/icons-material/Clear';
const AntTabs = styled(Tabs)(({darkMode}) => ({
    height:20,
    
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
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
        backgroundColor: 'rgba(0,200,255,0.1)',
      },
      '&.Mui-focusVisible': {
        backgroundColor: 'rgb(0,200,255)',
      },
}));
    
  
export const HeaderOne=({setScreen})=>{

    const [value, setValue] = React.useState('1');
    const {darkMode}=useContext(UserContext)
    const handleChange = (event, newValue) => {
      setValue(newValue);
      setScreen(parseInt(newValue)+1)
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
          <StoreIcon/>
        }
          iconPosition="end"
           label="Compras"
           darkMode={darkMode} 
           />
          <AntTab
          icon={
          < SellIcon/>
        }
          iconPosition="end" 
          label="Ventas" 
          darkMode={darkMode}
          />
            <AntTab
          icon={
          < FeedIcon/>
        }
          iconPosition="end"
           label="Reporte"
           darkMode={darkMode} 
           />
        </AntTabs>
      </Box>

    </Box>
        </>
    )
}
export const HeaderTow=({setScreen})=>{
    const [value, setValue] = React.useState('1');
    const {darkMode}=useContext(UserContext)
    const handleChange = (event, newValue) => {
      setValue(newValue);
      setScreen(parseInt(newValue)+1)
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
          <AddIcon/>
        }
          iconPosition="end"
           label="Agregar"
           darkMode={darkMode} 
           />
          <AntTab
          icon={
          < EditIcon/>
        }
          iconPosition="end" 
          label="Editar" 
          darkMode={darkMode}
          />
            <AntTab
          icon={
          <ClearIcon/>
        }
          iconPosition="end"
           label="Eliminar"
           darkMode={darkMode} 
           />
        </AntTabs>
      </Box>

    </Box>
        </>
    )
}
