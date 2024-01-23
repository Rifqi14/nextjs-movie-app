'use client';
import { DiscoverMovieQuery, fetchDiscoverMovie } from '@/queries/discover/movie';
import { API_QUERY } from '@/types/api';
import { Button, Card, CardFooter, CardHeader, Image } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import BannerDetail from './BannerDetail';
import Iconify from './Iconify';
import SecondaryButton from './SecondaryButton';
import Slider from './Slider';

export default function HeroBanner() {
	const [query, _] = useState<DiscoverMovieQuery>({
		include_adult: false,
		include_video: false,
		language: 'en-US',
		page: 1,
		sort_by: 'popularity.desc',
		with_release_type: 2,
	});
	const { data } = useQuery({ queryKey: [API_QUERY.DISCOVER_MOVIE, query], queryFn: () => fetchDiscoverMovie(query) });
	return (
		<Slider>
			{data &&
				data.results &&
				data.results
					.filter((_, idx) => idx < 5)
					.map((result, idx) => (
						<Card key={result.id}>
							<CardHeader className='absolute bg-gradient-to-t from-black/0 via-gray-900/70 to-black/90 top-0 z-10 h-1/3'></CardHeader>
							<Image
								removeWrapper
								alt={result.title}
								src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}original/${result.backdrop_path}`}
								className='z-0 w-full h-screen object-cover'
							/>
							<CardFooter className='absolute bg-gradient-to-b from-black/0 via-black/70 to-black/90 bottom-0 z-10 h-2/3 px-20 justify-center items-start flex-col gap-6'>
								<div className='flex flex-col gap-4'>
									<h2 className='text-4xl font-extrabold tracking-wide drop-shadow-lg'>{result.title}</h2>
									{result.id && <BannerDetail movie_id={result.id} />}
								</div>
								<p className='w-1/3'>{result.overview}</p>
								<div className='flex gap-4'>
									<Button color='primary' startContent={<Iconify icon={'carbon:play-filled'} className='text-xl' />}>
										Watch Trailer
									</Button>
									<SecondaryButton startContent={<Iconify icon={'ic:round-bookmark-border'} className='text-xl' />}>Add Watchlist</SecondaryButton>
								</div>
							</CardFooter>
						</Card>
					))}
		</Slider>
	);
}
