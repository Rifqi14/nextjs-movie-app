import { paths } from '@/generated/schema';
import { fetcher } from '@/lib/fetcher';

export type SeriesDetailQuery = paths['/3/tv/{series_id}']['get']['parameters']['query'];

export type SeriesDetailResponse = paths['/3/tv/{series_id}']['get']['responses']['200']['content']['application/json'];

export const fetchDetail = async (id: number) => {
	return await fetcher<SeriesDetailResponse, SeriesDetailQuery>({ path: `tv/${id}` });
};
