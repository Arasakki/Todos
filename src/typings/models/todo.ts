export type TodoFolder = Entity & {
  text: string;
  completed: boolean;
  todos: Todo[];
};

export type Todo = Entity & {
  text: string;
  completed: boolean;
};

export type TodosState = {
  folders: TodoFolder[];
};
