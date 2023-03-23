import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Shared/Loading';

const UserList = ({ user, setStatusUpdate }) => {



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