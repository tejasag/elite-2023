import { useState } from "react";

interface Todo {
  name: string;
  isDone: boolean;
}

function Card({
  idx,
  todo,
  markTodo,
  removeTodo,
}: {
  idx: any;
  todo: any;
  markTodo: any;
  removeTodo: any;
}) {
  return (
    <div className="flex flex-row bg-gray-100 p-1 m-2 w-60 justify-between rounded-md">
      <div className={`p-2  ${todo.isDone ? "line-through" : ""}`}>
        {todo.name}
      </div>
      <div>
        <button
          onClick={() => markTodo(idx)}
          className=" rounded-md p-1 m-1 bg-green-300"
        >
          ✅
        </button>
        <button
          onClick={() => removeTodo(idx)}
          className=" rounded-md p-1 m-1 bg-red-300"
        >
          ❌
        </button>
      </div>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState<string>("");

  const addTodo = (v: string) => {
    setTodos([...todos, { name: v, isDone: false }]);
  };

  const markTodo = (i: number) => {
    const newTodos = [...todos];
    newTodos[i].isDone = !newTodos[i].isDone;
    setTodos(newTodos);
  };

  const removeTodo = (i: number) => {
    const newTodos = [...todos];
    newTodos.splice(i, 1);
    setTodos(newTodos);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="bg-gray-200 rounded p-2 m-2"
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add new todo"
          />
          <button className="bg-black text-white p-2 rounded" type="submit">
            Add
          </button>
        </form>
      </div>

      <div>
        {todos.map((x, i) => (
          <Card
            key={i}
            idx={i}
            todo={x}
            markTodo={markTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </>
  );
}

export default App;
