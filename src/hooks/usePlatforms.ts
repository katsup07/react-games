import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import localPlatforms from "../data/platforms";
import { Genre } from './useGenres';

export interface Platform{
  id: number;
  name: string;
  slug: string;
}

// https://api.rawg.io/api/platforms/lists/parents
const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, //24 hours
  initialData: {count: localPlatforms.length, results: localPlatforms},
})


export default usePlatforms;

// Before using react query library
// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');