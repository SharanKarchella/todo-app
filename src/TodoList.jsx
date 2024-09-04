import { useState } from "react";
import List from "@mui/material/List";

import TodoListItem from "./TodoListItem";
import TodoForm from "./TodoForm";
import { Box,Typography } from "@mui/material";

const todos = [
  { id: 1, text: "Work on Udemy Course", completed: false },
  { id: 2, text: "Watch Nani Movie", completed: true },
  { id: 3, text: "Work on laptop", completed: false },
  { id: 4, text: "Work on yourself", completed: true },
];

function TodoList() {
  const [todo, setTodo] = useState(todos);

  const removeTodo = (id) => {
    setTodo((prev) => {
      return prev.filter((t) => t.id !== id);
    });
  };

  const addTodo = (text) => {
    setTodo((prevtodos) => {
      return [
        ...prevtodos,
        { text: text, id: crypto.randomUUID(), completed: false },
      ];
    });
  };

  const ToggleTodo = (id) => {
    setTodo((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        else{
          return todo;
        }
      });
    });
  };

  return (
    <Box sx={{
      display:"flex",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center",
      m:3,
    }}>
      <Typography variant="h2" component="h1" sx={{flexGrow:1}}>
        Todo-App
      </Typography>
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {todo.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          removeTodo={() => removeTodo(todo.id)}
          toggle={()=>ToggleTodo(todo.id)}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </List>
    </Box>
  );
}

export default TodoList;
