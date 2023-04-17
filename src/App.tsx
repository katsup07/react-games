import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
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
        lg: '9rem 1fr'
      }}
      >
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside' bg='salmon' paddingX="0.2rem" borderRadius='0.3rem'>
					<GenreList/>
				</GridItem>
			</Show>
			<GridItem area='main' >
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
