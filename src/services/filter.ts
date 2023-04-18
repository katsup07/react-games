import { Genre } from '../hooks/useGenres';
import { Platform  } from '../hooks/usePlatforms';
import { Game } from '../hooks/useGames';

function filter(games: Game[], selectedGenre: Genre | null, selectedPlatform: Platform | null){
  // == helper functions ==
  const filterByGenre = (gamesSubset: Game[]) => gamesSubset.filter( game => game.genres.some(genre => genre.name === selectedGenre?.name));

  const filterByPlatform = (gamesSubset: Game[]) => gamesSubset.filter( game => game.parent_platforms.some(({platform}) => platform.name === selectedPlatform?.name));
  
  // == filters ==
  if(selectedGenre && selectedPlatform)
    return filterByPlatform(filterByGenre(games));

  if(selectedGenre)
    return filterByGenre(games);

  if(selectedPlatform)
    return filterByPlatform(games);
  // else apply no filter
  return games;
}

export default filter;