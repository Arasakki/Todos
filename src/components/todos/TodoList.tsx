import { Stack } from "@mui/material";
import { TodoFolder } from "typings/models/todo";
import TodoFoldersList from "./TodoFoldersList";

type TodoListProps = {
  folders: TodoFolder[];
};
function TodoList({ folders }: TodoListProps) {
  console.log(folders, folders);
  return (
    <Stack maxHeight={300}>
      <Stack overflow={"auto"}>
        {folders.map((folder) => (
          <TodoFoldersList key={folder.id} folder={folder} />
        ))}
      </Stack>
    </Stack>
  );
}

export default TodoList;
