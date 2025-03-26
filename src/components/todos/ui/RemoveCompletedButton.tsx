import { Button } from "@mui/material";
import useLocale from "hooks/useLocale";
import { useDispatch } from "react-redux";
import { removeAllCompletedTasks } from "storage/slice/todos";

export default function RemoveCompletedButton() {
  const dispatch = useDispatch();
  const { translate } = useLocale();
  const handleRemove = () => {
    dispatch(removeAllCompletedTasks());
  };

  return (
    <Button variant="contained" color="error" onClick={handleRemove}>
      {translate("menu.clear")}
    </Button>
  );
}
