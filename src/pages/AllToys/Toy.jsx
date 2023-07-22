import { Link } from 'react-router-dom';

const Toy = ({ toy }) => {
	const { _id, img, name, category, seller_name, available_quantity, price } =
		toy;
	return (
		<div className='p-3 even:bg-primary/20 font-poppins rounded flex justify-between items-center'>
			<div className='w-2/6 flex gap-x-3'>
				<img
					className='w-28 aspect-video rounded'
					src={img}
					alt=''
					loading='lazy'
				/>
				<div>
					<h4 className='text-[1.4rem] font-bubblegum'>{name}</h4>
					<p>
						<span className='font-semibold'>Category:</span>
						<span>{category}</span>
					</p>
				</div>
			</div>
			<div className='w-2/6'>
				<p>
					<span className='font-semibold'>Seller:</span> {seller_name}
				</p>
				<p>
					<span className='font-semibold'>Available Quantity: </span>
					{available_quantity}
				</p>
			</div>
			<p className='text-lg font-semibold'>${price}</p>
			<Link to={`/toy/${_id}`} className='btn btn-primary'>
				Details
			</Link>
		</div>
	);
};

export default Toy;
