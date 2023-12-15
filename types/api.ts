export type MovieListBaseApiResponse = {
	dates: {
		maximum: string;
		minimum: string;
	};
	page: number;
	total_pages: number;
	total_results: number;
};

export enum API_QUERY {
	NOW_PLAYING = 'NOW_PLAYING',
	DISCOVER_MOVIE = 'DISCOVER_MOVIE',
	MOVIE_DETAIL = 'MOVIE_DETAIL',
	COMPANY = 'COMPANY',
	JUST_RELEASE = 'JUST_RELEASE',
}
