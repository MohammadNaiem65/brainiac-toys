import { NavLink } from 'react-router-dom';

const ActiveLink = ({ children, to }) => {
	return (
		<NavLink
			className={({ isActive }) =>
				isActive ? 'nav-link active-link' : 'nav-link'
			}
			to={to}>
			{children}
		</NavLink>
	);
};

export default ActiveLink;
