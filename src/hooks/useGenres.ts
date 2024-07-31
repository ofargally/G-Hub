import { useQuery } from "@tanstack/react-query";
import apiClient, { Response } from "../services/api-client";
import genres from "../data/genres.ts";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//const endpoint = "/genres";
const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<Response<Genre>>("/genres")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, //24 Hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
