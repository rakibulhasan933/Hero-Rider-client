import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';

const Main = () => {
	return (
		<div className='m-2'>
			<div className="mb-10">
				<Navbar />
			</div>
			<Outlet />
			<Footer />
		</div>
	);
};

export default Main;