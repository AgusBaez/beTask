import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import TodoList from "./components/TodoList";
import Layout from "./components/layout/Layout";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<TodoList />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

