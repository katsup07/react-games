import { HStack, List, ListItem, Image, Text } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from './../services/image-url';

const GenreList = () => {
	const { data: genres, error, isLoading } = useGenres();
	return (
		<List>
			{genres.map((genre) => (
				<ListItem key={genre.id} paddingY="0.3rem">
					<HStack>
            <Image boxSize='2rem' borderRadius='0.2rem' src={getCroppedImageUrl(genre.image_background)}/>
            <Text fontSize='1.1rem'>{genre.name}</Text>
          </HStack>
				</ListItem>
			))}
		</List>
	);
};

export default GenreList;
