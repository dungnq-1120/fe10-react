import { Component, useEffect, useRef, useState } from "react";

import "./App.css";
import { getProducts } from "./services/productsApi";
import { IProduct } from "./types/products";
import Button from "./components/shared/button";
import useDebounce from "./hooks/useDebounce";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [value, setValue] = useState<string>("");

  const valueDebounce = useDebounce(value, 3000);

  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response);
    });
  }, []);

  useEffect(() => {
    getProducts({
      title_like: valueDebounce,
    }).then((response) => {
      setProducts(response);
    });
  }, [valueDebounce]);

  return (
    <div>
      <input
        className="bg-red-500 w-[500px] h-[50px]"
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <Button
        onClick={() => {
          
        }}
      >
        Search
      </Button> */}

      {products.map((product) => (
        <div key={product.id}> {product.title}</div>
      ))}
    </div>
  );
}

export default App;

// 2 loai Component

//   - controlled Component
//   - uncontrolled Component

// debounce;
