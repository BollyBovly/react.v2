import { useState } from "react"
import {Button, TextField} from "@mui/material"


export const Forma = ({ onSubmit }) => {
    const [value, setValue] = useState("");
  
    const handleChange = (e) => {
      setValue(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(value);
      setValue('')
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <TextField value={value} onChange={handleChange}/>
        <Button>Send</Button>
      </form>
    );
};