import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Grid, GridItem } from '@chakra-ui/react';

const Layout = () => {
	return (
		<>
			<NavBar />
			<Outlet />
		</>
	);
};

export default Layout;
