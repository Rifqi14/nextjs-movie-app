import { fetcher } from '@/lib/fetcher';
import { MovieListBaseApiResponse } from '@/types/api';

export type NowPlayingQuery = {
	language?: string;
	include_video?: string;
	page?: string;
	region?: string;
};

export type NowPlayingApiObject = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type NowPlayingApiResponse = MovieListBaseApiResponse & {
	results: NowPlayingApiObject[];
};

export const fetchNowPlaying = async (query?: NowPlayingQuery) => {
	return await fetcher<NowPlayingApiResponse, NowPlayingQuery>({ path: '/movie/now_playing', query: query });
};
