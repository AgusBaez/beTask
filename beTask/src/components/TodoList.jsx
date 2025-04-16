import { useEffect, useState } from "react";
import TaskBox from "./todo/TaskBox";
import List from "@mui/material/List";
import TaskForm from "./todo/TaskForm";

const getLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("tasks"));
  if (!data) return [];
  return data;
};

function TodoList() {
  const [tasks, setTasks] = useState(getLocalStorage);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
          id: crypto.randomUUID(),
          text: newTodo,
          completed: false,
        },
      ];
    });
  };

  return (
    <>
      <TaskForm addTask={addTask} />
      <h2>Todo List</h2>
      {tasks.length <= 0 ? (
        "Try add some To-Do"
      ) : (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {tasks.map((task) => (
            <TaskBox
              key={task.id}
              task={task}
              handleToggle={() => handleToggle(task.id)}
              handleDelete={() => handleDelete(task.id)}
            />
          ))}
        </List>
      )}
    </>
  );
}

export default TodoList;

