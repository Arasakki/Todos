import { Stack } from "@mui/material";
import { Todo } from "typings/models/todo";
import TodoItem from "./TodoItem";

type TodoItemProps = {
  todos: Todo[];
  folderId: string;
};
function TodosListItem({ todos, folderId }: TodoItemProps) {
  return (
    <Stack>
      {todos.map((task) => (
        <TodoItem folderId={folderId} key={task.id} todo={task} />
      ))}
    </Stack>
  );
}
export default TodosListItem;
