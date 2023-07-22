import footer from '../../../assets/footer.png';
import logo from '../../../assets/logo.svg';
import ActiveLink from '../Navbar/ActiveLink';
import {
	FaFacebook,
	FaTwitter,
	FaEnvelope,
	FaPinterest,
} from 'react-icons/fa6';

const Footer = () => {
	return (
		<div className='h-[19.25rem] mt-20 text-white relative'>
			<img src={footer} alt='' />
			<div className='w-full h-full px-12 font-poppins absolute inset-0 flex flex-col justify-center'>
				<div className='w-full px-20 flex justify-between items-center'>
					<div>
						<img className='w-28' src={logo} alt='' />
						<h2 className='text-4xl font-bubblegum mt-3'>
							Brainiac Toys
						</h2>
						<p className='font-poppins mt-8'>Terms & Conditions</p>
					</div>
					<div>
						<h3 className='text-xl font-bubblegum'>Site Map</h3>
						<div className='flex flex-col gap-y-[0.375rem] mt-5'>
							<ActiveLink to='/'>Home</ActiveLink>
							<ActiveLink to='/all-toys'>All Toys</ActiveLink>
							<ActiveLink to='/my-toys'>My Toys</ActiveLink>
							<ActiveLink to='/add-toy'>Add a Toy</ActiveLink>
							<ActiveLink to='/blog'>Blog</ActiveLink>
						</div>
					</div>
					<div>
						<input className='p-2 text-gray-400 rounded block' type='email' placeholder='Email' />
						<button className='btn btn-primary mt-3'>Subscribe</button>
                        <p className='mt-8'>Find us on:</p>
						<div className='text-white text-2xl mt-2 flex gap-3'>
							<FaFacebook />
							<FaTwitter />
							<FaEnvelope />
							<FaPinterest />
						</div>
					</div>
				</div>
				<p className='text-center mt-5'>
					&copy; 2023 Brainiac Toys . All rights reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;
