import { useLoaderData } from 'react-router-dom';
import Toy from './Toy';

const AllToys = () => {
	const toys = useLoaderData();
	console.log(toys);
	return (
		<div className='container'>
			{/* Table head */}
			<div className='bg-secondary p-3 rounded text-xl font-bubblegum flex justify-between'>
				<span className='w-2/6'>Name</span>
				<span className='w-2/6'>Seller</span>
				<span>Price</span>
				<span className='px-6'>Details</span>
			</div>
			{/* Toy Body */}
			<div className=''>
				{toys.map((toy) => (
					<Toy key={toy._id} toy={toy} />
				))}
			</div>
		</div>
	);
};

export default AllToys;
