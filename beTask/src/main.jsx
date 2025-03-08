import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import TodoList from "./components/todoList/TodoList";

const root = document.getElementById("root");

const task = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Pick up kids from school", completed: false },
  { id: 3, text: "Pay bills", completed: true },
];

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoList />} />
    </Routes>
  </BrowserRouter>
);

