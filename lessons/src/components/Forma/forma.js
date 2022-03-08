import { useState } from "react"


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
        <input value={value} onChange={handleChange} type="text" />
        <input type="submit" />
      </form>
    );
};