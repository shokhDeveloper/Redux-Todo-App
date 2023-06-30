import { Input } from "./Input";
import { List } from "./List/List";

function App() {
  return (
    <div className="App text-light">
      <div className="todos_header py-3 text-center">
        <h1>Redux Todo App</h1>
      </div>
      <div className="todos_main ">
        <div  style={{minHeight: "70vh" }} className="w-100   d-flex align-items-center justify-content-center text-center flex-column">
        <Input />
        <List />
        </div>
      </div>
    </div>
  );
}

export default App;
