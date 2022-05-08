import styled from '@emotion/styled';
import { Box } from '@mui/system';

import { COLOR_DARK_FIRST , COLOR_LIGHT_FIRST} from '../../constants/consts';

export const ContainerDark = styled(Box)({
    backgroundColor: COLOR_DARK_FIRST,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height: '100vh'
  })
  export const ContainerLight = styled(Box)({
    backgroundColor: COLOR_LIGHT_FIRST,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height: '100vh'
  })
  
  export const ContainerLogin =styled(Box)({
    background:" linear-gradient(140deg, rgb(0,250,210) 0%, rgb(0,100,255) 100%)",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
    height: '100vh'
  })