import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { Response } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const endpoint = "/platforms/lists/parents";
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<Response<Platform>>(endpoint)
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 Hours
    initialData: { count: platforms.length, results: platforms },
  });
export default usePlatforms;
