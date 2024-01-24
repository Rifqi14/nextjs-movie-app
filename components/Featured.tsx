'use client';
import { DiscoverMovieQuery, fetchDiscoverMovie } from '@/queries/discover/movie';
import { API_QUERY } from '@/types/api';
import { Button, Card, CardFooter, CardHeader, Image, Skeleton } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import BannerDetail from './BannerDetail';
import Iconify from './Iconify';
import SecondaryButton from './SecondaryButton';

function Featured() {
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
			{data && data.results && (
				<div className='flex flex-col gap-16'>
					<Card>
						<CardHeader className='z-40 absolute top-0 bg-gradient-to-t from-black/0 from-60% via-black/70 via-80% to-black/90 flex-col items-start h-full' />
						<Skeleton isLoaded={!isLoading} className='w-full max-h-[50rem]' classNames={{ base: 'rounded-lg w-full' }}>
							<Image
								removeWrapper
								draggable={false}
								alt={data.results[active].title}
								src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}original/${data.results[active].backdrop_path}`}
								className='z-0 select-none w-full object-cover h-1/4 !opacity-40'
							/>
						</Skeleton>
						<div className='z-50 top-[25%] absolute ml-20 flex items-center gap-5'>
							<div className='w-1/3'>
								<div className='flex flex-col gap-4'>
									<h2 className='pb-6 text-2xl font-bold'>Featured</h2>
									<h1 className='text-6xl font-bold'>{data.results[active].title}</h1>
									{data && data.results && data.results.length > 1 && data.results[active].id && (
										<BannerDetail movie_id={data.results[active].id ?? 0} />
									)}
									<p className='w-full text-justify'>{data.results[active].overview}</p>
								</div>
								<div className='flex gap-4 mt-10'>
									<Button color='primary' startContent={<Iconify icon={'carbon:play-filled'} className='text-xl' />}>
										Watch Trailer
									</Button>
									<SecondaryButton startContent={<Iconify icon={'ic:round-bookmark-border'} className='text-xl' />}>Add Watchlist</SecondaryButton>
								</div>
							</div>
							<div className='w-2/3 overflow-hidden flex gap-5'>
								<Button
									isIconOnly
									className='absolute z-[1000] top-2/4 ml-5'
									radius='full'
									onClick={() => active > 0 && setActive(active - 1)}
									disableRipple
								>
									<Iconify icon={'ooui:previous-ltr'} />
								</Button>
								<Button
									isIconOnly
									className='absolute z-[1000] top-2/4 right-5'
									radius='full'
									onClick={() => active < 20 && setActive(active + 1)}
									disableRipple
								>
									<Iconify icon={'ooui:next-ltr'} />
								</Button>
								{data &&
									data.results &&
									data.results.slice(0, 4).map((result, idx) => (
										<Card key={result.id} className={`${active === idx && 'border-2 border-green-700'}`}>
											<Image
												removeWrapper
												draggable={false}
												alt={result.title}
												src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}original/${result.poster_path}`}
												className='z-0 select-none w-full object-cover'
											/>
										</Card>
									))}
							</div>
						</div>
						<CardFooter className='z-40 absolute bottom-0 bg-gradient-to-b from-black/0 from-60% via-black/70 via-80% to-black/90 flex-col items-start h-full'></CardFooter>
					</Card>
				</div>
			)}
		</div>
	);
}

export default Featured;
