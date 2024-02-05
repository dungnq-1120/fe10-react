import { useEffect } from "react";

import "./App.css";
import { getProducts } from "./services/productsApi";
import { useAppDispatch, useAppSelector } from "./utils/redux";

import { getProductsAction } from "./redux/reducer/product.reducer";

function App() {
  const data = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
    getProducts({
      _page: 1,
    })
      .then((response) => {
        // dispatch(getProductsSuccess(response.data, response.pagination));
      })
      .catch(() => {
        // dispatch(getProductsFail());
      });
  }, []);

  console.log(data);

  return <div> </div>;
}

export default App;
