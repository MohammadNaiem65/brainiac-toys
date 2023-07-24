import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
} from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../../firebase/firebase.config';
import { createContext, useState } from 'react';

export const AuthContext = createContext({});
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	// * Handle user
	const [user, setUser] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);

	console.log(user);

	// * Sign Up User
	const createUserWithEmail = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// * Log in user
	const logInUserWithEmail = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	// * Update user data
	const updateUserData = (name, photo) => {
		return updateProfile(auth.currentUser, {
			displayName: name,
			photoURL: photo,
		});
	};

	onAuthStateChanged(auth, (user) => {
		if (user && loggedIn) {
			setUser(user);
		}
	});

	// * Notify user
	const successNotification = (msg) => {
		toast(msg, {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	const errorNotification = (msg) => {
		toast.error(msg, {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});
	};

	// * Handle log out
	const handleLogOut = () => signOut(auth);

	// * Handle loading
	const [loading, setLoading] = useState(false);

	// * Module scaffolding
	const authInfo = {
		createUserWithEmail,
		user,
		setUser,
		logInUserWithEmail,
		loggedIn,
		setLoggedIn,
		updateUserData,
		handleLogOut,
		loading,
		setLoading,
		successNotification,
		errorNotification,
	};

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
			<ToastContainer />
		</AuthContext.Provider>
	);
};

export default AuthProvider;
