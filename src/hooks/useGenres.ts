import useData from "./useData";
import genres from '../data/genres';

export interface Genre{
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres'); // used previously when fetching dynamically from server
const useGenres = () => ({data: genres, isLoading: false, error: null}); // static data

export default useGenres;