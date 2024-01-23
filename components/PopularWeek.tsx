'use client';
import { DiscoverMovieQuery, fetchDiscoverMovie } from '@/queries/discover/movie';
import { API_QUERY } from '@/types/api';
import Flicking from '@egjs/react-flicking';
import { Card, Image, Skeleton } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useState } from 'react';
import MovieDetail from './MovieDetail';

function PopularWeek() {
	const [query, _] = useState<DiscoverMovieQuery>({
		'primary_release_date.gte': dayjs().startOf('week').format('YYYY-MM-DD'),
		'primary_release_date.lte': dayjs().format('YYYY-MM-DD'),
		include_adult: false,
		include_video: false,
		language: 'en-US',
		page: 1,
		sort_by: 'popularity.desc',
		with_release_type: 2,
	});
	const { data, isLoading } = useQuery({
		queryKey: [API_QUERY.POPULAR_WEEK, query],
		queryFn: () => fetchDiscoverMovie(query),
	});
	return (
		<div className='mx-20 my-10'>
			<h2 className='pb-6 text-2xl font-bold'>Popular This Week</h2>
			<Flicking moveType={['snap']} panelsPerView={4} align={'prev'} bound>
				{data &&
					data.results &&
					data.results
						.filter(release => release.poster_path)
						.map((result, idx) => (
							<div key={result.id} className='flex items-center gap-7'>
								<h1 className='text-6xl font-bold'>{++idx}</h1>
								<div className='flex items-center gap-5'>
									<Card className='h-36 w-28'>
										<Skeleton isLoaded={!isLoading} className='rounded-lg w-28 h-36' classNames={{ base: 'rounded-lg w-80' }}>
											<Image
												removeWrapper
												draggable={false}
												alt={result.title}
												src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}original/${result.poster_path}`}
												className='z-0 select-none w-full object-cover'
											/>
										</Skeleton>
									</Card>
									<div>
										<h5 className='font-bold text-lg text-ellipsis overflow-hidden'>{result.title}</h5>
										<div>{result.id && <MovieDetail movie_id={result.id} />}</div>
									</div>
								</div>
							</div>
						))}
			</Flicking>
		</div>
	);
}

export default PopularWeek;
