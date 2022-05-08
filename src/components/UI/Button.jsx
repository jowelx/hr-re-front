import{ LoadingButton} from '@mui/lab';
import { COLOR_DARK_SECOND } from 'src/constants/consts';

export const ButtonLigth = ({name,onPress})=>{
    return(
        <LoadingButton
        size="small"
        style={{width:"100%"}}
        onPress={onPress}
        loadingIndicator="Loading..."
        variant="contained"
      >{name}
      </LoadingButton>
    )
}
export const ButtonDark = ({name,onPress})=>{
    return(
        <LoadingButton
        style={{width:"100%",backgroundColor:COLOR_DARK_SECOND}}
        size="small"
        onPress={onPress}
        loadingIndicator="Loading..."
        variant="contained"
      >{name}
      </LoadingButton>
    )
}