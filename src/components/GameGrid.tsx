import { Text, SimpleGrid } from '@chakra-ui/react';
import useGames from './../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import { Game } from './../hooks/useGames';
import filter from '../services/filter';

interface Props{
  gameQuery: GameQuery;  // { genre: ___ , platform: ___ }
}

const GameGrid = ({ gameQuery}: Props) => {
	const { data: gamesData, error, isLoading } = useGames(gameQuery);
  let filteredGames;
  if(gamesData)
    filteredGames = filter(gamesData, gameQuery.genre, gameQuery.platform);
	const skeletons = [...Array(15).keys()]; // placeholders

  if(error)
    return <Text>{error.message}</Text>;

	return (
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				padding={3}
				spacing={5}>
				{isLoading &&
					skeletons.map((s) => ( // if loading
						<GameCardContainer key={s}>
							<GameCardSkeleton ></GameCardSkeleton>
						</GameCardContainer>
					))}
				{filteredGames?.map(
					(
						game 
					) => (// not loading
						<GameCardContainer key={game.id}>
              <GameCard  game={game} />
            </GameCardContainer>
					)
				)}
			</SimpleGrid>
	);
};

export default GameGrid;
