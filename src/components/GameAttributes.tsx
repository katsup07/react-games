import { SimpleGrid, Text } from '@chakra-ui/react';
import genres from '../data/genres';
import platforms from '../data/platforms';
import CriticScore from './CriticScore';
import DefinitionItem from './DefinitionItem';
import { Game } from '../interfaces/Game';

interface Props{
  game?: Game;
}

const GameAttributes = ({game}: Props) => {
  const platforms = game?.parent_platforms.map(({ platform }) => (
		<Text key={platform.id}>{platform.name}</Text>
	));
	const genres = game?.genres.map((genre) => (
		<Text key={genre.id}>{genre.name}</Text>
	));
	const publishers = game?.publishers.map((pub) => (
		<Text key={pub.id}>{pub.name}</Text>
	));
	const metacriticScore = game?.metacritic;
	return (
		<SimpleGrid columns={2} as='dl'>
			<DefinitionItem term='Platforms'>{platforms}</DefinitionItem>
			<DefinitionItem term='Metacritic Score'>
				<CriticScore score={metacriticScore}></CriticScore>
			</DefinitionItem>

			<DefinitionItem term='Genres'>{genres}</DefinitionItem>
			<DefinitionItem term='Publishers'>{publishers}</DefinitionItem>
		</SimpleGrid>
	);
};

export default GameAttributes;
