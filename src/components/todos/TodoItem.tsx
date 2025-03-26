import {
  Checkbox,
  List,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { toggleTodo } from "storage/slice/todos";
import { Todo } from "typings/models/todo";

type TodoProps = {
  todo: Todo;
  folderId: string;
};

function TodoItem({ todo, folderId }: TodoProps) {
  const dispatch = useDispatch();
  const handlerCheckTodo = () => {
    dispatch(toggleTodo({ folderId: folderId, todoId: todo.id }));
  };
  return (
    <List
      component="div"
      disablePadding
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        textAlign: "left",
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "gray" : "black",
      }}
    >
      <Checkbox
        onChange={handlerCheckTodo}
        sx={{ maxWidth: "50px", width: "100%" }}
        checked={todo.completed}
      />

      <ListItemText primary={todo.text} />
    </List>
  );
}

export default TodoItem;
