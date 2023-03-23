import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';

const StatusUpdateUser = ({ setStatusUpdate, statusUpdate }) => {
	const [isLoading, setLoading] = useState(false);

	const { name, email } = statusUpdate;


	const handleBlock = () => {
		setLoading(true)
		fetch(`http://localhost:5000/auth/remove-block/${email}`, {
			method: 'PATCH',
			headers: {
				headers: {
					'content-type': 'application/json',
				}
			}
		})
			.then(res => res.json())
			.then(data => {
				setLoading(false);
				console.log(data);
			})
	}

	if (isLoading) {
		return <Loading />
	}

	// 		headers: {
	// 			'authorization': `Bearer ${localStorage.getItem('accessToken')}`
	// 		}
	// 	})
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			if (data.deletedCount) {
	// 				toast.success('Doctor Deleted successfully');
	// 				refetch();
	// 				setDeleteDoctor(null);
	// 			}

	// 			else {
	// 				toast.error('Failed Deleted Doctor')
	// 			}
	// 		})
	// }
	return (
		<div>
			<input type="checkbox" id="status-update-modal" className="modal-toggle" />
			<div className="modal modal-bottom sm:modal-middle">
				<div className="text-center modal-box">
					<h3 className="text-lg font-bold text-red-600">{name}</h3>
					<h3 className="text-lg font-bold text-blue-600">{email}</h3>
					<p className="py-4">Are you sure you want to delete doctor profile ?</p>
					<div className="modal-action">
						<a href="/dashboard/search"><button onClick={() => handleBlock(email)} className="mr-5 btn btn-error">Blocked</button></a>
						<label htmlFor="delete-doctor-modal" className="justify-center bg-green-700 btn">Cancel</label>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatusUpdateUser;