import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Box, Grid, GridItem } from '@chakra-ui/react';

const Layout = () => {
	return (
		<>
			<NavBar />
			<Box padding='1rem'>
				<Outlet />
			</Box>
		</>
	);
};

export default Layout;
