import ReactPlayer from "react-player";
import useGameTrailers from "../hooks/useGameTrailers";
import { Text } from "@chakra-ui/react";
interface Props{
  id?: string;
}
const GameTrailer = ({id}: Props) => {
  if(!id)
   throw Error('No id provided for game trailer');

  const {data} = useGameTrailers(id);
  // trailers for GTAV, Stardew Valley, and Nier:Automata exist. Many games have no trailers.
  if(data?.count === 0)
    return <Text>No trailer available.</Text>

  console.log(data);
  return (<ReactPlayer url={data?.results[0].data['480']} controls/>  );
}
 
export default GameTrailer;