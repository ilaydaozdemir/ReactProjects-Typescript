import React, { FC, useState } from "react";

import "./App.css";
import InputFeild from "./components/InputFeild";

const App: FC = () => {
  const [todo, setTodo] = useState<string>("");
  console.log(todo);
  return (
    <div className="container">
      <InputFeild todo={todo} setTodo={setTodo} />
    </div>
  );
};
export default App;
