'use client';
import { ListMovieQuery, fetchListMovie } from '@/queries/list/movie';
import { API_QUERY } from '@/types/api';
import Flicking from '@egjs/react-flicking';
import { Card, Image, Skeleton } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import MovieDetail from '../MovieDetail';

function Movies() {
	const [query, _] = useState<ListMovieQuery>({
		page: 1,
	});
	const { data, isLoading } = useQuery({
		queryKey: [API_QUERY.LIST_MOVIE, query],
		queryFn: () => fetchListMovie(query),
	});
	return (
		<div className='mx-20 my-10'>
			<h2 className='pb-6 text-2xl font-bold'>Movie</h2>
			<Flicking moveType={['snap']} panelsPerView={5} align={'prev'} bound>
				{data &&
					data.results &&
					data.results
						.filter(release => release.poster_path)
						.map(result => (
							<div key={result.id} className='flex flex-col gap-5'>
								<Card className='w-80 h-48'>
									<Skeleton isLoaded={!isLoading} className='rounded-lg w-80 h-48' classNames={{ base: 'rounded-lg w-80' }}>
										<Image
											removeWrapper
											draggable={false}
											alt={result.title}
											src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}original/${result.poster_path}`}
											className='z-0 select-none h-full object-scale-down'
										/>
									</Skeleton>
								</Card>
								<div>
									<h5 className='font-bold text-lg text-ellipsis overflow-hidden'>{result.title}</h5>
									<div>{result.id && <MovieDetail movie_id={result.id} />}</div>
								</div>
							</div>
						))}
			</Flicking>
		</div>
	);
}

export default Movies;
