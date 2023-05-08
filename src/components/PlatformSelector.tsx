import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { usePlatform } from '../hooks/usePlatform';
import useGameQueryStore from '../store';


const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  
  const setPlatformId = useGameQueryStore(s => s.setPlatformId);
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatform(platformId);
	

	if (error) return null;

	return (
		<Menu>
			<MenuButton marginX='0.7rem' as={Button} rightIcon={<BsChevronDown />}>
				{ platform?.name || 'Platforms' } 
			</MenuButton>
			<MenuList>
				{data?.results.map((platform) => (
					<MenuItem
						key={platform.id}
						fontSize={'0.7rem'}
						onClick={() => setPlatformId(platform.id)}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
