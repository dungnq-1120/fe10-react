import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function useGetProducts() {
  const { data, isLoading, isFetching } = useQuery({
    queryKey: ["abc"],
    queryFn: () => {
      return axios("https://dummyjson.com/products");
    },
    enabled: true,
    refetchInterval: 5000,
    // staleTime: Infinity,
  });

  console.log({ isLoading, isFetching });

  return { data, isLoading, isFetching };
}
