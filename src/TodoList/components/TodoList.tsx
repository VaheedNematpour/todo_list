import { useState } from "react";

interface Todo {
  id: number;
  title: string;
  memo: string;
  important: boolean;
  completed: boolean;
}

interface Props {
  dark: boolean;
  todos: Todo[];
  onComplete: (id: number) => void;
}

const TodoList = ({ dark, todos, onComplete }: Props) => {
  const [showCompleted, setShowCompleted] = useState(false);
  const notCompleted = todos.filter((todo) => todo.completed === false);
  const completed = todos.filter((todo) => todo.completed === true);

  return (
    <div className="max-w-5xl mx-auto">
      <h2
        className={`font-bold my-2 ${
          dark ? "text-stone-100" : "text-stone-800"
        } xs:text-md sm:text-lg md:text-xl md:my-4 lg:text-2xl xl:text-3xl`}
      >
        List of Todos
      </h2>

      <div className="flex items-center space-x-4">
        <button
          className={`font-semibold ${
            dark ? "text-stone-100" : "text-stone-900"
          } xs:text-md sm:text-lg lg:text-xl xl:text-2xl`}
          onClick={() => setShowCompleted(false)}
        >
          Todos
          {!showCompleted && (
            <hr className="border-0 border-b-2 border-stone-300" />
          )}
        </button>

        <button
          className={`font-semibold ${
            dark ? "text-stone-100" : "text-stone-900"
          } xs:text-md sm:text-lg lg:text-xl xl:text-2xl`}
          onClick={() => setShowCompleted(true)}
        >
          Completed Todos
          {showCompleted && (
            <hr className="border-0 border-b-2 border-stone-300" />
          )}
        </button>
      </div>

      {showCompleted &&
        completed.map((todo) => (
          <article
            className={`border-2 px-4 py-2 mx-2 my-3 rounded-md shadow-sm ${
              dark ? "bg-stone-300" : "bg-stone-400"
            } text-stone-900 ${
              todo.important && "bg-green-200"
            } flex flex-col space-y-2 md:mx-4 md:my-6 md:px-6 md:py-4`}
            key={todo.id}
          >
            <header>
              <h3>
                <span className="font-bold">title: </span>
                {todo.title}
              </h3>
            </header>
            <main>
              <p>
                <span className="font-bold">memo: </span>
                <br />
                <span className="px-3 py-2">{todo.memo}</span>
              </p>
            </main>
          </article>
        ))}
      {!showCompleted &&
        notCompleted.map((todo) => (
          <article
            className={`border-2 px-4 py-2 mx-2 my-3 rounded-md shadow-sm ${
              dark ? "bg-stone-200" : "bg-stone-200"
            } text-stone-900 ${
              todo.important && "bg-green-200"
            } flex flex-col space-y-2 md:mx-4 md:my-6 md:px-6 md:py-4`}
            key={todo.id}
          >
            <header>
              <h3>
                <span className="font-bold">title: </span>
                {todo.title}
              </h3>
            </header>
            <main className="flex flex-col space-y-2">
              <p>
                <span className="font-bold">memo: </span>
                <br />
                <span className="px-3 py-2">{todo.memo}</span>
              </p>

              <button
                className={`border-2 px-3 py-2 border-stone-900 text-stone-900
                font-bold rounded-md shadow-sm
                hover:border-stone-900 hover:bg-stone-900 hover:text-stone-100 md:py-3`}
                onClick={() => onComplete(todo.id)}
              >
                Complete
              </button>
            </main>
          </article>
        ))}
    </div>
  );
};

export default TodoList;
