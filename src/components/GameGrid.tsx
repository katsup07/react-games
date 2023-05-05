import { Text, SimpleGrid, Box, Button } from '@chakra-ui/react';
import useGames from './../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import { Game } from './../hooks/useGames';
import filter from '../services/filter-service';
import React from 'react';

interface Props {
	gameQuery: GameQuery; // { genre: ___ , platform: ___ }
}

const GameGrid = ({ gameQuery }: Props) => {
	const {
		data,
		error,
		isLoading,
		fetchNextPage,
		isFetchingNextPage,
    hasNextPage,
	} = useGames(gameQuery);
	const skeletons = [...Array(15).keys()]; // placeholders
  console.log('data: ', data);
	if (error) return <Text>{error.message}</Text>;

	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
			padding={3}
			spacing={5}>
			{isLoading &&
				skeletons.map(
					(
						s // if loading
					) => (
						<GameCardContainer key={s}>
							<GameCardSkeleton></GameCardSkeleton>
						</GameCardContainer>
					)
				)}
			{data?.pages.map((page, index) => (
				<React.Fragment key={index}>
					{page.results.map((game) => (
						<GameCardContainer key={game.id}>
							<GameCard game={game} />
						</GameCardContainer>
					))}
				</React.Fragment>
			))}
			<Box textAlign='center' paddingY='0.6rem'>
				{hasNextPage && <Button
					fontSize='1.6rem'
					paddingX='4.5rem'
					paddingY='1.5rem'
					onClick={() => fetchNextPage()}
					disabled={isFetchingNextPage}>
					{isFetchingNextPage ? 'Loading...' : 'Load More'}
				</Button>}
			</Box>
		</SimpleGrid>
	);
};

export default GameGrid;

// == Before adding infinite query
// const GameGrid = ({ gameQuery }: Props) => {
// 	const {
// 		data: data,
// 		error,
// 		isLoading,
// 		fetchNextPage,
// 		isFetchingNextPage,
// 	} = useGames(gameQuery);
// 	let filteredGames;
// 	if (data)
// 		filteredGames = filter(data, gameQuery.genre, gameQuery.platform);
// 	const skeletons = [...Array(15).keys()]; // placeholders

// 	if (error) return <Text>{error.message}</Text>;

// 	return (
// 		<SimpleGrid
// 			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
// 			padding={3}
// 			spacing={5}>
// 			{isLoading &&
// 				skeletons.map(
// 					(
// 						s // if loading
// 					) => (
// 						<GameCardContainer key={s}>
// 							<GameCardSkeleton></GameCardSkeleton>
// 						</GameCardContainer>
// 					)
// 				)}
// 			{filteredGames?.map(
// 				(
// 					game // not loading
// 				) => (
// 					<GameCardContainer key={game.id}>
// 						<GameCard game={game} />
// 					</GameCardContainer>
// 				)
// 			)}
// 			<Box textAlign='center' paddingY='0.6rem'>
// 				<Button
// 					fontSize='1.6rem'
// 					paddingX='4.5rem'
// 					paddingY='1.5rem'
// 					onClick={() => fetchNextPage()}
//           disabled={isFetchingNextPage}
//           >
//           {isFetchingNextPage ? 'Loading...' : 'Load More'}
// 				</Button>
// 			</Box>
// 		</SimpleGrid>
// 	);
// };

// export default GameGrid;
