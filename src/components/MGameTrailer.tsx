import { Box, Heading, Spinner, Text } from '@chakra-ui/react';
import useMTrailers from '../hooks/useMTrailers';

interface Props {
	id: string;
}

const MGameTrailer = ({ id }: Props) => {
	const { data, error, isLoading } = useMTrailers(id);

  if(isLoading)
  return null;

	if (error) throw error;

  if(data?.count === 0)
  return <Text>No trailer available.</Text>

	const firstTrailer = data?.results[0];
	return (
		<Box paddingBottom={2} paddingTop={3}>
      <video
        src={firstTrailer?.data['480']}
        poster={firstTrailer?.preview}
        controls>
        MTrailers
      </video>
    </Box>
	);
};

export default MGameTrailer;
