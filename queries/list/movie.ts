import { paths } from '@/generated/schema';
import { fetcher } from '@/lib/fetcher';

export type ListMovieQuery = paths['/3/movie/now_playing']['get']['parameters']['query'];

export type ListMovieResponse = paths['/3/movie/now_playing']['get']['responses']['200']['content']['application/json'];

export const fetchListMovie = async (query: ListMovieQuery) => {
	return await fetcher<ListMovieResponse, ListMovieQuery>({ path: '/movie/now_playing', query: query });
};
