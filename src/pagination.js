import React from 'react';
import ReactPaginate from 'react-paginate';

export default function Pagination({ pageCount, handlePageClick, forcePage }) {
	const pagetoNum = parseInt(forcePage);
	console.log(typeof pagetoNum === 'number');
	return (
		<div className='flex justify-center'>
			<ReactPaginate
				containerClassName='border-t border-gray-200 px-4 flex items-center sm:px-0'
				breakLabel='...'
				activeClassName='z-10 bg-red-50 border-red-500 text-red-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
				previousClassName='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
				nextClassName='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
				pageClassName='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
				nextLabel='next >'
				pageCount={pageCount}
				forcePage={!isNaN(pagetoNum) && pagetoNum}
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				previousLabel='< previous'
				renderOnZeroPageCount={null}
			/>
		</div>
	);
}
