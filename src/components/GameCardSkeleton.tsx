import { Card, CardBody, Skeleton, SkeletonText, Flex } from '@chakra-ui/react';
import GameCardContainer from './GameCardContainer';

const GameCardSkeleton = () => {
	return (
		<Card>
			<Skeleton height='200px' />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
