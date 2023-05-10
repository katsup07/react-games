import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import GameDetailPage from './components/GameDetailPage';
import ErrorPage from './components/ErrorPage';
import HomePage from './pages/HomePage';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ path: '', element: <HomePage/> },
			{ path: 'games', element: <HomePage /> },
			{ path: 'games/:id', element: <GameDetailPage /> },
		],
	},
]);

export default router;
