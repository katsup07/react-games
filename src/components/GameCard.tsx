import { Game } from '../hooks/useGames';
import { Image, Card, CardBody, Heading, HStack } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
  const platforms = game.parent_platforms.map(({platform}) => platform);
  const {metacritic: metacriticScore} = game;
  
	return (
		<Card borderRadius={20} overflow='hidden'>
			<Image src={game.background_image} />
			<CardBody>
				<Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconList platforms={platforms}/>
          <CriticScore score={metacriticScore}/>
        </HStack>
			</CardBody>
		</Card>
	);
};

export default GameCard;
