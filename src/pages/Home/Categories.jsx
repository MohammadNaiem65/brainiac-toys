import { BiMath, BiTestTube } from 'react-icons/bi';
import { AiFillRead } from 'react-icons/ai';
import { FcEngineering } from 'react-icons/fc';

const Categories = () => {
	return (
		<div className='container'>
			<h2 className='container-title'>Top Categories</h2>
			<div className='w-3/4 h-36 mx-auto mt-10 text-[7rem] flex justify-between'>
				<div>
					<BiMath className='bg-secondary p-3 rounded' />
					<p className='text-2xl text-center font-bubblegum mt-2'>
						Math
					</p>
				</div>
				<div >
					<FcEngineering className='bg-secondary p-3 rounded' />
					<p className='text-2xl text-center font-bubblegum mt-2'>
						Engineering
					</p>
				</div>
				<div>
					<BiTestTube className='bg-secondary p-3 rounded' />
					<p className='text-2xl text-center font-bubblegum mt-2'>
						Science
					</p>
				</div>
				<div>
					<AiFillRead className='bg-secondary p-3 rounded' />
					<p className='text-2xl text-center font-bubblegum mt-2'>
						Learning
					</p>
				</div>
			</div>
		</div>
	);
};

export default Categories;
