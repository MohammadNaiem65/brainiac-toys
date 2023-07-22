import logo from './../../../assets/logo.svg';
import './Navbar.css';
import ActiveLink from './ActiveLink';
import { Link } from 'react-router-dom';

const Navbar = () => {
	const user = false;
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
				<ActiveLink to='/blogs'>Blogs</ActiveLink>
			</div>
			<div className='flex items-center gap-x-5'>
				{user ? (
					<>
						<p className='cursor-pointer' title='Naiem'>
							Mohammad
						</p>
						<button className='btn btn-primary'>Log Out</button>
					</>
				) : (
					<Link to='/login' className='btn btn-secondary'>
						Login
					</Link>
				)}
			</div>
		</div>
	);
};

export default Navbar;
