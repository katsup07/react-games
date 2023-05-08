import {
	HStack,
	List,
	ListItem,
	Image,
	Text,
	Spinner,
	Button,
  Heading,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from './../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {
  const genreId  = useGameQueryStore(s => s.gameQuery.genreId);
  const setGenreId  = useGameQueryStore(s => s.setGenreId);
	const { data, error, isLoading } = useGenres();

	if (error) {
		console.log(error);
		return null;
	}

	if (isLoading) return <Spinner />;
  

	return (
    <>
      <Heading fontSize='2rem' paddingBottom='0.3rem' textAlign='center'>Genres</Heading>
          <List>
            {data?.results.map((genre) => (
              <ListItem key={genre.id} paddingY='0.01rem'>
                <HStack>
                  <Image
                    boxSize='2.5rem'
                    borderRadius='12rem'
                    marginY='0.2rem'
                objectFit='cover'
                    src={getCroppedImageUrl(genre.image_background)}
                  />
                  <Button
                whiteSpace='normal'
                textAlign='left'
                    fontSize={genre.id === genreId ? '1.4rem' : '0.8rem'}
                background={genre.id === genreId? '' : 'transparent'}
                fontWeight={genre.id === genreId ? 'bold' : 'normal'}
                    onClick={() => setGenreId(genre.id)}>
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </List>
    </>
	);
};

export default GenreList;
