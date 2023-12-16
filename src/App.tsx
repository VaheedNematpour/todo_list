import { useState } from "react";
import TodoList from "./TodoList/components/TodoList";
import Navbar from "./components/Navbar";
import TodoForm from "./TodoList/components/TodoForm";

const App = () => {
  const [dark, setDark] = useState(false);
  const [todos, setTodos] = useState([
    { id: 1, title: "aaa", memo: "bbb", important: false, completed: false },
    { id: 2, title: "bbb", memo: "bbb", important: true, completed: true },
  ]);
  return (
    <div
      className={`px-4 py-12 min-h-screen ${
        dark ? "bg-stone-800" : "bg-stone-100"
      } `}
    >
      <header>
        <Navbar dark={dark} onDark={() => setDark(!dark)} />
      </header>
      <main>
        <TodoForm
          dark={dark}
          onSubmit={(todo) =>
            setTodos([
              ...todos,
              { ...todo, id: todos.length + 1, completed: false },
            ])
          }
        />

        <TodoList
          dark={dark}
          todos={todos}
          onComplete={(todoId) =>
            setTodos(
              todos.filter((todo) =>
                todo.id === todoId ? (todo.completed = true) : todo
              )
            )
          }
        />
      </main>
    </div>
  );
};

export default App;
