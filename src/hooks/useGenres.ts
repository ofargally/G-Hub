import useData from "./useData";

export interface Genre {
    id : number;
    name: string;
}

const endpoint = "/genres";
const useGenres = () => useData<Genre>(endpoint);

export default useGenres;