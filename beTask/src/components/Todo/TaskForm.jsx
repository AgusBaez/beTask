import { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import TextField from "@mui/material/TextField";

const TaskForm = ({ addTask }) => {
  const [formTask, setFormTask] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setFormTask(event.target.value);

    if (event.target.value.trim() !== "") {
      setError(false);
    }
  };

  const handleNewTask = (e) => {
    e.preventDefault();
    if (formTask.trim() === "") {
      setError(true);
      return;
    }
    addTask(formTask);
    setFormTask("");
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <form onSubmit={handleNewTask}>
        <TextField
          id="new-todo"
          label="New To-Do"
          variant="outlined"
          onChange={handleChange}
          error={error}
          helperText={error && "the to-do cannot be empty"}
          value={formTask}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="New task" edge="end" type="submit">
                    <PlaylistAddIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
          sx={{ m: 1, width: "25ch" }}
        />
      </form>
    </Box>
  );
};

export default TaskForm;

