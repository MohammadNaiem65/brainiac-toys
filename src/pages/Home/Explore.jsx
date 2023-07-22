import bgImage from '../../assets/bg1.jpg';
import { Link } from 'react-router-dom';

const Explore = () => {
	return (
		<div className='relative'>
			<img className='h-[90vh] w-full' src={bgImage} alt='' />
			<div className='large-shadow'></div>
			<div className='h-full w-full text-white text-center font-poppins absolute top-0 left-0 flex flex-col justify-center items-center'>
				<h2 className='text-4xl font-bubblegum leading-[3rem]'>
					Help your children express their <br />
					<span className='container-title'>
						Creativity and Imagination
					</span>
				</h2>
				<p className='w-[40rem] mt-3'>
					Educational toys can help children develop their cognitive
					skills, such as problem-solving, memory, attention and their
					social skills. These toys can help children feel good about
					themselves and their abilities.
				</p>
				<Link to='/all-toys' className='btn btn-primary mt-6'>
					Explore
				</Link>
			</div>
		</div>
	);
};

export default Explore;
