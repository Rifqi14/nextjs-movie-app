export type FetcherParams<TQuery extends unknown> = {
	path: string;
	query?: TQuery;
};

export const fetcher = async <TResponse, TQuery extends unknown = unknown>({ path, query }: FetcherParams<TQuery>) => {
	let queryParams = '';
	if (query) {
		queryParams = `?${new URLSearchParams(query).toString()}`;
	}
	const url = `${process.env.NEXT_PUBLIC_API_URL}/${path}${queryParams}`;
	const res = await fetch(url, {
		headers: {
			Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
			accept: 'application/json',
		},
	});

	return (await res.json()) as TResponse;
};
