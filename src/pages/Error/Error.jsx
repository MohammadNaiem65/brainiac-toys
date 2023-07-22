import { Link } from 'react-router-dom';
import errImg from '../../assets/404.gif';

const Error = () => {
	
	return (
		<div className='w-full h-screen bg-white flex justify-center items-center'>
			<img className='' src={errImg} alt='' />
            <Link to='/' className="btn btn-primary absolute top-3/4 mt-10">Go to Home</Link>
		</div>
	);
};

export default Error;
