import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { loggedIn, loading } = useContext(AuthContext);
	const location = useLocation();
	// Return if user data is loading
	if (loading) {
		return;
	}

	// Return to desired path if user data is found
	if (loggedIn) return children;

	// If not found, return to login page
	return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
