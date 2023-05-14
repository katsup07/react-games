import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { GameTrailer } from '../interfaces/GameTrailer';

const apiClient = new APIClient<GameTrailer>('games');

const useMovieTrailer = (id: string) =>
	useQuery({
		queryKey: ['game-trailer', id],
		queryFn: () =>
			apiClient.getMovieTrailers(id).then((trailers:GameTrailer) => trailers),
	});

export default useMovieTrailer;
