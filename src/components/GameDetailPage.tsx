import { Box, Heading, SimpleGrid, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import ExpandableText from './ExpandableText';
import GameAttributes from './GameAttributes';
import GameTrailer from './GameTrailer';
import React from 'react';
import ReactPlayer from 'react-player/youtube';
import MGameTrailer from './MGameTrailer';
import ScreenShots from './ScreenShots';

// Only loads the YouTube player

const GameDetailPage = () => {
	const { id } = useParams();
	const { data: game, isLoading, error } = useGame(id!);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	return (
		<>
			<SimpleGrid columns={{ base: 1, md: 2 }}>
				<Box>
					<Heading>{game.name}</Heading>
					<ExpandableText content={game.description_raw}></ExpandableText>
					<GameAttributes game={game} />
				</Box>
				<Box>
					<MGameTrailer id={id!} />
					<ScreenShots id={id!} />
				</Box>
			</SimpleGrid>
		</>
	);
};

export default GameDetailPage;
