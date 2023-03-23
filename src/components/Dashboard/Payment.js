import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutFrom from './CheckoutFrom';

const Payment = () => {
	const [user, setUser] = useState('');
	const [course, setCourse] = useState({});
	const [isLoading, setLoading] = useState(false);

	const { id } = useParams();

	const email = localStorage.getItem('refreshToken');
	useEffect(() => {
		fetch(`https://hero-rider-backend-mauve.vercel.app/auth/user/${email}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				authorization: `Bearer ${localStorage.getItem('accessToken')}`
			},
		})
			.then(res => res.json())
			.then(data => {
				setUser(data)
			});
	}, [email]);


	useEffect(() => {
		setLoading(true)
		fetch(`https://hero-rider-backend-mauve.vercel.app/auth/services/${id}`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				authorization: `Bearer ${localStorage.getItem('accessToken')}`
			},
		})
			.then(res => res.json())
			.then(data => {
				setLoading(false);
				setCourse(data);
			})
	}, [id]);

	const stripePromise = loadStripe('pk_test_51LxYYCBlHAjml9hYdLMk3IhBHxC1TpjUug6imB1lxYN8Dp3ott8hYrNEzBFqF6gcWLCi7LhMpiHwonHFcUPm4HLM00tK4EcPxT');
	if (isLoading) {
		return <isLoading />
	};
	return (
		<div className='mx-6'>
			<div className="w-full my-12 shadow-xl card bg-base-100">
				<div className="card-body">
					<h2 className="font-bold card-title">Hello ,{user.name} </h2>
					<h2 className="card-title">Pay For {course.title}</h2>
					<p>Your Course</p>
					<p>Please Pay $<span className='font-bold '>{course.price}</span></p>
				</div>
			</div>
			<div className="w-full shadow-xl card bg-base-100">
				<div className="card-body">
					<Elements stripe={stripePromise}>
						<CheckoutFrom course={course} user={user} />
					</Elements>
				</div>
			</div>
		</div>
	);
};

export default Payment;