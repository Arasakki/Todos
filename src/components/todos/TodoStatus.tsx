import { Button, ButtonGroup } from "@mui/material";
import useLocale from "hooks/useLocale";
export type FilterType = "all" | "active" | "completed";

type TodoStatusProps = {
  currentFilter: FilterType;
  onChange: (filter: FilterType) => void;
};

function TodoStatus({ currentFilter, onChange }: TodoStatusProps) {
  const {translate} = useLocale()
  return (
    <ButtonGroup variant="outlined" size="small">
      <Button
        variant={currentFilter === "all" ? "contained" : "outlined"}
        onClick={() => onChange("all")}
      >
        {translate('menu.filter.all')}
      </Button>
      <Button
        variant={currentFilter === "active" ? "contained" : "outlined"}
        onClick={() => onChange("active")}
      >
        {translate('menu.filter.active')}
      </Button>
      <Button
        variant={currentFilter === "completed" ? "contained" : "outlined"}
        onClick={() => onChange("completed")}
      >
        {translate('menu.filter.completed')}
      </Button>
    </ButtonGroup>
  );
}
export default TodoStatus;
