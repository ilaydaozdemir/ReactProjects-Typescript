import React, { FC } from "react";
import { Todo } from "../Model";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: FC<Props> = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos__list">
      {todos.map((t, i) => (
        <ul key={i}>
          <li>{t.todo}</li>
        </ul>
      ))}
    </div>
  );
};
export default TodoList;
