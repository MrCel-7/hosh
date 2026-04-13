import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Counter from "./pages/Counter";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}
