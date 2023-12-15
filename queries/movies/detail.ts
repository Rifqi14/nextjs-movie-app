import { fetcher } from '@/lib/fetcher';

export type DetailsQuery = {
	language?: string;
	include_video?: string;
	page?: string;
	region?: string;
};

export type MovieDetailApiObject = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: string;
	budget: number;
	genres: {
		id: number;
		name: string;
	}[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: {
		id: number;
		logo_path: string;
		name: string;
		origin_country: string;
	}[];
	release_date: string;
	revenue: number;
	runtime: number;
	status: string;
	tagline: string;
	title: string;
};

export const fetchDetail = async (id: number) => {
	return await fetcher<MovieDetailApiObject>({ path: `movie/${id}` });
};
