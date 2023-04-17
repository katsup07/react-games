import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  
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
					<GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
				</GridItem>
			</Show>
			<GridItem area='main' >
        <PlatformSelector/>
				<GameGrid selectedGenre={selectedGenre}/>
			</GridItem>
		</Grid>
	);
}

export default App;
