'use client';
import { DiscoverMovieQuery, fetchDiscoverMovie } from '@/queries/discover/movie';
import { API_QUERY } from '@/types/api';
import { Button, Card, CardFooter, Image, Skeleton } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import BannerDetail from './BannerDetail';
import Iconify from './Iconify';
import SecondaryButton from './SecondaryButton';

function MovieOnAwards() {
	const [active, setActive] = useState<number>(0);
	const [query, _] = useState<DiscoverMovieQuery>({
		include_adult: false,
		include_video: false,
		language: 'en-US',
		page: 1,
		sort_by: 'popularity.desc',
		with_release_type: 2,
	});
	const { data, isLoading } = useQuery({ queryKey: [API_QUERY.DISCOVER_MOVIE, query], queryFn: () => fetchDiscoverMovie(query) });
	return (
		<div>
			<div className='flex justify-between'>
				<h2 className='pb-6 text-2xl font-bold'>Movie On Awards</h2>
				<div className='flex gap-2'>
					<Button isIconOnly radius='full' onClick={() => active > 0 && setActive(active - 1)}>
						<Iconify icon={'ooui:previous-ltr'} />
					</Button>
					<Button isIconOnly radius='full' onClick={() => active < 20 && setActive(active + 1)}>
						<Iconify icon={'ooui:next-ltr'} />
					</Button>
				</div>
			</div>
			{data && data.results && (
				<div className='flex flex-col gap-16'>
					<Card>
						<Skeleton isLoaded={!isLoading} className='rounded-lg w-full' classNames={{ base: 'rounded-lg w-full' }}>
							<Image
								removeWrapper
								draggable={false}
								alt={data.results[active].title}
								src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}original/${data.results[active].backdrop_path}`}
								className='z-0 select-none w-full object-cover'
							/>
							<CardFooter className='z-40 absolute bottom-0 bg-gradient-to-b from-black/0 from-60% via-black/70 via-80% to-black/90 flex-col items-start h-full'></CardFooter>
						</Skeleton>
					</Card>
					<div>
						<div className='flex flex-col gap-4'>
							<h1 className='text-6xl font-bold'>{data.results[active].title}</h1>
							{data && data.results && data.results.length > 1 && data.results[active].id && <BannerDetail movie_id={data.results[active].id ?? 0} />}
							<p className='w-full'>{data.results[active].overview}</p>
						</div>
						<div className='flex gap-4 mt-10'>
							<Button color='primary' startContent={<Iconify icon={'carbon:play-filled'} className='text-xl' />}>
								Watch Trailer
							</Button>
							<SecondaryButton startContent={<Iconify icon={'ic:round-bookmark-border'} className='text-xl' />}>Add Watchlist</SecondaryButton>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default MovieOnAwards;
