import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';
import useGameQueryStore from '../store';

const NavBar = () => {
  const gameQuery = useGameQueryStore();
	return (
		<HStack justifyContent='space-between' padding='10px'>
			<Link to="/" onClick={() => gameQuery.setSearchText('')}>
			  <Image src={logo} boxSize='60px'/>
			</Link>
      <SearchInput/>
      <ColorModeSwitch/>
		</HStack>
	);
};

export default NavBar;
