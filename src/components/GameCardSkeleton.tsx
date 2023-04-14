import { Card, CardBody, Skeleton, SkeletonText, Flex } from '@chakra-ui/react';

const GameCardSkeleton = () => {
	return (
		<Flex  gap='3'>
      <Card borderRadius={20} overflow='hidden' width='600px'>
        <Skeleton height='200px'/>
            <CardBody>
              <SkeletonText/>
            </CardBody>
      </Card>
    </Flex>
	);
};

export default GameCardSkeleton;
