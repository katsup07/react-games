import { ImageProps, Image } from '@chakra-ui/react';
import bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';

interface Props{
  rating: number;
}

const Emoji = ( { rating }: Props) => {
  if(rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps} = {
    3: { src: meh, alt: 'meh', boxSize: '40px'},
    4: { src: thumbsUp, alt: 'recommended', boxSize: '30px'},
    5: { src: bullsEye, alt: 'exceptional', boxSize: '40px'},
};

  // else >= 4
  return (<Image {...emojiMap[rating]}/>);
}
 
export default Emoji;