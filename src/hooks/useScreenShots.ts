
import { useQuery } from "@tanstack/react-query";
import { ScreenShot } from "../interfaces/ScreenShot"
import APIClient from "../services/api-client"

const useScreenShots = (id: string) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: ['screen-shots', id],
    queryFn: apiClient.getAll,
  });
}

export default useScreenShots;