import { useEffect, useState } from "react";

import TodoItem from "./components/todoItem";
import { Todo } from "./types";

export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  });

  const addTodo = () => {
    setTodoList([
      ...todoList,
      {
        title: inputValue,
        isDone: false,
        id: `${Math.random() * 100000}`,
      },
    ]);

    setInputValue("");
  };

  const handleChecked = (id: string) => {
    const index = todoList.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      const todoListClone = [...todoList];
      todoListClone[index] = {
        ...todoList[index],
        isDone: !todoList[index].isDone,
      };
      setTodoList(todoListClone);
    }
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();

    const index = todoList.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      const todoListClone = [...todoList];
      todoListClone.splice(index, 1);
      setTodoList(todoListClone);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="w-[200px] mr-3 border"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="border bg-green-700 text-yellow-50 disabled:bg-slate-500 disabled:cursor-not-allowed"
          onClick={addTodo}
          disabled={!inputValue}
        >
          Add todo
        </button>
      </div>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}
