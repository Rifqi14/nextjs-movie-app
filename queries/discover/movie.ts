import { paths } from '@/generated/schema';
import { fetcher } from '@/lib/fetcher';

export type DiscoverMovieQuery = paths['/3/discover/movie']['get']['parameters']['query'];

export type DiscoverMovieResponse = paths['/3/discover/movie']['get']['responses']['200']['content']['application/json'];

export const fetchDiscoverMovie = async (query: DiscoverMovieQuery) => {
	return await fetcher<DiscoverMovieResponse, DiscoverMovieQuery>({ path: '/discover/movie', query: query });
};
