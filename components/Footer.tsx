import { Link } from '@nextui-org/react';

export default function Footer() {
	return (
		<div className='border-t border-t-gray-800 px-20 py-16'>
			<div className='flex justify-between'>
				<div className='w-1/4'>
					<h1 className='text-4xl font-bold mb-16'>Our platform is trusted by millions & features best updated movies all around the world.</h1>
					<div className='flex gap-8'>
						<Link color='foreground' href='#'>
							Privacy policy
						</Link>
						<Link color='foreground' href='#'>
							Term of service
						</Link>
						<Link color='foreground' href='#'>
							Language
						</Link>
					</div>
				</div>
				<div>
					<div className='flex gap-4'>
						<Link color='foreground' href='#'>
							Home
						</Link>
						{'/'}
						<Link color='foreground' href='#'>
							Discover
						</Link>
						{'/'}
						<Link color='foreground' href='#'>
							Influence
						</Link>
						{'/'}
						<Link color='foreground' href='#'>
							Release
						</Link>
					</div>
				</div>
			</div>
			<p className='text-right'>&copy;2023</p>
		</div>
	);
}
