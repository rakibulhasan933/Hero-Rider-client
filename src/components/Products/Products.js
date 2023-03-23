import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import Product from './Product';

const Products = () => {
	const [isLoading, setLoading] = useState(false);
	const [services, setServices] = useState([]);

	useEffect(() => {
		setLoading(true)
		fetch('https://hero-rider-backend-mauve.vercel.app/auth/services', {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				authorization: `Bearer ${localStorage.getItem('accessToken')}`
			},
		})
			.then(res => res.json())
			.then(data => {
				setLoading(false)
				setServices(data)
			})
	}, []);
	if (isLoading) {
		return <Loading />
	}
	return (
		<div className="my-10">
			<h4 className='my-12 text-xl text-center text-secondary'>Available Course</h4>
			<div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
				{
					services?.map((item) => <Product key={item._id} item={item} />)
				}
			</div>
		</div>
	);
};

export default Products;