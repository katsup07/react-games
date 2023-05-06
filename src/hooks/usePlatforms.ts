import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import localPlatforms from "../data/platforms";

export interface Platform{
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');
// https://api.rawg.io/api/platforms/lists/parents
const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, //24 hours
  initialData: localPlatforms,
})


export default usePlatforms;

// Before using react query library
// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');