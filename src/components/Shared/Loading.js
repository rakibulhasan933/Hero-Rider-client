function Loading() {
	return (
		<div className="flex items-center justify-center">
			<svg className="w-8 h-8 text-gray-500 animate-spin" viewBox="0 0 24 24">
				<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
				<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v2a6 6 0 010 12v2a8 8 0 008 8h4c0-6.627-5.373-12-12-12z" />
			</svg>
		</div>
	);
}

export default Loading;
