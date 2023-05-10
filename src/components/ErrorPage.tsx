import { Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<>
			<Heading as='h1' textAlign='center'>
				Oops something went wrong
			</Heading>
			<Heading as='h2' textAlign='center' color='blue'>
				<Link to='/' >Back to the games page.</Link>
			</Heading>
		</>
	);
};

export default ErrorPage;
