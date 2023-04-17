import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data: platforms, error, isLoading } = usePlatforms();

  if(error) return null;

  return (<Menu>
    <MenuButton marginX='0.8rem' as={Button} rightIcon={<BsChevronDown/>}>Platforms</MenuButton>
    <MenuList>
      {platforms.map(platform =>   <MenuItem key={platform.id} fontSize={'0.7rem'}>{platform.name}</MenuItem> )}
    </MenuList>
  </Menu> );
}
 
export default PlatformSelector;