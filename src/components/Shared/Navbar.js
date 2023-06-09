import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();

	const email = localStorage.getItem('refreshToken');
	const [user, setUser] = useState('');
	useEffect(() => {
		fetch(`http://localhost:5000/auth/user/${email}`, {
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
	const SingOut = () => {
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('access_token');
		navigate('/login');
	};
	return (
		<div className="navbar bg-base-100">
			<div className="navbar-start">
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
					</label>
					<ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
						<li><Link to='/'>Home</Link></li>
						<li><Link to='/services'>Driving Packages</Link></li>
						{user && <li><Link to='/dashboard'>Dashboard</Link></li>}
						<li>{user ? <button className="btn btn-success">Sign Out</button> : <Link to='/login'>Login</Link>}</li>
					</ul>
				</div>
				<Link to='/' className="text-xl normal-case btn btn-ghost">Hero Rider</Link>
			</div>
			{user && <div className="navbar-end">
				<label tabIndex={1} htmlFor="my-dashboard" className="btn btn-ghost lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
				</label>
			</div>}
			<div className="hidden navbar-center lg:flex">
				<ul className="p-0 menu menu-horizontal">
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/services'>Driving Packages</Link></li>
					{user && <li><Link to='/dashboard/profile'>Dashboard</Link></li>}
					<li>{user ? <a href="/login" onClick={SingOut}>SingOut</a> : <h4 className='mr-4'><Link to='/login'>Login</Link></h4>}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
