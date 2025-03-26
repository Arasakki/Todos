import { TodoFolder } from "../typings/models/todo";

export type FilterType = "all" | "active" | "completed";

export default class TodoFilter {
  public static filterFolders(
    folders: TodoFolder[],
    filter: FilterType
  ): TodoFolder[] {
    if (filter === "all") {
      return folders;
    }
    return folders.map((folder) => {
      let filteredTodos = folder.todos;
      if (filter === "active") {
        filteredTodos = folder.todos.filter((todo) => !todo.completed);
      } else if (filter === "completed") {
        filteredTodos = folder.todos.filter((todo) => todo.completed);
      }
      return { ...folder, todos: filteredTodos };
    });
  }

  public static countCompletedTodos(folders: TodoFolder[]): number {
    return folders.reduce((acc, folder) => {
      return acc + folder.todos.filter((todo) => todo.completed).length;
    }, 0);
  }
}
