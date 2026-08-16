import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useBlogs(pageSize = 5) {
  return useInfiniteQuery({
    queryKey: ["blogs", pageSize],
    queryFn: ({ pageParam = 1 }) => api.getBlogs(pageParam, pageSize),
    getNextPageParam: (lastPage, allPages) => {
      const totalPages = lastPage.meta.pagination.pageCount;
      const currentPage = lastPage.meta.pagination.page;
      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    keepPreviousData: true,
  });
}

export function useWorks() {
  return useQuery({
    queryKey: ["works"],
    queryFn: () => api.getWorks(),
    keepPreviousData: true,
  });
}

export function useExperiences() {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: () => api.getExperiences(),
    keepPreviousData: true,
  });
}

export function useBlogById(id) {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => api.getBlog(id),
    keepPreviousData: true,
  });
}
