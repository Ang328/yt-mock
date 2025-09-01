import { useState } from 'react';

type SearchBarProps = {
	onSearch: (query: string) => void;
};

export default function SearchBar({ onSearch }: SearchBarProps) {
	const [query, setQuery] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (query.trim()) {
			onSearch(query.trim());
			setQuery('');
		}
	};

	return (
		<form onSubmit={handleSubmit} className='flex w-full max-w-xl mx-auto mt-2'>
			<input
				className='flex-1 border focus:outline-none px-4 py-2 rounded-l-full'
				type='text'
				placeholder='Search videos...'
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			<button
				type='submit'
				className='bg-red-600 text-white px-4 hover:bg-red-800 rounded-r-full'
			>
				Search
			</button>
		</form>
	);
}
