import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';
import { usePlatform } from '../hooks/usePlatform';
import { useGenre } from '../hooks/useGenre';

interface Props {
	gameQuery: GameQuery;
}

// games
// [Genre] games
// [Platform] games
// [Platform] [Genre] games
const GameHeading = ({ gameQuery }: Props) => {
  const genreName = useGenre(gameQuery.genreId);
  const platform = usePlatform( gameQuery.platformId);
	const heading = ` ${platform?.name || ''} ${ genreName || '' } Games`;

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
