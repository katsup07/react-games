import { Text, SimpleGrid, Box, Button, Spinner } from '@chakra-ui/react';
import useGames from './../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';
import InfiniteScroll from 'react-infinite-scroll-component';
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

  const totalFetchedGamesCount = data?.pages.reduce((total, page) => total + page.results.length,0);
	return (
		<InfiniteScroll
			dataLength={ totalFetchedGamesCount || 0}
			next={fetchNextPage}
			hasMore={!!hasNextPage}
			loader={<Spinner/>}>
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
			</SimpleGrid>
		</InfiniteScroll>
	);
};

export default GameGrid;

// == Button to use instead of loading on scroll
	/* <Box textAlign='center' paddingY='0.6rem'>
					{hasNextPage && (
						<Button
							fontSize='1.6rem'
							paddingX='4.5rem'
							paddingY='1.5rem'
							onClick={() => fetchNextPage()}
							disabled={isFetchingNextPage}>
							{isFetchingNextPage ? 'Loading...' : 'Load More'}
						</Button>
					)}
				</Box> */

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
