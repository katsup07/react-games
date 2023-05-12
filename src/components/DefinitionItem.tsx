import { Box, Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	term: string;
	children?: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
	return (
		<Box marginY='2rem'>
			<Heading as='dt' fontSize='md' color='gray.600'>
				{term}
			</Heading>
			<dd>{children}</dd>
		</Box>
	);
};

export default DefinitionItem;
// const GameAttributes = ({ title, attributes, children }: Props) => {
// 	if (children)
// 		return (
// 			<Box textAlign='center' marginBottom='1rem'>
// 				<Heading fontSize='1.2rem' color='grey' marginTop='0.3rem' marginBottom='0.2rem'>
// 					{title}
// 				</Heading>
// 				<Box>{children}</Box>
// 			</Box>
// 		);
// 	return (
// 		<Box textAlign='center' marginBottom='1rem'>
// 			<Heading fontSize='1.2rem' color='grey' marginTop='0.3rem' marginBottom='0.2rem'>
// 				{title}
// 			</Heading>
// 			<Text>
// 				{typeof attributes === 'string' ? (
// 					<Text>{attributes}</Text>
// 				) : (
// 					attributes?.map((attribute) => <Text>{attribute}</Text>)
// 				)}
// 			</Text>
// 		</Box>
// 	);
// };
