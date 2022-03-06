import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
export default function SkeletonLoader() {
	return (
		<SkeletonTheme baseColor='#eeeeee' highlightColor='#bcbcbc'>
			<div className='masonry sm:masonry-sm md:masonry-md'>
				<div className='p-4 break-inside'>
					<Skeleton count={1} height={300} />
				</div>
				<div className='p-4 break-inside'>
					<Skeleton count={1} height={220} />
				</div>
				<div className='p-4 break-inside'>
					<Skeleton count={1} height={250} />
				</div>{' '}
				<div className='p-4 break-inside'>
					<Skeleton count={1} height={210} />
				</div>{' '}
				<div className='p-4 break-inside'>
					<Skeleton count={1} height={220} />
				</div>{' '}
				<div className='p-4 break-inside'>
					<Skeleton count={1} height={450} />
				</div>{' '}
				<div className='p-4 break-inside'>
					<Skeleton count={1} height={300} />
				</div>
				<div className='p-4 break-inside'>
					<Skeleton count={1} height={550} />
				</div>{' '}
				<div className='p-4 break-inside'>
					<Skeleton count={1} height={200} />
				</div>{' '}
				<div className='p-4 break-inside'>
					<Skeleton count={1} height={200} />
				</div>
			</div>
		</SkeletonTheme>
	);
}
