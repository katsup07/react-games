import { Game } from '../hooks/useGames';
import { Image, Card, CardBody, Heading, HStack, Flex } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import GameCardContainer from './GameCardContainer';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const platforms = game.parent_platforms.map(({ platform }) => platform);
	const { metacritic: metacriticScore } = game;
	const croppedImageUrl = getCroppedImageUrl(game.background_image);

	return (
		<Card>
			<Image src={croppedImageUrl} />
			<CardBody>
				<Heading fontSize='2xl'>{game.name}</Heading>
				<HStack justifyContent='space-between'>
					<PlatformIconList platforms={platforms} />
					<CriticScore score={metacriticScore} />
				</HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
