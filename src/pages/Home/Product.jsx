import { BiSolidStar } from 'react-icons/bi';

const Product = ({ product }) => {
	const { img, name, price, rating } = product;
	return (
		<div className='bg-secondary mt-10 p-2 rounded'>
			<img
				className='w-full h-60 rounded border border-white'
				src={img}
				alt=''
			/>
			<div className='px-2 mt-3 mb-1 font-poppins'>
				<h3 className='text-xl font-semibold'>
					{name.length > 20 ? name.slice(0, 21) + '...' : name}
				</h3>
				<div className='flex justify-between'>
					<p className='text-base'>Price: {price}</p>
					<p className='flex items-center'>
						<span className='mr-1 text-yellow-400 text-xl'>
							<BiSolidStar />
						</span>
						{rating}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Product;
