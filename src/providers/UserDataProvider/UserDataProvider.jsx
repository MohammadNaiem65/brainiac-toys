import { createContext } from 'react';

const UserContext = createContext([]);

const UserDataProvider = ({ children }) => {
	// * Module scaffolding
	const userInfo = {};

	return (
		<UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
	);
};

export default UserDataProvider;
