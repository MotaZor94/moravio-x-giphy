import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function MasonryGrid({ results }) {
	return (
		<div className='masonry sm:masonry-sm md:masonry-md'>
			{results?.data?.map((dat) => (
				<div key={dat.id} className='p-4 break-inside'>
					<LazyLoadImage alt={dat.title} effect='blur' src={dat.images.original_still.url} />
				</div>
			))}
		</div>
	);
}
