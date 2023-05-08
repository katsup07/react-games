import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

function App() {
	// const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); // { genreId:, platformId:, sortOrder:, searchText:, }
	return (
		<>
			<Grid
				templateAreas={{
					base: `"nav" 
                     "main"`, // mobile
					lg: `"nav nav" 
                   "aside main"`, // greater than 1024px
				}}
				templateColumns={{
					base: '1fr',
					lg: '11rem 1fr',
				}}>
				<GridItem area='nav'>
					<NavBar />
				</GridItem>
				<Show above='lg'>
					<GridItem
						area='aside'
						border='1px solid salmon'
						padding='0.3rem'
						borderRadius='0.3rem'
						marginY='0.45rem'
						marginX='0.1rem'>
						<GenreList />
					</GridItem>
				</Show>
				<GridItem area='main'>
					<GameHeading />
					<PlatformSelector />
					<SortSelector />
					<GameGrid />
				</GridItem>
			</Grid>
		</>
	);
}

export default App;
