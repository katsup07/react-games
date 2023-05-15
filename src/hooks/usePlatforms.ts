import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';
import localPlatforms from '../data/platforms';
import ms from 'ms';
import Platform from '../interfaces/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');
// https://api.rawg.io/api/platforms/lists/parents
const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: apiClient.getAll,
		staleTime: ms('24h'), //24 hours
		initialData: localPlatforms,
	});

export default usePlatforms;

// Before using react query library
// const usePlatforms = () => useData<Platform>('/platforms/lists/parents');
