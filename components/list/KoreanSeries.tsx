'use client';
import { ListSeriesQuery, fetchListSeries } from '@/queries/list/series';
import { API_QUERY } from '@/types/api';
import Flicking from '@egjs/react-flicking';
import { Card, Image, Skeleton } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import SeriesDetail from '../SeriesDetail';

function KoreanSeries() {
	const [query, _] = useState<ListSeriesQuery>({
		page: 1,
		language: 'en-US',
		watch_region: 'ID',
		sort_by: 'popularity.desc',
		with_origin_country: 'KR',
	});
	const { data, isLoading } = useQuery({
		queryKey: [API_QUERY.LIST_SERIES_KOREAN, query],
		queryFn: () => fetchListSeries(query),
	});
	return (
		<div className='mx-20 my-10'>
			<h2 className='pb-6 text-2xl font-bold'>Korean Series</h2>
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
											alt={result.name}
											src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}original/${result.poster_path}`}
											className='z-0 select-none h-full object-scale-down'
										/>
									</Skeleton>
								</Card>
								<div>
									<h5 className='font-bold text-lg text-ellipsis overflow-hidden'>{result.name}</h5>
									<div>{result.id && <SeriesDetail series_id={result.id} />}</div>
								</div>
							</div>
						))}
			</Flicking>
		</div>
	);
}

export default KoreanSeries;
