import { Button } from '@nextui-org/react';
import React, { ReactNode, useState } from 'react';
import Iconify from './Iconify';

export type Props = {
	children: React.ReactNode;
};

export default function Slider({ children }: Props) {
	const [active, setActive] = useState<number>(0);
	return (
		children && (
			<div>
				{active < (children as Array<ReactNode>).length - 1 && (
					<Button
						isIconOnly
						className='absolute right-0 z-40 w-20 h-full bg-transparent hover:text-white text-gray-600/90'
						disableRipple
						startContent={<Iconify icon={'icon-park-outline:right-c'} className='text-4xl' />}
						onClick={() => active < (children as Array<ReactNode>).length && setActive(active + 1)}
					></Button>
				)}
				{active > 0 && (
					<Button
						isIconOnly
						className='absolute z-40 w-20 h-full bg-transparent hover:text-white text-gray-600/90'
						disableRipple
						startContent={<Iconify icon={'icon-park-outline:left-c'} className='text-4xl' />}
						onClick={() => active < (children as Array<ReactNode>).length && setActive(active - 1)}
					></Button>
				)}
				<div className='absolute z-40 left-[45%] bottom-10 flex gap-1'>
					{children &&
						(children as Array<ReactNode>).map((_, idx) => (
							<Button
								isIconOnly
								className={`w-5 bg-transparent min-w-unit-1 ${idx === active ? 'text-white' : 'text-gray-600/90'} hover:text-white`}
								startContent={<Iconify icon={'icon-park-outline:dot'} className='text-xl' onClick={() => setActive(idx)} />}
							></Button>
						))}
				</div>
				{children && (children as Array<ReactNode>)[active]}
			</div>
		)
	);
}
