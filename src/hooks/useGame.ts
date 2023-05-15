import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import Game from '../interfaces/Game';
import { GameQuery } from '../store';

const apiClient = new APIClient<Game>('games');

const useGame = (slug: string) =>
	useQuery({
		queryKey: ['games', slug],
		queryFn: () => apiClient.get(slug).then((game: Game) => game),
	});

export default useGame;
