import { Text, SimpleGrid, HStack } from '@chakra-ui/react';
import useGames from './../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';


const GameGrid = () => {
const { games, error, isLoading} = useGames();
const skeletons = [...Array(15).keys()] // placeholders

  

	return (
    <>
      {error && <Text>{ error }</Text>}
          <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={3} spacing={10}>
          {isLoading && skeletons.map(s => <GameCardSkeleton key={s}></GameCardSkeleton>)}{/* If loading */}
            {games.map((game) => ( // not loading
              <GameCard key={game.id} game={game}/>
            ))}
          </SimpleGrid>
    </>
	);
};

export default GameGrid;
