
import styled from '@emotion/styled';
import {  TextField } from "@mui/material";

export const Input = styled(TextField)({
    borderColor:'white',
    "& label.Mui-focused": {
        color: "#fff",
    },
    "& label": {
        fontSize: "14px",
        color: "#fff",
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "#fff",
    },
    "& .MuiInput-underline:before": {
        borderBottomColor: "#fff",
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: 'red',
        },
        '&:hover fieldset': {
          borderColor: 'yellow',
        },
        '&.Mui-focused fieldset': {
          borderColor: 'green',
        }},
    "& .MuiInput-root": {
        fontSize: "14px",
        color: "#fff",
        "& fieldset": {
            color: "#fff",
        },
    },
})