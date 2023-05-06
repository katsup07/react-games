import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/usePlatforms';
import { usePlatform } from '../hooks/usePlatform';
interface Props{
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
	const { data, error, isLoading } = usePlatforms();
  const platform = usePlatform(selectedPlatformId);

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
						onClick={() => onSelectPlatform(platform)}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default PlatformSelector;
