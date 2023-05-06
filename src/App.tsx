import { Grid, GridItem, Show} from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery{
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); // { genreId:, platformId:, sortOrder:, searchText:, }
  
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
              lg: '11rem 1fr'
            }}
            >
        <GridItem area='nav'>
          <NavBar onSearch={ searchText => {
                setGameQuery({...gameQuery, searchText});
                console.log(gameQuery);
              }
              }/>
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' border='1px solid salmon' padding="0.3rem" borderRadius='0.3rem' marginY='0.45rem' marginX='0.1rem'>
            <GenreList selectedGenreId={gameQuery.genreId} onSelectGenre={(genre) => setGameQuery({...gameQuery, genreId: genre.id})}/>
          </GridItem>
        </Show>
        <GridItem area='main' >
            <GameHeading gameQuery={gameQuery}/>
              <PlatformSelector selectedPlatformId={gameQuery.platformId} onSelectPlatform={ (platform) => setGameQuery({...gameQuery, platformId: platform.id})}/>
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </>
	);
}

export default App;
