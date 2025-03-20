import { useState } from "react";
import "./TodoList.css";
import TaskBox from "./task/TaskBox";

import List from "@mui/material/List";

const initialTask = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Pick up kids from school", completed: false },
  { id: 3, text: "Pay bills", completed: true },
];

function TodoList() {
  const [tasks, setTasks] = useState(initialTask);

  const handleToggle = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {tasks.map((task) => (
        <TaskBox
          key={task.id}
          task={task}
          handleToggle={() => handleToggle(task.id)}
          handleDelete={() => handleDelete(task.id)}
        />
      ))}
    </List>
  );
}

export default TodoList;

