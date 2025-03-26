import { TodoServiceImpl } from "services/todo/TodoServiceImpl";
import { TodoFolder } from "typings/models/todo";

describe("TodoServiceImpl", () => {
  const service = new TodoServiceImpl();
  let folders: TodoFolder[] = [];

  beforeEach(() => {
    folders = [];
  });

  it("should add a folder", () => {
    const newFolders = service.addFolder(folders, "Test Folder");
    expect(newFolders).toHaveLength(1);
    expect(newFolders[0].text).toBe("Test Folder");
  });

  it("should remove completed tasks", () => {
    // Создаем папку с двумя задачами
    folders = service.addFolder(folders, "Folder 1");
    const folderId = folders[0].id;
    folders = service.addTodo(folders, folderId, "Task 1");
    folders = service.addTodo(folders, folderId, "Task 2");

    folders = service.toggleTodo(folders, folderId, folders[0].todos[0].id);
    const newFolders = service.removeAllCompletedTasks(folders);
    expect(newFolders[0].todos).toHaveLength(1);
  });
});
