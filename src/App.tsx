import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`, // mobile
				lg: `"nav nav" "aside main"`, // greater than 1024px
			}}>
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
			<Show above='lg'>
				<GridItem area='aside' bg='gold'>
					Aside
				</GridItem>
			</Show>
			<GridItem area='main' bg='dodgerblue'>
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
