import { Outlet } from 'react-router-dom';
import Footer from './pages/Shared/Footer/Footer';
import Navbar from './pages/Shared/Navbar/Navbar';
import loadingImg from './assets/loading.gif';
import { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider/AuthProvider';

function App() {
	const { loading } = useContext(AuthContext);
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
			<img
				className={`w-48 aspect-square fixed z-50 top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] ${
					loading ? 'block' : 'hidden'
				}`}
				src={loadingImg}
				alt='loading image'
			/>
		</>
	);
}

export default App;
