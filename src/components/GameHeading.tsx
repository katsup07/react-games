import { Heading } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {
	gameQuery: GameQuery;
}

// games
// [Genre] games
// [Platform] games
// [Platform] [Genre] games
const GameHeading = ({ gameQuery }: Props) => {
	const heading = ` ${gameQuery.platform?.name || ''} ${
		gameQuery.genre?.name || ''
	} Games`;

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
