import React from 'react';
import Navbar from './Navbar';

const NotFound = () => {
	return (
		<div className=" m-2">
			<Navbar />
			<div className='mt-20 text-center'>
				<h1 className=' text-9xl font-bold' >404</h1>
			</div>
		</div>
	);
};

export default NotFound;