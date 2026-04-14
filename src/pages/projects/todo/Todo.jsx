import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Todo() {
  const [todos, setTodos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState(null);

  // Save ke localstorage
  useEffect(() => {
    console.log("SAVE: ", todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (!input.trim()) return;

    // Kalau lagi edit
    if (editId) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo,
        ),
      );
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        text: input,
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
    }

    setInput("");
  };

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleEdit = (todo) => {
    setInput(todo.text);
    setEditId(todo.id);
  };

  // Filter logic
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <div className="w-[420px] bg-white shadow-xl rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>

        <div className="flex gap-2 mb-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add todo..."
            className="flex-1 px-3 py-2 border rounded-lg outline-none"
          />
          <button
            onClick={handleAdd}
            className="bg-blue-400 text-white px-4 rounded-lg"
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>

        {/* Filter */}
        <div className="flex justify-between mb-4">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 rounded-lg text-sm ${
                filter === f ? "bg-blue-400 text-white" : "bg-gray-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Lists */}
        <AnimatePresence>
          <div className="flex flex-col gap-4">
            {filteredTodos.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center text-gray-400"
              >
                No todos yet
              </motion.p>
            )}

            {filteredTodos.map((todo) => (
              <motion.div
                key={todo.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-lg"
              >
                <div
                  onClick={() => handleToggle(todo.id)}
                  className={`flex-1 cursor-pointer transition-all ${
                    todo.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {todo.text}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(todo)}
                    className="text-yellow-400 hover:scale-110 transition"
                  >
                    ✏️
                  </button>

                  <button
                    onClick={() => handleDelete(todo.id)}
                    className="text-red-400 hover:scale-110 transition"
                  >
                    ✕
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>

      {/* Back */}
      <div className="absolute top-0 left-0 p-5">
        <Link
          to="/home"
          className="bg-red-400 text-white px-6 py-2 rounded-xl shadow-xl"
        >
          Back
        </Link>
      </div>
    </div>
  );
}
