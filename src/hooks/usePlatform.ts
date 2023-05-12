import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../interfaces/Platform';

export const usePlatform = (id?: number) => {
	const { data: platforms } = usePlatforms();
	return platforms?.results.find((platform) => platform.id === id);
};
