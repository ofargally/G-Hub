import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import genres from "../data/genres.ts";
import ms from "ms";
import { Genre } from "../entities/Genre.ts";

const apiClient = new APIClient<Genre>("/genres");
//const endpoint = "/genres";
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"), //24 Hours
    initialData: genres,
  });

export default useGenres;
