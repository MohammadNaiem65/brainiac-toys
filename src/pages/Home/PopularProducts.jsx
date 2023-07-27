import { useEffect, useState } from 'react';
import Product from './Product';

const PopularProducts = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('https://brainiac-toys-server.vercel.app/top-toys')
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	return (
		<div className='container'>
			<h2 className='container-title'>Popular Products</h2>
			<div className='grid grid-cols-4 gap-x-6'>
				{products.map((product) => (
					<Product key={product.price} product={product} />
				))}
			</div>
		</div>
	);
};

export default PopularProducts;
