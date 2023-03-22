import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const userId = localStorage.getItem('refreshToken');
	const navigate = useNavigate();
	const [user, setUser] = useState('');
	useEffect(() => {
		fetch(`http://localhost:5000/auth/user/${userId}`)
			.then(res => res.json())
			.then(data => {
				setUser(data[0])
			});
	}, [userId]);
	const SingOut = () => {
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('access_token');
		navigate('/login');
	};
	return (
		<div className='flex flex-row justify-center text-2xl' >
			<h4 className='mr-4'><Link to='/'>Home</Link></h4>
			<h4 className='mr-4'><Link to='/products'>Products</Link></h4>
			<h4 className='mr-4'><Link to='/upload'>Upload</Link></h4>
			<h4 className='mr-4'><Link to='/signup'>Register</Link></h4>
			{user ? <a href="/login" onClick={SingOut}>SingOut</a> : <h4 className='mr-4'><Link to='/login'>Login</Link></h4>}
		</div>
	);
};

export default Navbar;