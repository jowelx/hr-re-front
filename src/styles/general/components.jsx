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
  