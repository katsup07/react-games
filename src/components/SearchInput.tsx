import { useRef } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FormEvent } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameQueryStore from '../store';

const SearchInput = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText); // only dependent on this function, won't rerender when other values change

  function handleSubmit(e: FormEvent){
    e.preventDefault();
    const searchText = searchInput?.current?.value;
    if(searchText)
      setSearchText(searchText);
  }
  
	return (
		<form onSubmit={handleSubmit}>
      <InputGroup>
          <InputLeftElement children={<BsSearch/>}/>
        <Input
          ref={searchInput}
          borderRadius={20}
          placeholder='Search games'
          variant='filled'
        />
      </InputGroup>
    </form>
	);
};

export default SearchInput;
