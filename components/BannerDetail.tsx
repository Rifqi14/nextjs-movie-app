import { runtimeFormatter } from '@/lib/helper';
import { fetchDetail } from '@/queries/movies/detail';
import { API_QUERY } from '@/types/api';
import { useQuery } from '@tanstack/react-query';

type Props = {
	movie_id: number;
};

export default function BannerDetail({ movie_id }: Props) {
	const { data } = useQuery({ queryKey: [API_QUERY.MOVIE_DETAIL, movie_id], queryFn: () => fetchDetail(movie_id) });
	return (
		<div className='flex items-center gap-3 text-gray-400'>
			<p>{runtimeFormatter(data?.runtime ?? 0)}</p>{' '}
			<svg height='6' width='6'>
				<circle cx='3' cy='3' r='3' fill='gray' />
			</svg>
			<p>{data?.release_date ? new Date(data?.release_date).getFullYear() : ''}</p>
			<svg height='6' width='6'>
				<circle cx='3' cy='3' r='3' fill='gray' />
			</svg>
			{data &&
				data.genres.map((genre, idx) => (
					<>
						<p key={genre.id}>{genre.name}</p>
						{idx != data.genres.length - 1 && (
							<svg height='6' width='6'>
								<circle cx='3' cy='3' r='3' fill='gray' />
							</svg>
						)}
					</>
				))}
		</div>
	);
}
