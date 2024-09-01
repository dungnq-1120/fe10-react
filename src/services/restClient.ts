import axios from "axios";

const BASE_URL = "http://localhost:4444/api";

export default function restClient<T>({
  url,
  method = "GET",
  params,
  data,
}: {
  url: string;
  method?: "POST" | "GET" | "PUT" | "PATCH" | "DELETE";
  params?: object;
  data?: any;
}) {
  return axios({
    url: `${BASE_URL}/${url}`,
    method,
    params,
    data,
  })
    .then((res) => {
      return res.data as T;
    })
    .catch((err) => {
      throw err;
    });
}
