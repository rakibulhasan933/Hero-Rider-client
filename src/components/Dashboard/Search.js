import React, { Fragment, useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import UserList from './UserList';

const Search = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [result, setResult] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [highest, setHighest] = useState(0);
	const [lowest, setLowest] = useState(0);
	const [page, setPage] = useState(1);
	console.log(page);

	function handleInputChange(event) {
		setSearchQuery(event.target.value);
	}
	useEffect(() => {
		setLoading(true);
		fetch(`http://localhost:5000/auth/student?search=${searchQuery}&page=${page}`)
			.then(res => res.json()).then((data) => {
				setLoading(false)
				setResult(data.students)
			})
	}, [searchQuery, page]);

	function handleFormSubmit(event) {
		event.preventDefault();

	}

	// useEffect(() => {
	// 	setLoading(true);
	// 	fetch(`http://localhost:5000/auth/student?search=${searchQuery}&highest=${highest}&lowest=${lowest}`)
	// 		.then(res => res.json()).then((data) => {
	// 			setLoading(false)
	// 			setResult(data.students)
	// 		})
	// }, [searchQuery]);

	if (isLoading) {
		return <Loading />
	}

	console.log(result)
	return (
		<div>
			<Fragment>

				<div className="flex flex-row gap-2">
					<form>
						<input
							type="text"
							value={searchQuery}
							onChange={handleInputChange}
							placeholder="Search..."
							className="w-1/2 p-2 border border-gray-400 rounded-lg"
						/>
					</form>
					<form onSubmit={handleFormSubmit}>
						<input
							type="number"
							onChange={e => setHighest(e.target.value)}
							placeholder="Highest Age"
							className="w-1/12 p-2 border border-gray-400 rounded-lg"
						/>
						<input
							type="number"
							onChange={e => setLowest(e.target.value)}
							placeholder="Lowest Age"
							className="w-1/12 p-2 border border-gray-400 rounded-lg"
						/>
						<input type="submit" className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg" value="Search For Age" />
					</form>
				</div>
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
			<div className="flex justify-center ">
				<button onClick={() => setPage(1)} className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg">1</button>
				<button onClick={() => setPage(2)} className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg">2</button>
				<button onClick={() => setPage(3)} className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg">3</button>
				<button onClick={() => setPage(4)} className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg">4</button>
				<button onClick={() => setPage(5)} className="px-4 py-2 ml-2 text-white bg-blue-500 rounded-lg">5</button>
			</div>
		</div>
	);
};

export default Search;


