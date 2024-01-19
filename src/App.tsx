import { useRef, useState } from "react";
import "./App.css";
import TodoList from "./components/todoList";

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const divRef = useRef<number>(0);

  return (
    <>
      <div
        onClick={() => {
          divRef.current = divRef.current + 1;
          console.log(divRef.current);
        }}
        className="w-[100px] h-[100px] bg-red-500"
        // ref={divRef}
      >
        {isChecked && <TodoList />}
        {divRef.current}
      </div>

      <div onClick={() => setIsChecked(!isChecked)}>2</div>
    </>
  );
}

export default App;

// // Props
