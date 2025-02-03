import "./App.css";
import AddForm from "./components/AddForm";
import DoneList from "./components/DoneList";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <h1>Todolist</h1>
      <AddForm />
      <div style={{ display: "flex", gap: "5rem" }}>
        <TodoList style={{ outerWidth: "500px" }} />
        <DoneList style={{ outerWidth: "500px" }} />
      </div>
    </>
  );
}

export default App;
