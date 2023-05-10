import { Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();
	return (
		<>
    <NavBar/>
			<Box padding='0.5rem'>
        <Heading as='h1' fontSize='1.5rem' textAlign='center'>
                Oops!
          { isRouteErrorResponse(error) ? ' Invalid route. This page does not exist': 'Something went wrong. An unexpected error occured.'}
        </Heading>
        <Heading as='h2' fontSize='1.3rem' textAlign='center' color='blue'>
          <Link to='/' >Back to the games page.</Link>
        </Heading>
      </Box>
		</>
	);
};

export default ErrorPage;
