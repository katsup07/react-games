import {
	Heading,
	Spinner,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import ExpandableText from './ExpandableText';
import GameAttributes from './GameAttributes';

const GameDetailPage = () => {
	const { id } = useParams();
	const { data: game, isLoading, error } = useGame(id!);

	console.log(game);

	if (isLoading) return <Spinner />;

	if (error || !game) throw error;

	return (
		<>
			<Heading>{game.name}</Heading>
			<ExpandableText content={game.description_raw}></ExpandableText>
			<GameAttributes game={game} />
		</>
	);
};

export default GameDetailPage;
