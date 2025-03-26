import todosReducer, {
  addFolder,
  addTodo,
  toggleTodo,
  removeAllCompletedTasks,
} from "storage/slice/todos";
import { TodosState } from "typings/models/todo";

describe("todos slice", () => {
  let initialState: TodosState;

  beforeEach(() => {
    initialState = { folders: [] };
  });

  it("should add folder", () => {
    const state = todosReducer(initialState, addFolder("My Folder"));
    expect(state.folders).toHaveLength(1);
    expect(state.folders[0].text).toBe("My Folder");
    expect(state.folders[0].todos).toEqual([]);
  });

  it("should add todo to a folder and toggle it", () => {
    // Добавляем папку
    let state = todosReducer(initialState, addFolder("Folder 1"));
    const folderId = state.folders[0].id;
    // Добавляем задачу в эту папку
    state = todosReducer(state, addTodo({ folderId, text: "Task 1" }));
    expect(state.folders[0].todos).toHaveLength(1);
    expect(state.folders[0].todos[0].text).toBe("Task 1");
    expect(state.folders[0].todos[0].completed).toBeFalsy();

    const todoId = state.folders[0].todos[0].id;
    // Переключаем задачу
    state = todosReducer(state, toggleTodo({ folderId, todoId }));
    expect(state.folders[0].todos[0].completed).toBeTruthy();
  });

  it("should remove all completed tasks", () => {
    let state = todosReducer(initialState, addFolder("Folder 1"));
    const folderId = state.folders[0].id;
    state = todosReducer(state, addTodo({ folderId, text: "Task 1" }));
    state = todosReducer(state, addTodo({ folderId, text: "Task 2" }));
    const [todo1, todo2] = state.folders[0].todos;
    state = todosReducer(state, toggleTodo({ folderId, todoId: todo1.id }));
    state = todosReducer(state, removeAllCompletedTasks());
    expect(state.folders[0].todos).toHaveLength(1);
    expect(state.folders[0].todos[0].text).toBe("Task 2");
  });
});
