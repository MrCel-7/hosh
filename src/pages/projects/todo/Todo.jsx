import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function todo() {
  // Todo (Persist)
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  // Dark Mode (Persist)
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("dark" === "true");
  });

  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState(null);

  // Sync todos
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Sync dark mode
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("dark", dark);
  }, [dark]);

  // Add || Update
  const handleSubmit = () => {
    if (!input.trim()) return;

    if (editId) {
      setTodos((prev) =>
        prev.map((t) => (t.id === editId ? { ...t, text: input } : t)),
      );
      setEditId(null);
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          text: input,
          completed: false,
        },
      ]);
    }

    setInput("");
  };

  // Delete
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // Toggle
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  // Edit
  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  // Filter
  const filteredTodos = todos.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-[400px] bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            Todo App
          </h1>

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 rounded-lg ouline-0 bg-gray-200 dark:bg-gray-700"
          >
            {dark ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add todo..."
            className="flex-1 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 shadow-inner text-black dark:text-white outline-none"
          />
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 rounded-lg"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        {/* Filter */}
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="focus:outline-0 w-full mb-4 px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>

        {/* List */}
        <div className="flex flex-col gap-2">
          {filteredTodos.length === 0 && (
            <p className="text-center text-gray-400">No todos</p>
          )}

          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-lg"
            >
              <div
                onClick={() => handleToggle(todo.id)}
                className={`flex-1 cursor-pointer ${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-800 dark:text-white"
                }`}
              >
                {todo.text}
              </div>

              <div className="flex gap-2">
                <button onClick={() => handleEdit(todo)}>✏️</button>
                <button onClick={() => handleDelete(todo.id)}>✕</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to home */}
      <div className="absolute p-10 top-0 left-0">
        <Link
          to="/home"
          className="bg-red-400 rounded-xl shadow-inner px-10 py-4 text-white shadow-white"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
