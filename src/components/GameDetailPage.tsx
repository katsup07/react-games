import { Button, Heading, Spinner, Text } from '@chakra-ui/react';
import { Navigate, useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';
import ExpandableText from './ExpandableText';

const GameDetailPage = () => {
  const { id } = useParams();
  const { data: game, isLoading, error } = useGame(id!);
 



  if(isLoading)
    return <Spinner/>;
  
  if(error || !game) throw error;
  
	return (
		<>
			<Heading>{game.name}</Heading>
      <ExpandableText content={game.description_raw}></ExpandableText>
		</>
	);
};

export default GameDetailPage;
