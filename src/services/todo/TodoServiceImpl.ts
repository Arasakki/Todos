import StringUtils from "../../utils/String";
import { ITodoService } from "./ITodoService";
import { TodoFolder } from "typings/models/todo";

export class TodoServiceImpl implements ITodoService {
  addFolder(folders: TodoFolder[], text: string): TodoFolder[] {
    return [
      ...folders,
      {
        id: StringUtils.generateUUID(),
        text,
        completed: false,
        todos: [],
      },
    ];
  }

  removeFolder(folders: TodoFolder[], folderId: string): TodoFolder[] {
    return folders.filter((folder) => folder.id !== folderId);
  }

  addTodo(folders: TodoFolder[], folderId: string, text: string): TodoFolder[] {
    return folders.map((folder) =>
      folder.id === folderId
        ? {
            ...folder,
            todos: [
              ...folder.todos,
              { id: StringUtils.generateUUID(), text, completed: false },
            ],
            completed: false,
          }
        : folder
    );
  }

  toggleTodo(
    folders: TodoFolder[],
    folderId: string,
    todoId: string
  ): TodoFolder[] {
    return folders.map((folder) =>
      folder.id === folderId
        ? {
            ...folder,
            todos: folder.todos.map((todo) =>
              todo.id === todoId
                ? { ...todo, completed: !todo.completed }
                : todo
            ),
            completed: folder.todos.every((todo) =>
              todo.id === todoId ? !todo.completed : todo.completed
            ),
          }
        : folder
    );
  }

  removeTodo(
    folders: TodoFolder[],
    folderId: string,
    todoId: string
  ): TodoFolder[] {
    return folders.map((folder) =>
      folder.id === folderId
        ? {
            ...folder,
            todos: folder.todos.filter((todo) => todo.id !== todoId),
            completed: folder.todos.every((todo) => todo.completed),
          }
        : folder
    );
  }

  removeAllCompletedTasks(folders: TodoFolder[]): TodoFolder[] {
    return folders.map((folder) => ({
      ...folder,
      todos: folder.todos.filter((todo) => !todo.completed),
    }));
  }
}
