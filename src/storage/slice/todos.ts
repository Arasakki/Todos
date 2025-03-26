import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosState } from "../../typings/models/todo";
import { TodoServiceImpl } from "../../services/todo/TodoServiceImpl";

const todoService = new TodoServiceImpl();

const initialState: TodosState = {
  folders: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addFolder: (state, action: PayloadAction<string>) => {
      state.folders = todoService.addFolder(state.folders, action.payload);
    },
    removeFolder: (state, action: PayloadAction<string>) => {
      state.folders = todoService.removeFolder(state.folders, action.payload);
    },
    addTodo: (
      state,
      action: PayloadAction<{ folderId: string; text: string }>
    ) => {
      state.folders = todoService.addTodo(
        state.folders,
        action.payload.folderId,
        action.payload.text
      );
    },
    toggleTodo: (
      state,
      action: PayloadAction<{ folderId: string; todoId: string }>
    ) => {
      state.folders = todoService.toggleTodo(
        state.folders,
        action.payload.folderId,
        action.payload.todoId
      );
    },
    removeTodo: (
      state,
      action: PayloadAction<{ folderId: string; todoId: string }>
    ) => {
      state.folders = todoService.removeTodo(
        state.folders,
        action.payload.folderId,
        action.payload.todoId
      );
    },
    removeAllCompletedTasks: (state) => {
      state.folders = todoService.removeAllCompletedTasks(state.folders);
    },
  },
});

export const {
  addFolder,
  removeFolder,
  addTodo,
  toggleTodo,
  removeTodo,
  removeAllCompletedTasks,
} = todosSlice.actions;
export default todosSlice.reducer;
