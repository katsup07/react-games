import { Game } from '../interfaces/Game';
import { Badge } from '@chakra-ui/react';

interface Props {
	score: number;
}

const CriticScore = ({ score }: Props) => {
	let background = score > 80 ? 'green' : score > 50 ? 'yellow' : 'red';

	return (
		<Badge fontSize='1.2rem' colorScheme={background} borderRadius='3rem'>
			{score}
		</Badge>
	);
};

export default CriticScore;
