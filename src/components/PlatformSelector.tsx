import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/usePlatforms';
interface Props{
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
	const { data, error, isLoading } = usePlatforms();
  const platformName = selectedPlatform?.name;

	if (error) return null;

	return (
		<Menu>
			<MenuButton marginX='0.7rem' as={Button} rightIcon={<BsChevronDown />}>
				{ platformName || 'Platforms' } 
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
