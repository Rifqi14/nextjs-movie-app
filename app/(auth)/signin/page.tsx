'use client';
import Iconify from '@/components/Iconify';
import { Button, CardFooter, Input, Link } from '@nextui-org/react';
import { useState } from 'react';

function SignInPage() {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => setIsVisible(!isVisible);
	return (
		<>
			<div className='flex flex-col gap-5'>
				<Input type='email' label='Email' labelPlacement={'outside'} placeholder='Enter your email' />
				<Input
					label='Password'
					labelPlacement={'outside'}
					placeholder='Enter your password'
					endContent={
						<button className='focus:outline-none' type='button' onClick={toggleVisibility}>
							{isVisible ? <Iconify icon={'mdi:eye-off'} /> : <Iconify icon={'mdi:eye'} />}
						</button>
					}
					type={isVisible ? 'text' : 'password'}
				/>
				<Button fullWidth variant='light'>
					Forgot Password
				</Button>
				<Button fullWidth className='hover:bg-green-700'>
					Login
				</Button>
			</div>
			<CardFooter className='px-0'>
				<div className='w-full text-center'>
					Dont have an account? <Link className='cursor-pointer'>Sign Up</Link>
				</div>
			</CardFooter>
		</>
	);
}

export default SignInPage;
