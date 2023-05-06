import { Heading } from '@chakra-ui/react';
import { Platform } from '../hooks/usePlatforms';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
	gameQuery: GameQuery;
}

// games
// [Genre] games
// [Platform] games
// [Platform] [Genre] games
const GameHeading = ({ gameQuery }: Props) => {
  const { data: genreData } = useGenres();
  const { data: platformData } = usePlatforms();
  const genreName = genreData?.results.find( genre => genre.id === gameQuery.genreId)?.name;
  const platformName = platformData?.results.find( platform => platform.id === gameQuery.platformId)?.name
	const heading = ` ${platformName || ''} ${ genreName || '' } Games`;

	return (
		<Heading
			as='h1'
			marginX='0.7rem'
			marginY='0.5rem'
			padding='0.3rem'
			border='1px solid salmon'
			borderRadius='0.2rem'
      fontSize='2.45rem'
			textAlign='center'>
			{heading}
		</Heading>
	);
};

export default GameHeading;
