import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = async (data) => {
		console.log(data);
	}
	return (
		<main className='flex min-h-full pt-16 overflow-hidden sm:py-28'>
			<div className='flex flex-col w-full max-w-2xl px-4 mx-auto sm:px-6'>
				<div className='relative mt-12 sm:mt-16'>
					<h1 className='text-2xl font-medium tracking-tight text-center text-gray-900'>
						Sign in to your account
					</h1>
				</div>
				<div className='flex-auto px-4 py-10 mt-10 -mx-4 bg-white shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='space-y-2'>
							<label className='block mb-2 text-sm font-semibold text-gray-900'>Email</label>
							<input type="email" placeholder="example@gmail.com" className="block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" {...register("email", {
								required: {
									value: true,
									message: 'Email is Required'
								}
							})} />
							<label className='block mb-2 text-sm font-semibold text-gray-900'>
								{errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email?.message}</span>}
							</label>
							<label className='block mb-2 text-sm font-semibold text-gray-900'>Password</label>
							<input type="password" className="block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" placeholder="******" {...register("password", {
								required: {
									value: true,
									message: 'Password is Required'
								},
								minLength: {
									value: 6,
									message: 'Must be 6 characters or longer'
								}
							})} />

							<label className='block mb-2 text-sm font-semibold text-gray-900'>
								{errors.password?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.password?.message}</span>}
								{errors.password?.type === 'minLength' && <span className="text-red-500 label-text-alt">{errors.password?.message}</span>}
							</label>

							<input className='mt-3 w-full inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 cursor-pointer' type="submit" value="SING UP" />
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Login;