import {
	Heading,
	Spinner,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import ExpandableText from './ExpandableText';
import GameAttributes from './GameAttributes';
import GameTrailer from './GameTrailer';
import React from 'react'
import ReactPlayer from 'react-player/youtube'
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
			<Heading>{game.name}</Heading>
			<ExpandableText content={game.description_raw}></ExpandableText>
			<GameAttributes game={game} />
      <MGameTrailer id={id!}/>
      <ScreenShots id={id!}/>
		</>
	);
};

export default GameDetailPage;
