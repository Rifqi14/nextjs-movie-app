import { paths } from '@/generated/schema';
import { fetcher } from '@/lib/fetcher';

export type ListSeriesQuery = paths['/3/discover/tv']['get']['parameters']['query'];

export type ListSeriesResponse = paths['/3/discover/tv']['get']['responses']['200']['content']['application/json'];

export const fetchListSeries = async (query: ListSeriesQuery) => {
	return await fetcher<ListSeriesResponse, ListSeriesQuery>({ path: '/discover/tv', query: query });
};
