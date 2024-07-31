import { useQuery } from "@tanstack/react-query";
import APIClient, { Response } from "../services/api-client";
import genres from "../data/genres.ts";

const apiClient = new APIClient<Genre>("/genres");
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//const endpoint = "/genres";
const useGenres = () =>
  useQuery<Response<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 Hours
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
