import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import localGenres from '../data/genres';
import ms from 'ms';
import { Genre } from '../interfaces/Genre';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'), //24 hours
		initialData: localGenres, // fill cache with local genres to start for 24h
	}); // static data

export default useGenres;

// const useGenres = () => useData<Genre>('/genres'); // used previously when fetching dynamically from server
