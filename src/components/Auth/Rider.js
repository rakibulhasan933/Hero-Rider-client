import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaCloudUploadAlt } from 'react-icons/fa';

const Rider = () => {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const [profilePicture, setProfilePicture] = useState([]);
	const [nidPicture, setNidPicture] = useState([]);
	const [drivingLicense, setDrivingLicense] = useState([]);
	const [carNamePlate, setCarNamePlate] = useState([]);
	console.log(profilePicture)
	console.log(nidPicture)
	console.log(drivingLicense)
	console.log(carNamePlate)

	const password = useRef({});
	password.current = watch("password", "");

	const onSubmit = async (data) => {
		const formData = new FormData();
		formData.append('profilePicture', profilePicture);
		formData.append('nidPicture', nidPicture);
		formData.append('drivingLicense', drivingLicense);
		formData.append('carNamePlate', carNamePlate);
	}
	const validateConfirmPassword = (value) => {
		if (value !== password.current) {
			return "Passwords do not match";
		}
	};
	return (
		<main className='flex min-h-full pt-16 overflow-hidden sm:py-28'>
			<div className='flex flex-col w-full max-w-2xl px-4 mx-auto sm:px-6'>
				<div className='relative mt-12 sm:mt-16'>
					<h1 className='text-2xl font-medium tracking-tight text-center text-gray-900'>
						Sign up for Rider
					</h1>
				</div>
				<div className='flex-auto px-4 py-10 mt-10 -mx-4 bg-white shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24'>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='space-y-2'>

							<label className='block mb-2 text-sm font-semibold text-gray-900'>Full Name</label>
							<input type="text" placeholder="rakibul hasan" className="block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" {...register("name", {
								required: {
									value: true,
									message: 'Name is Required'
								}
							})} />
							<label className='block mb-2 text-sm font-semibold text-gray-900'>
								{errors.name?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.name?.message}</span>}
							</label>

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
							<input
								type="password"
								placeholder="Password"
								className="block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
								{...register("password", {
									required: "You must specify a password",
									minLength: {
										value: 8,
										message: "Password must have at least 8 characters"
									}
								})}
							/>
							<label className='block mb-2 text-sm font-semibold text-gray-900'>
								{errors.password && <p className='text-red-500 label-text-alt'>{errors.password.message}</p>}
							</label>

							<label className='block mb-2 text-sm font-semibold text-gray-900'>Confirm Password</label>
							<input
								type="password"
								placeholder="Confirm Password"
								className="block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
								{...register("confirmPassword", {
									required: "You must confirm your password",
									validate: validateConfirmPassword
								})}
							/>
							<label className='block mb-2 text-sm font-semibold text-gray-900'>
								{errors.confirmPassword && <p className='text-red-500 label-text-alt'>{errors.confirmPassword.message}</p>}
							</label>


							<label className='block mb-2 text-sm font-semibold text-gray-900'>Address</label>
							<input type="address" placeholder="address" className="block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" {...register("address", {
								required: {
									value: true,
									message: 'Address is Required'
								}
							})} />
							<label className='block mb-2 text-sm font-semibold text-gray-900'>
								{errors.address?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.address?.message}</span>}
							</label>

							<label className='block mb-2 text-sm font-semibold text-gray-900'>Age</label>
							<input type="number" placeholder="age" className="block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" {...register("age", {
								required: {
									value: true,
									message: 'age is Required'
								}
							})} />
							<label className='block mb-2 text-sm font-semibold text-gray-900'>
								{errors.age?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.age?.message}</span>}
							</label>

							<label className='block mb-2 text-sm font-semibold text-gray-900'>Phone</label>
							<input type="phone" placeholder="+8801793800000" className="block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" {...register("phone", {
								required: {
									value: true,
									message: 'Phone is Required'
								}
							})} />
							<label className='block mb-2 text-sm font-semibold text-gray-900'>
								{errors.phone?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.phone?.message}</span>}
							</label>

							<label className='block mb-2 text-sm font-semibold text-gray-900'>Area</label>
							<input type="text" placeholder="area" className="block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" {...register("area", {
								required: {
									value: true,
									message: 'Area is Required'
								}
							})} />
							<label className='block mb-2 text-sm font-semibold text-gray-900'>
								{errors.area?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.area?.message}</span>}
							</label>



							<label className='block mb-2 text-sm font-semibold text-gray-900'>Car Name</label>
							<input type="text" placeholder="BMW" className="block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" {...register("carName", {
								required: {
									value: true,
									message: 'Car Name is Required'
								}
							})} />
							<label className='block mb-2 text-sm font-semibold text-gray-900'>
								{errors.carName?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.carName?.message}</span>}
							</label>

							<label className='block mb-2 text-sm font-semibold text-gray-900'>Car Model</label>
							<input type="text" placeholder="car model" className="block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" {...register("carModel", {
								required: {
									value: true,
									message: 'Car Model is Required'
								}
							})} />
							<label className='block mb-2 text-sm font-semibold text-gray-900'>
								{errors.carModel?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.carModel?.message}</span>}
							</label>

							<label className='block mb-2 text-sm font-semibold text-gray-900'>Driving License Picture</label>
							<label htmlFor="image" className="flex items-center justify-center w-full p-4 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md cursor-pointer">
								<FaCloudUploadAlt className="mr-2" />
								<span>Choose Image</span>
								<input type="file" accept='image'
									onChange={e => setDrivingLicense(e.target.files[0])} id="files" />
							</label>

							<label className='block mb-2 text-sm font-semibold text-gray-900'>Car Name Plate Picture</label>
							<label htmlFor="image" className="flex items-center justify-center w-full p-4 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md cursor-pointer">
								<FaCloudUploadAlt className="mr-2" />
								<span>Choose Image</span>
								<input type="file" accept='image'
									onChange={e => setCarNamePlate(e.target.files[0])} id="files" />
							</label>

							<label className='block mb-2 text-sm font-semibold text-gray-900'>Profile Picture</label>
							<label htmlFor="image" className="flex items-center justify-center w-full p-4 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md cursor-pointer">
								<FaCloudUploadAlt className="mr-2" />
								<span>Choose Image</span>
								<input type="file" accept='image'
									onChange={e => setProfilePicture(e.target.files[0])} id="files" />
							</label>

							<label className='block mb-2 text-sm font-semibold text-gray-900'>NID Card Picture</label>
							<label htmlFor="image" className="flex items-center justify-center w-full p-4 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md cursor-pointer">
								<FaCloudUploadAlt className="mr-2" />
								<span>Choose Image</span>
								<input type="file" accept='image'
									onChange={e => setNidPicture(e.target.files[0])} id="files" />
							</label>

							<label className='block mb-2 text-sm font-semibold text-gray-900'>Vehicle Type</label>
							<select className="block w-full appearance-none rounded-lg border bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-stone-500 focus:outline-none focus:ring-cyan-500 sm:text-sm" {...register("vehicle")}>
								<option value="car">Car</option>
								<option value="male">Bike</option>
							</select>

							<input className='mt-3 w-full inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 cursor-pointer' type="submit" value="SIGNUP" />
						</div>
					</form>
				</div>
			</div>
		</main>
	);
};

export default Rider;