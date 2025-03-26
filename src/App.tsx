import "./App.css";
import ThemeProvider from "./theme/index";
import TodosListPage from "./pages/todos/TodosListPage";

function App() {
  return (
    <ThemeProvider>
      <TodosListPage />
    </ThemeProvider>
  );
}

export default App;
