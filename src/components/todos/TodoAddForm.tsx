import { Box, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addFolder, addTodo } from "storage/slice/todos";

type FormProps = {
  label?: string;
  defaultValue?: string;
  folderId?: string;
  typePayload: "folder" | "task";
};
function TodoAddForm({
  label,
  defaultValue,
  typePayload,
  folderId,
}: FormProps) {
  if (typePayload === "task" && !folderId) {
    return null;
  }
  const dispatch = useDispatch();
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const value = formData.get("text") as string;
    if (typePayload === "folder") {
      dispatch(addFolder(value));
    }
    if (typePayload === "task" && folderId) {
      dispatch(addTodo({ folderId: folderId, text: value }));
    }
    e.currentTarget.reset();
  };

  return (
    <Box component="form" autoComplete="on" onSubmit={handlerSubmit}>
      <TextField
        fullWidth
        id="outlined-required"
        label={label}
        defaultValue={defaultValue}
        name="text"
      />
    </Box>
  );
}

export default React.memo(TodoAddForm, () => true);
