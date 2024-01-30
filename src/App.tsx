import React, { FC, useState } from "react";

import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./Model";
import TodoList from "./components/TodoList";

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
      <div className="todo__input">
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </div>{" "}
      {/**todolist */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};
export default App;
