import Game from '../interfaces/Game';
import { Image, Card, CardBody, Heading, HStack, Text } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	const platforms = game.parent_platforms.map(({ platform }) => platform);
	const { metacritic: metacriticScore } = game;
	const croppedImageUrl = getCroppedImageUrl(game.background_image);

	// const navigate = useNavigate();
	// function navigateToGameDetailPage(){
	//   console.log(game);
	//   const gameDetailsId = game.name.split(' ').join('-')
	//   navigate(`/games/${game.slug}`);
	// }

	return (
		<Link to={'/games/' + game.slug}>
			<Card /* onClick={navigateToGameDetailPage} */>
				<Image src={croppedImageUrl} />
				<CardBody>
					<Heading fontSize='2xl'>{game.name}</Heading>
					<HStack justifyContent='space-between'>
						<PlatformIconList platforms={platforms} />
						<HStack>
							<CriticScore score={metacriticScore} />
							<Emoji rating={game.rating_top} />
						</HStack>
					</HStack>
				</CardBody>
			</Card>
		</Link>
	);
};

export default GameCard;
