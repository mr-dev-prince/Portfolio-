import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

export function useBlogs() {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => api.getBlogs(),
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
