import { HStack, List, ListItem, Image, Text, Spinner, Button } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from './../services/image-url';
import { Genre } from '../hooks/useGenres';

interface Props{
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
	const { data: genres, error, isLoading } = useGenres();

  if(error){
    console.log(error);
    return null;
  }

  if(isLoading) return <Spinner/>

	return (
		<List>
			{genres.map((genre) => (
				<ListItem key={genre.id} paddingY="0.3rem">
					<HStack>
            <Image boxSize='2rem' borderRadius='0.2rem' src={getCroppedImageUrl(genre.image_background)}/>
            <Button fontSize='0.8rem' onClick={() => onSelectGenre(genre)}>{genre.name}</Button>
          </HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
