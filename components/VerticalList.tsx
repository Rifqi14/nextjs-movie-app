'use client';
import { DiscoverMovieQuery, fetchDiscoverMovie } from '@/queries/discover/movie';
import { API_QUERY } from '@/types/api';
import { Card, CardFooter, Image, Skeleton } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import { useState } from 'react';
import MovieDetail from './MovieDetail';

interface Props {
	title: string;
}

function VerticalList({ title }: Props) {
	const [query, _] = useState<DiscoverMovieQuery>({
		'primary_release_date.gte': dayjs().startOf('month').format('YYYY-MM-DD'),
		'primary_release_date.lte': dayjs().format('YYYY-MM-DD'),
		include_adult: false,
		include_video: false,
		language: 'en-US',
		page: 1,
		sort_by: 'popularity.desc',
		with_release_type: 2,
	});
	const { data, isLoading } = useQuery({
		queryKey: [API_QUERY.JUST_RELEASE, query],
		queryFn: () => fetchDiscoverMovie(query),
	});
	return (
		<div>
			<h2 className='pb-6 text-2xl font-bold'>{title}</h2>
			<div className='flex flex-col gap-5'>
				{data &&
					data.results &&
					data.results
						.filter((release, idx) => release.poster_path)
						.slice(0, 4)
						.map(
							result =>
								result.id && (
									<div key={result.id} className='flex gap-5 items-center'>
										<Card className='w-40'>
											<Skeleton isLoaded={!isLoading} className='rounded-lg w-40' classNames={{ base: 'rounded-lg w-40' }}>
												<Image
													removeWrapper
													draggable={false}
													alt={result.title}
													src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}original/${result.poster_path}`}
													className='z-0 select-none w-full object-cover'
												/>
											</Skeleton>
											<CardFooter className='z-40 absolute bottom-0 bg-gradient-to-b from-black/0 from-60% via-black/70 via-80% to-black/90 flex-col items-start h-full'></CardFooter>
										</Card>
										<div>
											<h1 className='max-w-[8rem] overflow-hidden text-ellipsis whitespace-nowrap font-bold text-xl'>{result.title}</h1>
											<div className='max-w-[8rem] overflow-hidden whitespace-nowrap'>
												<MovieDetail movie_id={result.id} />
											</div>
										</div>
									</div>
								)
						)}
			</div>
		</div>
	);
}

export default VerticalList;
