import { ListItem } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';


export default function TodoForm({addTodo}){
    const[text,setText]=useState("");
    const handleChange=(evt)=>{
        setText(evt.target.value);
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        addTodo(text);
        setText("");
    }
    return(
        <form onSubmit={handleSubmit}>
        <TextField id="standard-basic" label="Standard" variant="standard" onChange={handleChange} value={text}/>
        </form>
    );
}