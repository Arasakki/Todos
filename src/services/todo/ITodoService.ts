import { TodoFolder } from "typings/models/todo";

export interface ITodoService {
  addFolder(folders: TodoFolder[], text: string): TodoFolder[];
  removeFolder(folders: TodoFolder[], folderId: string): TodoFolder[];
  addTodo(folders: TodoFolder[], folderId: string, text: string): TodoFolder[];
  toggleTodo(
    folders: TodoFolder[],
    folderId: string,
    todoId: string
  ): TodoFolder[];
  removeTodo(
    folders: TodoFolder[],
    folderId: string,
    todoId: string
  ): TodoFolder[];
}
