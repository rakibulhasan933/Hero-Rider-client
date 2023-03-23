import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
	const email = localStorage.getItem('refreshToken');
	const [user, setUser] = useState('');
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
	return (
		<div className="drawer drawer-mobile">
			<input id="my-dashboard" type="checkbox" className="drawer-toggle" />
			<div className="p-8 drawer-content">
				<Outlet />
			</div>
			<div className="drawer-side">
				<label tabIndex={1} htmlFor="my-dashboard" className="drawer-overlay"></label>
				<ul className="p-4 overflow-y-auto menu w-80 bg-base-100 text-base-content">
					<li><Link to="/dashboard/profile">My Profile</Link></li>
					{(user?.role === 'admin') && <li><Link to="/dashboard/search">User Search</Link></li>}
				</ul>

			</div>
		</div>
	);
};

export default Dashboard;