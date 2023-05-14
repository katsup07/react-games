import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import { Mtrailer } from "../interfaces/MTrailer";


const useMtrailers = (id: string) => {
  const apiClient = new APIClient<Mtrailer>(`/games/${id}/movies`);
  return useQuery({
  queryKey: ['trailers', id],
  queryFn: apiClient.getAll,
});
}

export default useMtrailers;