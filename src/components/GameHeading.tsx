import { Heading } from '@chakra-ui/react';
import { usePlatform } from '../hooks/usePlatform';
import { useGenre } from '../hooks/useGenre';
import useGameQueryStore from '../store';

const GameHeading = () => {
  const genreId = useGameQueryStore(s => s.gameQuery.genreId);
  const genreName = useGenre(genreId);
  
  const platformId = useGameQueryStore(s => s.gameQuery.platformId);
  const platform = usePlatform(platformId);


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
