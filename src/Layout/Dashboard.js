import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
					<li><Link to="/dashboard/search">User Search</Link></li>
					<li><Link to="/dashboard/bookings">All Booking</Link></li>
					<li><Link to="/dashboard/users">All Users</Link></li>
					<li><Link to="/dashboard/add_doctor">Add Doctor</Link></li>
					<li><Link to="/dashboard/manage_doctor">Manage Doctor</Link></li>
				</ul>

			</div>
		</div>
	);
};

export default Dashboard;