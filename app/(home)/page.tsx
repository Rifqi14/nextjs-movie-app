import Featured from '@/components/Featured';
import HeroBanner from '@/components/HeroBanner';
import JustRelease from '@/components/JustRelease';
import MovieOnAwards from '@/components/MovieOnAwards';
import PopularWeek from '@/components/PopularWeek';
import VerticalList from '@/components/VerticalList';
import KoreanSeries from '@/components/list/KoreanSeries';
import Movies from '@/components/list/Movies';
import Series from '@/components/list/Series';

export default function Home() {
	return (
		<div className='-mt-[5rem]'>
			<HeroBanner />
			<JustRelease />
			<PopularWeek />
			<Featured />
			<Movies />
			<Series />
			<KoreanSeries />
			{/* Live Vertical */}
			<div className='flex mx-20 gap-10'>
				<MovieOnAwards />
				<VerticalList title='Fast' />
				<VerticalList title='Live' />
			</div>
		</div>
	);
}
