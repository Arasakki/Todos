import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { TodoFolder } from "typings/models/todo";
import TodoAddForm from "./TodoAddForm";
import useLocale from "hooks/useLocale";
import TodosListItem from "./TodosListItem";
import { useState } from "react";

type TodoFoldersListProps = {
  folder: TodoFolder;
  defaultOpen?: boolean;
};
function TodoFoldersList({
  folder,
  defaultOpen = false,
}: TodoFoldersListProps) {
  const [open, setOpen] = useState(defaultOpen);
  const { translate } = useLocale();
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        textDecoration: folder.completed ? "line-through" : "none",
        color: folder.completed ? "gray" : "black",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={folder.text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <TodoAddForm
          typePayload="task"
          folderId={folder.id}
          label={translate("task.add")}
        />
        <TodosListItem folderId={folder.id} todos={folder.todos} />
      </Collapse>
      <Divider />
    </List>
  );
}

export default TodoFoldersList;
