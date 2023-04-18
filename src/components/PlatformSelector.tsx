import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props{
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data: platforms, error, isLoading } = usePlatforms();
  const platformName = selectedPlatform?.name;

	if (error) return null;

	return (
		<Menu>
			<MenuButton marginX='0.8rem' as={Button} rightIcon={<BsChevronDown />}>
				{ platformName || 'Platforms' } 
			</MenuButton>
			<MenuList>
				{platforms.map((platform) => (
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
