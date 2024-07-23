import useData from "./useData";

export interface Platform {
    id : number;
    name: string;
    slug: string;
}

const endpoint = "/platforms/lists/parents";
const usePlatforms = () => useData<Platform>(endpoint);

export default usePlatforms;