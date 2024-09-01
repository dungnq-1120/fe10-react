import restClient from "./restClient";
import { IProductResponse } from "./type";

export function getProducts(params?: object) {
  return restClient<IProductResponse>({
    url: "products",
    params,
  });
}
