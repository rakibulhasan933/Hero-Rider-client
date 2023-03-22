import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const SignUp = () => {
	const { register, handleSubmit, reset, formState: { errors } } = useForm();
	const [error, setError] = useState('');

	const navigate = useNavigate()
	const onSubmit = data => {
		const user = {
			name: data.name,
			email: data.email,
			password: data.password,
		};
		fetch('http://localhost:5000/auth/signup', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then(res => res.json())
			.then(data => {
				if (data?.success) {
					navigate('/login')
					reset();
				} else {
					setError(data?.error)
				}
			});
	};
	return (
		<div className='m-2 text-center bg-gray-100 border rounded'>
			<h2 className='text-2xl font-bold'>Sign Up</h2>
			<form className='flex flex-col m-2' onSubmit={handleSubmit(onSubmit)}>
				<label className='flex justify-start font-normal' htmlFor="email">Name</label>
				<input className='box-border w-full px-3 py-2 mb-2 border rounded-md' {...register("name", { required: true })} />
				{errors.name && <span className='text-red-500 '>name field is required</span>}
				<label className='flex justify-start font-normal' htmlFor="email">Email</label>
				<input className='box-border w-full px-3 py-2 mb-2 border rounded-md' {...register("email", { required: true })} />
				{errors.email && <span className='text-red-500 '>Email field is required</span>}
				<label className='flex justify-start font-normal' htmlFor="password"> Password</label>
				<input className='box-border w-full px-3 py-2 mb-2 border rounded-md' {...register("password", { required: true })} />
				{errors.password && <span className='text-red-500 '>Password field is required</span>}
				<input className='box-border w-full px-3 py-2 my-2 font-bold text-white uppercase bg-blue-500 border rounded-md cursor-pointer' type="submit" value="SignUp" />
			</form>
			{error && <p className='text-red-500' >{error}</p>}
		</div>
	);
};

export default SignUp;