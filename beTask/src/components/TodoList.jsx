import { useState } from "react";
import TaskBox from "./Todo/TaskBox";
import List from "@mui/material/List";
import TaskForm from "./Todo/TaskForm";

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

  const addTask = (newTodo) => {
    setTasks((prevTasks) => {
      return [
        ...prevTasks,
        {
          id: 8,
          text: newTodo,
          completed: false,
        },
      ];
    });
  };

  return (
    <>
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
      <TaskForm addTask={addTask} />
    </>
  );
}

export default TodoList;

