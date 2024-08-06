//Store to hold our GameQuery Object - Will be implemnted using Zustand
//This makes us avoid prop drilling (aka passing the gameQuery object down to all the components)
import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}
//Create a custom hook to use the store
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId: number) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setSortOrder: (sortOrder: string) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
