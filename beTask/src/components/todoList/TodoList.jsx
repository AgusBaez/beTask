import { useState } from "react";
import "./TodoList.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const initialTask = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Pick up kids from school", completed: false },
  { id: 3, text: "Pay bills", completed: true },
];

function TodoList() {
  const [tasks, setTasks] = useState(initialTask);

  // Pensa que tenes que hacer los datos que te llegan 'Mutables' para poder modificarlos, es como hacer una copia, utiliza .map

  const handleToggle = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  // Ahora necesito borrar la Task, para eso utilizo el id de la task que quiero borrar, utilizo .filter para filtrar la task que quiero borrar

  const handdleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {tasks.map((task) => {
        return (
          <ListItem
            key={task.id}
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handdleDelete(task.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              dense
              onClick={() => handleToggle(task.id)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={task.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": task.id }}
                />
              </ListItemIcon>
              <ListItemText id={task.id} primary={`Task: ${task.text}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default TodoList;

