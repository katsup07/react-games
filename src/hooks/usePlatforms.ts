// https://api.rawg.io/api/platforms/lists/parents

import useData from './useData';
import { Genre } from './useGenres';

export interface Platform{
  id: number;
  name: string;
  slug: string;
}


const usePlatforms = () => useData<Platform>('/platforms/lists/parents');


export default usePlatforms;