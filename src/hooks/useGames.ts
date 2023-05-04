import { Genre } from './useGenres';
import { GameQuery } from '../App';
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import { Platform } from '../hooks/usePlatforms';

export interface GamesData{
    results: Game[]
}
export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
	genres: Genre[];
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<GamesData>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: () => apiClient.get<FetchResponse<GamesData>>('/games', {
    params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
      			ordering: gameQuery.sortOrder,
      			search: gameQuery.searchText,
      		},
  }).then(res => res.data),
  staleTime: 60 * 60 * 1000, 
})

export default useGames;

// Before using react query library
	// useData<Game>(
	// 	'/games',
	// 	{
	// 		params: {
	// 			ordering: gameQuery.sortOrder,
	// 			search: gameQuery.searchText,
	// 		},
	// 	},
	// 	[gameQuery]
	// );
