import { useLoaderData } from 'react-router-dom';
import { FaStar, FaRegStarHalfStroke, FaRegStar } from 'react-icons/fa6';

const ToyDetails = () => {
	const toyDetails = useLoaderData();
	const {
		img,
		name,
		rating,
		price,
		category,
		available_quantity,
		seller_name,
		seller_email,
		description,
	} = toyDetails;
	return (
		<div className='w-3/5 mx-auto my-28 font-poppins'>
			<div className='flex items-center'>
				<img
					className='w-96 mr-10 p-2 border-2 rounded overflow-hidden'
					src={img}
					alt={`${name} toy.`}
				/>
				<div className='mb-10 text-sm'>
					<h1 className='text-5xl font-bubblegum'>{name}</h1>
					<p>
						Brand:{' '}
						<span className='font-semibold'>{seller_name}</span>
						<span className='text-xl'> | </span>
						Email:{' '}
						<span className='font-semibold'>{seller_email}</span>
					</p>
					<p>
						Category:{' '}
						<span className='font-semibold'>{category}</span>
					</p>
					<div className='text-2xl text-yellow-400 mt-2 flex items-center'>
						{Array.from({ length: 5 }, (_, i) => {
							if (rating > i + 1) {
								return <FaStar key={i} />;
							} else if (rating > i + 0.5) {
								return <FaRegStarHalfStroke key={i} />;
							} else {
								return <FaRegStar key={i} />;
							}
						})}
					</div>
					<div className='h-1 bg-primary/20 rounded-full my-5'></div>
					<div className='flex items-center justify-between'>
						<div className='mt-1'>
							<p className='text-2xl font-semibold'> ${price}</p>
							<p>Available: {available_quantity} pieces</p>
						</div>
						<button className='btn btn-primary'>Buy Now</button>
					</div>
				</div>
			</div>
			<div className=' mt-5 px-5'>
				<p className='font-semibold text-xl'>Description: </p>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default ToyDetails;
