import { Typography } from "@mui/material";
import useLocale from "hooks/useLocale";
import { useSelector } from "react-redux";
import { RootState } from "storage";
import TodoFilter from "../../utils/TodoFilter";

function TodoCount() {
  const { translate } = useLocale();
  const { folders } = useSelector((state: RootState) => state.todos);
  const completedCount = TodoFilter.countCompletedTodos(folders);
  return (
    <Typography variant="body1">
      {translate("menu.countItem")}&nbsp;
      {completedCount}
    </Typography>
  );
}
export default TodoCount;
