import { Text, SimpleGrid, HStack, filter } from '@chakra-ui/react';
import useGames from './../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';

interface Props{
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre}: Props) => {
	const { data: games, error, isLoading } = useGames();
	const skeletons = [...Array(15).keys()]; // placeholders

  function filterGames(){
    if(!selectedGenre)
      return games;
    // else 
    return games.filter( game => game.genres.some(genre => genre.name === selectedGenre.name));
  }

	return (
		<>
			{error && <Text>{error}</Text>}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
				padding={3}
				spacing={5}>
				{isLoading &&
					skeletons.map((s) => ( // if loading
						<GameCardContainer key={s}>
							<GameCardSkeleton ></GameCardSkeleton>
						</GameCardContainer>
					))}
				{filterGames().map(
					(
						game 
					) => (// not loading
						<GameCardContainer key={game.id}>
              <GameCard  game={game} />
            </GameCardContainer>
					)
				)}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
