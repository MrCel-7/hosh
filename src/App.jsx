import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Counter from "./pages/projects/counter/Counter";
import Home from "./pages/Home";
import Todo from "./pages/projects/todo/Todo";
import Card from "./pages/projects/card/Card";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project/counter" element={<Counter />} />
        <Route path="/project/todo" element={<Todo />} />
        <Route path="/project/card" element={<Card />} />
      </Routes>
    </BrowserRouter>
  );
}
