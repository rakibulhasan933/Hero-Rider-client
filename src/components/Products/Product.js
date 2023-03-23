import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
	const { vehicle, price, creatorName, length, title, picture, _id } = item;
	return (
		<>
			<Link to={`/dashboard/payment/${_id}`}>
				<div className="shadow-xl card w-96 bg-base-100">
					<figure className="px-10 pt-10">
						<img src={`data:image/*;base64,${picture}`} alt="Shoes" className="rounded-xl" />
					</figure>
					<div className="items-center text-center card-body">
						<h2 className="card-title">{title}</h2>
						<p> Creator:- <span className=' text-lime-400'>{creatorName}</span> </p>
						<p>Course Length :- <span className='font-bold '>{length}</span>Days</p>
						<p>Driving Type: <span className='font-bold '>{vehicle} </span> </p>
						<h2 className="card-title">Price :- {price}</h2>
						<div className="card-actions">
							<button className="btn btn-primary">Buy Now </button>
						</div>
					</div>
				</div>
			</Link>
		</>
	);
};

export default Product;