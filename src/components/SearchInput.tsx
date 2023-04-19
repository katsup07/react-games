import { useRef } from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { FormEvent } from 'react';
import { BsSearch } from 'react-icons/bs';

interface Props{
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const searchInput = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent){
    e.preventDefault();
    const searchText = searchInput?.current?.value;
    if(searchText)
      onSearch(searchText);
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
