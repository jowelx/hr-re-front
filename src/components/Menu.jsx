import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { COLOR_DARK_SECOND,COLOR_LIGHT_SECOND ,COLOR_LIGHT_THIRD ,COLOR_DARK_THIRD, COLOR_DARK_FIRST, COLOR_LIGHT_FIRST} from 'src/constants/consts';
import { useContext } from 'react';
import { UserContext } from 'src/context/userContext';

 const SideMenu=({items})=> {
    const {darkMode}=useContext(UserContext)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = ({anchor,items}) => {
    console.log(items)
      return(
<Box
    style={{height:"100%",backgroundColor:darkMode===true?COLOR_DARK_FIRST:COLOR_LIGHT_SECOND}}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List   
       style={{backgroundColor:darkMode===true?COLOR_DARK_SECOND:COLOR_LIGHT_THIRD,color:darkMode===false?COLOR_DARK_SECOND:COLOR_LIGHT_FIRST}}>
        {items?.map((text, index) => (
          <>
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 
                ? 
                <InboxIcon style={{color:darkMode===false?COLOR_DARK_SECOND:COLOR_LIGHT_THIRD}} /> 
                :
                 <MailIcon style={{color:darkMode===false?COLOR_DARK_SECOND:COLOR_LIGHT_THIRD}} />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          {index % 4=== 0 &&<Divider />}
          </>
        ))}
      </List> 
    </Box>
      )
    
  };


  return (
    <div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
         
          <IconButton onClick={toggleDrawer(anchor, true)} >
       <Menu style={{color:darkMode===false?COLOR_DARK_SECOND:COLOR_LIGHT_SECOND}}/>
      </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list({anchor,items})}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default SideMenu