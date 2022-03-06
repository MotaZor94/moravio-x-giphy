import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';
import { useDebounce } from './hooks/useDebounce';
import MasonryGrid from './masonry-grid';
import Header from './header';
import Pagination from './pagination';
import SkeletonLoader from './skeleton-loader';
import SearchImage from './images/search.png';

export default function App() {
	const [giphyData, loading, error, searchGiphy] = useFetch();
	const [pageCount, setPageCount] = useState(0);
	const [searchParams, setSearchParams] = useSearchParams('');
	const debouncedSearchTerm = useDebounce(searchParams.get('q'), 300);
	const handleUpdate = (event) => {
		setSearchParams({ q: event.target.value, limit: 25 });
	};

	useEffect(() => {
		if (debouncedSearchTerm) {
			searchGiphy(debouncedSearchTerm, searchParams.get('offset'), searchParams.get('limit'));
			giphyData?.pagination && setPageCount(Math.ceil(giphyData?.pagination?.total_count / searchParams.get('limit')));
		}
	}, [giphyData?.pagination?.total_count, searchParams.get('offset'), debouncedSearchTerm]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * searchParams.get('limit')) % giphyData?.pagination?.total_count;
		setSearchParams({ q: searchParams.get('q'), offset: newOffset, page: event.selected, limit: 25 });
	};

	return (
		<>
			<Header handleChange={handleUpdate} />
			<main className='max-w-6xl mx-auto pb-20'>
				{!searchParams.get('q') && !giphyData && <img alt='Lady Searching' className='mx-auto' src={SearchImage} />}
				{error && <div>Sorry - something went wrong</div>}
				{loading && <SkeletonLoader />}
				{searchParams.get('q') !== '' && giphyData && (
					<>
						<MasonryGrid results={giphyData} />
						<Pagination pageCount={pageCount} handlePageClick={handlePageClick} forcePage={searchParams.get('page')} />
					</>
				)}
			</main>
		</>
	);
}
