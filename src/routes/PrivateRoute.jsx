import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loggedIn, loading } = useContext(AuthContext);
    const location = useLocation();

    // Return if user data is loading
    if (loading) {
        return;
    }

    // Return to desired path if user data is found
    else if (user && loggedIn) {
        return children;
    }

    // If user data not found, return to login page
    else if (!loading && !user) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }
};

export default PrivateRoute;
