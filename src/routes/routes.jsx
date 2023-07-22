import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import AllToys from '../pages/AllToys/AllToys';
import Error from '../pages/Error/Error';
import Blogs from '../pages/Blogs/Blogs';
import ToyDetails from '../pages/ToyDetails/ToyDetails';
import Login from '../pages/Login/Login';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/all-toys',
				element: <AllToys />,
				loader: () => fetch('http://localhost:5000/toys'),
			},
			{
				path: '/toy/:id',
				element: <ToyDetails />,
				loader: ({ params }) =>
					fetch(`http://localhost:5000/toy/${params.id}`),
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/blogs',
				element: <Blogs />,
			},
		],
	},
]);
