import { Button, ButtonProps } from '@nextui-org/react';
import React from 'react';

interface Props extends ButtonProps {
	children: React.ReactNode;
}

export default function SecondaryButton({ children, ...props }: Props) {
	return (
		<Button className='bg-transparent border-2 border-[#F9F9F9] text-[#F9F9F9]' {...props}>
			{children}
		</Button>
	);
}
