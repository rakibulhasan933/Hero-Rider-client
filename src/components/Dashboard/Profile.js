import React, { useEffect, useState } from 'react';

const Profile = () => {
	const email = localStorage.getItem('refreshToken');
	const [user, setUser] = useState('');
	useEffect(() => {
		fetch(`https://hero-rider-backend-mauve.vercel.app/auth/user/${email}`)
			.then(res => res.json())
			.then(data => {
				console.log(data)
				setUser(data)
			});
	}, [email]);
	const { _id, name, address, phone, area, carName, carModel, vehicle, role } = user;
	return (
		<div>
			<h2 className='text-2xl font-bold text-center'>My Profile </h2>
			<div className="flex flex-row gap-1 ">
				<div className="flex flex-col w-1/2 gap-1">
					<h1 className='font-bold '>Photo</h1>
					<h2 className='text-indigo-500 '>Role :-{role}</h2>
				</div>
				<div className="flex flex-col w-1/2 gap-2 p-3 rounded-md">
					<h2 className='font-bold '>ID</h2>
					<h2 className='text-indigo-500 '>{_id}</h2>
					<h2 className='font-bold '>Full Name</h2>
					<h2 className='text-indigo-500 '>{name}</h2>
					<h2 className='font-bold '>Email</h2>
					<h2 className='text-indigo-500 '>{email}</h2>
					<h2 className='font-bold '>Address</h2>
					<h2 className='text-indigo-500 '>{address}</h2>
					<h2 className='font-bold '>Phone</h2>
					<h2 className='text-indigo-500 '>{phone}</h2>
					<h2 className='font-bold '>Vehicle Type</h2>
					<h2 className='text-indigo-500 '>{vehicle}</h2>
					<h2 className='font-bold '>Profile Picture</h2>
					<h2 className='font-bold '>NID Card Picture</h2>
					{role === 'student' && <div>
						<h2 className='font-bold '>Car Name</h2>
						<h2 className='text-indigo-500 '>{carName} </h2>
						<h2 className='font-bold '>Area</h2>
						<h2 className='text-indigo-500 '>{area}</h2>
						<h2 className='font-bold '>Driving License Picture</h2>
						<h2 className='font-bold '>Car Name Plate Picture</h2>
						<h1 className='font-bold '>Car Model</h1>
						<h2 className='text-indigo-500 '>{carModel}</h2>
					</div>}
				</div>
			</div>
		</div>
	);
};

export default Profile;