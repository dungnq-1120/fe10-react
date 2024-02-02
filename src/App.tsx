import { useEffect, useState } from "react";

import "./App.css";
import { getProducts } from "./services/productsApi";
import { IProduct } from "./types/products";
import { useAppDispatch, useAppSelector } from "./utils/redux";
import {
  decrementedAction,
  incrementedAction,
} from "./redux/action/counter.actions";

function App() {
  const [_, setProducts] = useState<IProduct[]>([]);

  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch(() => {
        console.log("acb");
        // return redirect("/login");
      });
  }, []);

  return (
    <div>
      Home page
      <h1> {counter}</h1>
      <button
        onClick={() => {
          dispatch(incrementedAction());
        }}
      >
        Add
      </button>
      ---------------
      <button
        onClick={() => {
          dispatch(decrementedAction());
        }}
      >
        Sub
      </button>
    </div>
  );
}

export default App;
