import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import ToDoHeader from "./components/ToDoHeader";
import ToDoArea from "./components/ToDoArea";
import ToDoFooter from "./components/ToDoFooter";

let dataList = [
  { value: "Learn JavaScript" },
  { value: "Learn React" },
  { value: "Have a life!" },
];

function App() {
  const [todoData, setTodoData] = useState(dataList);
  return (
    <div>
      <ToDoHeader setTodoData={setTodoData} todoData={todoData} />
      <ToDoArea todoData={todoData} setTodoData={setTodoData} />
      <ToDoFooter todoData={todoData} setTodoData={setTodoData} />
      <Footer />
    </div>
  );
}

export default App;
