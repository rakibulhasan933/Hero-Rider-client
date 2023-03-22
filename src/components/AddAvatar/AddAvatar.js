import React, { useState } from 'react';

const AddAvatar = () => {
	const [images, setImages] = useState([]);
	const [success, setSuccess] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		for (const image of images) {
			formData.append('image', image);
		}
		fetch('http://localhost:5000/photos/upload', {
			method: 'POST',
			body: formData,
		})
			.then(res => res.json())
			.then(data => console.log(data))
			.catch((error) => console.log(error));
	};

	return (
		<div className='m-2 text-center bg-gray-100 border rounded'>
			<form onSubmit={handleSubmit} className="flex flex-col">
				<input type="file" accept='image' multiple
					onChange={e => setImages(e.target.files)} id="files" />
				<button type="submit">
					Publish
				</button>
				{success && <p className='text-base text-green-500'>{success}</p>}
				{error && <p className='text-base text-red-500'>{error}</p>}
			</form>
		</div>
	);
};

export default AddAvatar;