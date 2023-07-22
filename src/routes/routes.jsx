import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home/Home';
import AllToys from '../pages/AllToys/AllToys';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <App />,
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
		],
	},
]);
