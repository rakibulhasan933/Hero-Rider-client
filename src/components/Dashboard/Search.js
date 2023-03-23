import React, { Fragment, useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import UserList from './UserList';

const Search = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [result, setResult] = useState([]);
	const [isLoading, setLoading] = useState(false);

	function handleInputChange(event) {
		setSearchQuery(event.target.value);
	}

	useEffect(() => {
		setLoading(true);
		fetch(`http://localhost:5000/auth/student?search=${searchQuery}`)
			.then(res => res.json()).then((data) => {
				setLoading(false)
				setResult(data.students)
			})
	}, [searchQuery]);

	if (isLoading) {
		return <Loading />
	}

	console.log(result)
	return (
		<div>
			<Fragment>
				<form>
					<div className="flex flex-row gap-1">
						<input
							type="text"
							value={searchQuery}
							onChange={handleInputChange}
							placeholder="Search..."
							className="w-1/2 p-2 border border-gray-400 rounded-lg"
						/>

						{/* <input
							type="text"
							placeholder="Search"
							{...register("search")}
							className="w-1/2 p-2 border border-gray-400 rounded-lg"
						/>
						<button
							type="submit"
							className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg"
						>
							Search
						</button> */}
					</div>
				</form>
			</Fragment>
			<div className="flex flex-row my-2">

				<div className="w-full overflow-x-auto">
					<table className="table w-full">
						<thead>
							<tr>
								<th>Name</th>
								<th>Email/Career</th>
								<th>JOB</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{
								result?.map((user) => <UserList key={user._id} user={user} />)
							}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default Search;


