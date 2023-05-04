import localGenres from '../data/genres';
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";


export interface Genre{
  id: number;
  name: string;
  image_background: string;
}

// const useGenres = () => useData<Genre>('/genres'); // used previously when fetching dynamically from server
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: () => 
    apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
  staleTime: 24 * 60 * 60 * 1000, //24 hours
  initialData: {count: localGenres.length, results: localGenres}, // fill cache with local genres to start for 24h
}); // static data

export default useGenres;