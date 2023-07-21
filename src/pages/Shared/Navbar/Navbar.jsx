import { Link, NavLink } from 'react-router-dom';
import logo from './../../../assets/logo.svg';
import './Navbar.css';
import ActiveLink from './ActiveLink';

const Navbar = () => {
	const user = true;
	return (
		<div className='bg-[#FFF7F3] font-bubblegum text-xl mx-auto px-[8.885%] py-5 flex items-center justify-between'>
			<div className='flex items-center'>
				<img className='w-28' src={logo} alt='Brainiac Toys logo' />
				<h1 className='text-4xl font-bubblegum'>Brainiac Toys</h1>
			</div>
			<div className='flex gap-x-6'>
				<ActiveLink to='/'>Home</ActiveLink>
				<ActiveLink to='/all-toys'>All Toys</ActiveLink>
				<ActiveLink to='/my-toys'>My Toys</ActiveLink>
				<ActiveLink to='/add-toy'>Add a Toy</ActiveLink>
				<ActiveLink to='/blog'>Blog</ActiveLink>
			</div>
			<div className='flex items-center gap-x-5'>
				{user ? (
					<>
						<p>Mohammad</p>
						<button className='bg-primary px-4 py-2 rounded transform duration-300 hover:-translate-y-2'>
							Log Out
						</button>
					</>
				) : (
					<button className='bg-secondary px-4 py-2 rounded transform duration-300 hover:-translate-y-2'>
						Login
					</button>
				)}
			</div>
		</div>
	);
};

export default Navbar;
