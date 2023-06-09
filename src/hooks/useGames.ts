import useGameQueryStore from '../store';
import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';
import ms from 'ms';
import Game from '../interfaces/Game';

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
	const gameQuery = useGameQueryStore((s) => s.gameQuery);
	return useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, allPages) => {
			// return lastPage.results.length > 0 ? allPages.length + 1 : undefined;
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		staleTime: ms('24h'), //24 hours
	});
};

export default useGames;

// == Using Finite Query
// const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<GamesData>, Error>({
//   queryKey: ['games', gameQuery],
//   queryFn: () => apiClient.getAll(
//     {
//     params: {
//             genres: gameQuery.genre?.id,
//             parent_platforms: gameQuery.platform?.id,
//       			ordering: gameQuery.sortOrder,
//       			search: gameQuery.searchText,
//       		},
//   }
//   ),
//   staleTime: 60 * 60 * 1000,
// })

// export default useGames;

// == Before using react query library
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
