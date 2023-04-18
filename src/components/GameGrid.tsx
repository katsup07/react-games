import { Text, SimpleGrid, HStack, filter } from '@chakra-ui/react';
import useGames from './../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { Platform  } from '../hooks/usePlatforms';
import { Game } from './../hooks/useGames';

interface Props{
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({ selectedGenre, selectedPlatform}: Props) => {
	const { data: games, error, isLoading } = useGames();
	const skeletons = [...Array(15).keys()]; // placeholders

  function filterGames(){
    // == helper functions ==
    const filterByGenre = (gamesSubset: Game[]) => gamesSubset.filter( game => game.genres.some(genre => genre.name === selectedGenre?.name));

    const filterByPlatform = (gamesSubset: Game[]) => gamesSubset.filter( game => game.parent_platforms.some(({platform}) => platform.name === selectedPlatform?.name));
    
    // == filters ==
    if(selectedGenre && selectedPlatform)
      return filterByPlatform(filterByGenre(games));

    if(selectedGenre)
      return filterByGenre(games);

    if(selectedPlatform)
      return filterByPlatform(games);
    // else apply no filter
    return games;
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
