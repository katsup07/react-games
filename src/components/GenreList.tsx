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
import { Genre } from '../hooks/useGenres';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	const { data: genres, error, isLoading } = useGenres();

	if (error) {
		console.log(error);
		return null;
	}

	if (isLoading) return <Spinner />;

	return (
    <>
      <Heading fontSize='1.8rem' color='#ffa07a' >Genres</Heading>
          <List>
            {genres.map((genre) => (
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
                    fontSize={genre.name === selectedGenre?.name ? '1.4rem' : '0.8rem'}
                background={genre.name === selectedGenre?.name ? '' : 'transparent'}
                fontWeight={genre === selectedGenre ? 'bold' : 'normal'}
                    onClick={() => onSelectGenre(genre)}>
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
