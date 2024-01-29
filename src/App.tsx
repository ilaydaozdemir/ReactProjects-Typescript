import React, { FC, useState } from "react";

import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./Model";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <div className="container">
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/**todolist */}
      {todos.map((t, i) => (
        <ul key={i}>
          <li>{t.todo}</li>
        </ul>
      ))}
    </div>
  );
};
export default App;
