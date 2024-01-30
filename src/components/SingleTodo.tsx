import React from "react";
import { Todo } from "../Model";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return <li>{todo.todo}</li>;
};
export default SingleTodo;
