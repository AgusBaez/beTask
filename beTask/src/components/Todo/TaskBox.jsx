import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskBox = ({ task, handleDelete, handleToggle }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense onClick={handleToggle}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={task.completed}
            tabIndex={-1}
            disableRipple
            inputProps={{ "aria-labelledby": `task-${task.id}` }}
          />
        </ListItemIcon>
        <ListItemText id={task.id} primary={` ${task.text}`} />
      </ListItemButton>
    </ListItem>
  );
};

export default TaskBox;

