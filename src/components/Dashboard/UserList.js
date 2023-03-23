import React from 'react';

const UserList = ({ user }) => {
	const { name, email, phone, age, vehicle, blocked } = user;

	return (
		<tr>
			<td>
				<div className="flex items-center space-x-3">
					<div>
						<div className="font-bold">{name}</div>
						<div className="text-sm opacity-50">{age}</div>
					</div>
				</div>
			</td>
			<td>
				{email}
				<br />
				<span className="badge badge-ghost badge-sm">{vehicle}</span>
			</td>
			<td>{phone}</td>
			<th>
				{blocked === true ? <button className="btn btn-ghost btn-xs"> UnBlock</button> : <button className="btn btn-ghost btn-xs">Block</button>}
			</th>
		</tr>

	);
};

export default UserList;