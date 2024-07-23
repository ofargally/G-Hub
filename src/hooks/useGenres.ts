//import useData from "./useData";
import genres from "../data/genres.ts";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

//const endpoint = "/genres";
const useGenres = () => ({ data: genres, isLoading: false, error: null }); //useData<Genre>(endpoint);

export default useGenres;
