import { fetchDetail } from '@/queries/series/detail';
import { API_QUERY } from '@/types/api';
import { useQuery } from '@tanstack/react-query';
type Props = {
	series_id: number;
};

function SeriesDetail({ series_id }: Props) {
	const { data } = useQuery({ queryKey: [API_QUERY.SERIES_DETAIL, series_id], queryFn: () => fetchDetail(series_id) });
	return (
		<div className='flex items-center gap-3 text-gray-400'>
			{data &&
				data.genres &&
				data.genres.map((genre, idx) => (
					<>
						<p key={genre.id}>{genre.name}</p>
						{idx != (data.genres ? data.genres.length - 1 : 0) && (
							<svg height='6' width='6'>
								<circle cx='3' cy='3' r='3' fill='gray' />
							</svg>
						)}
					</>
				))}
		</div>
	);
}

export default SeriesDetail;
