import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const UserList = ({ user, setStatusUpdate }) => {
	const [isLoading, setLoading] = useState(false);




	// function handleUnBlock(email) {
	// 	
	// function handleBlock(email) {
	// 	setLoading(false)
	// 	fetch('http://localhost:5000/auth/block', {
	// 		method: 'PATCH',
	// 		headers: {
	// 			headers: {
	// 				'content-type': 'application/json',
	// 			},
	// 			body: (email)
	// 		}
	// 	})
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			setLoading(false);
	// 			console.log(data)
	// 		})
	// }

	// if (isLoading) {
	// 	return <Loading />
	// }

	return (
		<tr>
			<td>
				<div className="flex items-center space-x-3">
					<div>
						<div className="font-bold">{user?.name}</div>
						<div className="text-sm opacity-50">{user?.age}</div>
					</div>
				</div>
			</td>
			<td>
				{user?.email}
				<br />
				<span className="badge badge-ghost badge-sm">{user?.vehicle}</span>
			</td>
			<td>{user?.phone}</td>
			<th>
				{user?.blocked === true ? <label onClick={() => setStatusUpdate(user)} htmlFor="status-update-modal" className="btn btn-error btn-xs">UnBlock</label> : <label onClick={() => setStatusUpdate(user)} htmlFor="status-update-modal" className="btn btn-error btn-xs">Block</label>}
			</th>
		</tr>

	);
};

export default UserList;