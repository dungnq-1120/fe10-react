import { memo } from "react";
import useGetProducts from "./useGetProducts";

export const ProductList = memo(function ProductList() {
  const data = useGetProducts();
  console.log("list", data);

  return <div>Products List</div>;
});
