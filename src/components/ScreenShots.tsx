import { SimpleGrid, Image, Heading, Spinner } from '@chakra-ui/react';
import useScreenShots from '../hooks/useScreenShots';

interface Props {
	id: string;
}

const ScreenShots = ({ id }: Props) => {
	const { data, isLoading, error } = useScreenShots(id);

	if (isLoading) return <Spinner></Spinner>;

	if (error) throw error;

	return (
		<>
			<Heading as='h1' paddingTop='1rem'>
				Screen Shots
			</Heading>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={1.5}>
				{data?.results.map((screenShot) => (
					<Image key={screenShot.id} src={screenShot.image} />
				))}
			</SimpleGrid>
		</>
	);
};

export default ScreenShots;
