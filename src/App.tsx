import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery{
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); // { genre: ___ , platform: ___ }
  
	return (
		<Grid
			templateAreas={{
				base: `"nav" 
               "main"`, // mobile
				lg: `"nav nav" 
             "aside main"`, // greater than 1024px
			}}
      templateColumns={{
        base: '1fr',
        lg: '11rem 1fr'
      }}
      >
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside' bg='salmon' paddingX="0.2rem" borderRadius='0.3rem'>
					<GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
				</GridItem>
			</Show>
			<GridItem area='main' >
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={ (platform) => setGameQuery({...gameQuery, platform})}/>
        <SortSelector/>
				<GameGrid gameQuery={gameQuery}/>
			</GridItem>
		</Grid>
	);
}

export default App;
