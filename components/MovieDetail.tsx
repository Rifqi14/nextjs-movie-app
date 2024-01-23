import { fetchDetail } from '@/queries/movies/detail';
import { API_QUERY } from '@/types/api';
import { useQuery } from '@tanstack/react-query';
type Props = {
	movie_id: number;
};

function MovieDetail({ movie_id }: Props) {
	const { data } = useQuery({ queryKey: [API_QUERY.MOVIE_DETAIL, movie_id], queryFn: () => fetchDetail(movie_id) });
	return (
		<div className='flex items-center gap-3 text-gray-400'>
			{data &&
				data.genres &&
				data.genres.map((genre, idx) => (
					<>
						<p key={genre.id} className='text-ellipsis'>
							{genre.name}
						</p>
						{data.genres && data.genres.length && data.genres.length - 1 != idx && (
							<svg height='6' width='6'>
								<circle cx='3' cy='3' r='3' fill='gray' />
							</svg>
						)}
					</>
				))}
		</div>
	);
}

export default MovieDetail;
