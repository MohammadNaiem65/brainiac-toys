import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { loggedIn, loading } = useContext(AuthContext);
	const location = useLocation();
	if (loading) {
		return;
	}
	if (loggedIn) return children;
	return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
