import { Box, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			borderRadius={15}
			overflow='hidden'
			_hover={{
				transform: 'scale(1.04)',
				transition: 'transform .2s ease-in',
				cursor: 'pointer',
			}}>
			{children}
		</Box>
	);
};

export default GameCardContainer;
