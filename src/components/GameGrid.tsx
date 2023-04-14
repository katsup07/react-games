import { Text, SimpleGrid, HStack } from '@chakra-ui/react';
import useGames from './../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
	const { data: games, error, isLoading } = useGames();
	const skeletons = [...Array(15).keys()]; // placeholders

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				padding={3}
				spacing={10}>
				{isLoading &&
					skeletons.map((s) => ( // if loading
						<GameCardContainer>
							<GameCardSkeleton key={s}></GameCardSkeleton>
						</GameCardContainer>
					))}
				{games.map(
					(
						game 
					) => (// not loading
						<GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
					)
				)}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
