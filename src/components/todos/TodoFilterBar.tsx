import { Stack } from "@mui/material";
import TodoCount from "./TodoCount";
import TodoStatus, { FilterType } from "./TodoStatus";
import RemoveCompletedButton from "./ui/RemoveCompletedButton";
type TodoFilterBarProps = {
  currentFilter: FilterType;
  onChange: (filter: FilterType) => void;
};
function TodoFilterBar({ currentFilter, onChange }: TodoFilterBarProps) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <TodoCount />
      <TodoStatus currentFilter={currentFilter} onChange={onChange} />
      <RemoveCompletedButton />
    </Stack>
  );
}

export default TodoFilterBar;
