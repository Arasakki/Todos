import { Container, Typography } from "@mui/material";
import TodosGlobalBlock from "components/todos/TodoGlobalBlock";
import useLocale from "hooks/useLocale";
import React from "react";

function TodosListPage() {
  const { translate } = useLocale();
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h1">{translate("general.title")}</Typography>
      <TodosGlobalBlock />
    </Container>
  );
}

export default React.memo(TodosListPage, () => true);
