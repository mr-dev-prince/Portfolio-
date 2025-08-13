import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => api.getBlogs(),
    keepPreviousData: true,
  });
}
