import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "storage";
import TodosList from "./TodoList";
import TodoAddForm from "./TodoAddForm";
import useLocale from "hooks/useLocale";
import TodoFilterBar from "./TodoFilterBar";
import TodoFilter, { FilterType } from "../../utils/TodoFilter";
function TodoGlobalBlock() {
  const { folders } = useSelector((state: RootState) => state.todos);
  const { translate } = useLocale();
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredFolders = TodoFilter.filterFolders(folders, filter);

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
  };

  return (
    <Box>
      <TodoAddForm typePayload="folder" label={translate("folder.add")} />
      {folders.length > 0 ? (
        <>
          <TodosList folders={filteredFolders} />
        </>
      ) : (
        <Typography variant="overline">{translate("folder.empty")}</Typography>
      )}
      <TodoFilterBar currentFilter={filter} onChange={handleFilterChange} />
    </Box>
  );
}

export default React.memo(TodoGlobalBlock, () => true);
