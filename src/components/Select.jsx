import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectInput({label,data,setValue,value,prop}) {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setValue({...value,[prop]:event.target.value});
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
         width: 350,
      },
    },
  };
  return (
    <div>
      <FormControl required sx={{ m: 1, minWidth: 225 }}>
        <InputLabel id="demo-simple-select-required-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={value.tipe}
          label="Age *"
          MenuProps={MenuProps}
          onChange={handleChange}
        >
          {data?.map(i=>{
            return(
        <MenuItem value={i.value}>{i.label}</MenuItem>
            )
          })}
          
      
        </Select>
      </FormControl>
    </div>
  );
}