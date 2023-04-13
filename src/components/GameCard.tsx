import { Game } from '../hooks/useGames';
import { Image, Card, CardBody, Heading, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
  const platforms = game.parent_platforms.map(({platform}) => platform);
  
	return (
		<Card borderRadius={20} overflow='hidden'>
			<Image src={game.background_image} />
			<CardBody>
				<Heading fontSize='2xl'>{game.name}</Heading>
        <PlatformIconList platforms={platforms}/>
			</CardBody>
		</Card>
	);
};

export default GameCard;
