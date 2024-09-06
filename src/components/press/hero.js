import Image from 'next/image';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Button from '@/components/ui/button';

import pressData from '@/constants/press-data';

export default function Hero() {
	

	return (
		<section
			
			id='hero'
			className='w-full h-screen px-[8vw] lg:px-[clamp(40px,4vw,75px)] py-[4vw] relative flex flex-col lg:flex-row place-content-center lg:place-content-between place-items-center gap-[60px] lg:gap-[0px]'
		>
			<div className='w-full h-full absolute inset-0'>
				<div className='w-full h-full relative'>
					<div className='w-[90vw] lg:w-[56vw] aspect-square absolute top-1/2 left-0 -translate-x-[25%] -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(155,54,255,0.35)_0%,rgba(155,54,255,0)_100%)] blur-[300px]' />
				</div>
			</div>
			<div className='flex flex-col place-items-center lg:place-items-start gap-[50px]'>
				<span>
					<p className='relative text-transparent text-[clamp(14px,1.8vw,34px)] text-center lg:text-left font-inter font-extrabold leading-[275%] uppercase  bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#b51883]'>
						Guaranteed publicity on
					</p>
					<p className='relative text-transparent text-[clamp(35px,6.3vw,120px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#b51883]'>
						200+ Sites
					</p>
					<p className='relative text-transparent text-[clamp(16px,2.7vw,50px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#b51883]'>
						Build trust and credibility with ease
					</p>
				</span>
				<p className='relative w-full lg:max-w-[clamp(0px,46vw,934px)] text-[#FFFFFF] text-[clamp(14px,1.55vw,29px)] text-center lg:text-left font-poppins font-normal leading-[150%]'>
					Publish your story on influential news sites that your competitors
					can't reach. With millions of readers every month, you'll get a
					massive boost in exposure, interest, and credibility.
				</p>
				<Button link='/book-a-call' className='w-fit h-[clamp(36px,4vw,64px)]'>
					Book a Call
				</Button>
			</div>
			<div
				
				className='w-[75vw] max-w-[500px]  lg:max-w-none lg:w-[32.5vw] aspect-[4/3] relative  overflow-hidden'
			>
				
					<span
						
						className={`absolute   flex justify-center inset-0 `}
					>
						<video autoPlay loop muted className='h-full' >
							<source src='/videos/about/globe.mp4'/>
						</video>
					</span>
				
			</div>
		</section>
	);
}
