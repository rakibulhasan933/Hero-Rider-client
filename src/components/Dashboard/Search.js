import React from 'react';

const Search = () => {
	return (
		<div className="relative text-gray-600">
			<input
				className="w-full h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
				type="search"
				name="search"
				placeholder="Search"
			/>
			<button type="submit" className="absolute top-0 right-0 mt-3 mr-4">
				<svg
					className="w-4 h-4 text-gray-600 fill-current"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
				>
					<path
						className="heroicon-ui"
						d="M15.56 14.44a7 7 0 1 1-1.12-1.12l5.01-5a1 1 0 0 1 1.42 1.42l-5.01 5zm-6.36-1.07a5 5 0 1 0 7.07 0 5 5 0 0 0-7.07 0z"
					/>
				</svg>
			</button>
		</div>
	);
};

export default Search;

