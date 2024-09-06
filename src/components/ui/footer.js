import Image from 'next/image';

import Logo from '@/components/ui/logo';
import {
	InstagramIcon,
	XIcon,
	WhatsAppIcon,
	FacebookIcon,
	LinkedInIcon,
} from '@/components/ui/socials';

import footerData from '@/constants/footer-data';
import socialData from '@/constants/social-data';

export default function Footer() {
	const onSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<footer className='w-full min-h-[50vh] max-sm:pb-[40px] lg:h-[75vh] px-[8vw] lg:px-[clamp(40px,4vw,75px)] relative flex flex-wrap place-content-end place-items-center'>
			<div className='w-max h-fit max-h-full absolute left-1/2 bottom-0 lg:inset-1/2 -translate-x-1/2 lg:-translate-y-1/2 grid grid-rows-3 grid-cols-7 place-items-end gap-[2vw] opacity-20 mix-blend-plus-lighter'>
				{footerData.images.map((image, idx) => (
					<div
						key={image + idx}
						className='w-[40vh] aspect-video relative opacity-20'
						style={{
							transform: `translate(${
								idx / 7 >= 0
									? idx / 7 >= 1
										? idx / 7 >= 2
											? '-15vw'
											: '-10vw'
										: '-5vw'
									: 0
							}, 0)`,
						}}
					>
						<Image
							src={image}
							alt={image}
							fill
							// sizes='40vh'
							className='object-cover object-top rounded-[0.5vw] overflow-hidden '
						/>
					</div>
				))}
			</div>
			<div className='w-full lg:w-[42.5%] relative flex flex-col gap-[clamp(30px,5vw,100px)]'>
				{/* <Logo className='w-[192px] lg:w-[clamp(0px,20vw,384px)]' /> */}
				<div className=' flex items-start justify-start  flex-col'>
				<Image src={'/images/logo/logo.png'} className='w-[60px] lg:w-[clamp(0px,20vw,150px)]' width={500} height={500} alt='nebulanest' />
				<h2 className=' mt-2 text-[#FFFFFF]  gradient-text-purple text-[clamp(18px,4vw,45px)]  font-inter flex-col pl-5 text-2xl flex gap-y-2'>
					Barcha Tech 
					<span className='text-[#FFFFFF] text-2xl gradient-text-purple text-[clamp(18px,4vw,45px)]  font-inter  '>
						Technologies
					</span>
				</h2>
				</div>
				<form
					onSubmit={onSubmit}
					className='w-[clamp(0px,75%,350px)] lg:w-[clamp(0px,27.5vw,528px)] pb-[clamp(10px,1vw,20px)] flex border-b-[2px] border-[#17c8f7]'
				>
					<svg
						viewBox='0 0 38 29'
						fill='none'
						className='w-[clamp(0px,5vw,28px)] lg:w-[clamp(0px,2vw,38px)] mr-[1.25rem] lg:mr-[2.5rem]'
					>
						<path
							d='M2.4442 4.47516L1.80646 4.00383V4.79684V26.4753V26.8753H2.20646H35.3033H35.7033V26.4753V4.79684V4.00383L35.0656 4.47516L18.7549 16.5299L2.4442 4.47516ZM18.5172 14.7563L18.7549 14.932L18.9926 14.7563L35.5411 2.52593L36.5176 1.80425H35.3033H2.20646H0.992241L1.96872 2.52593L18.5172 14.7563ZM0.4 28.284V0.4H37.1098V28.284H0.4Z'
							fill='#17c8f7'
							stroke='#17c8f7'
							strokeWidth='0.8'
						/>
					</svg>
					<input
						type='email'
						placeholder='Enter your E-mail'
						className='flex-grow text-[#B0B0B0] text-[clamp(12px,1.1vw,21px)] text-justify font-light leading-[150%] italic bg-transparent outline-none'
					/>
					<button type='submit' className='ml-[1.25rem] lg:ml-[2.5rem]'>
						<svg
							viewBox='0 0 49 20'
							fill='none'
							className='w-[clamp(0px,5vw,30px)] lg:w-[clamp(0px,2.55vw,49px)]'
						>
							<path
								d='M2 8.75C1.30964 8.75 0.75 9.30964 0.75 10C0.75 10.6904 1.30964 11.25 2 11.25V8.75ZM47.8839 10.8839C48.372 10.3957 48.372 9.60427 47.8839 9.11612L39.9289 1.16117C39.4408 0.67301 38.6493 0.67301 38.1612 1.16117C37.673 1.64932 37.673 2.44078 38.1612 2.92893L45.2322 10L38.1612 17.0711C37.673 17.5592 37.673 18.3507 38.1612 18.8388C38.6493 19.327 39.4408 19.327 39.9289 18.8388L47.8839 10.8839ZM2 11.25H47V8.75H2V11.25Z'
								fill='#17c8f7'
							/>
						</svg>
					</button>
				</form>
			</div>
			<div className='mt-[10vh] lg:mt-0 relative flex flex-grow place-content-between place-items-start'>
				{footerData.lists.map((list) => (
					<div
						key={list.name}
						className='flex flex-col gap-[clamp(25px,3.5vw,70px)]'
					>
						<p className='text-[#FFFFFF] text-[clamp(18px,2vw,38px)] text-left font-hvdTrialGraphit font-normal leading-[100%]'>
							{list.name}
						</p>
						<ul className='flex flex-col gap-[clamp(20px,1.75vw,35px)] text-[#FFFFFF] text-[clamp(12px,1.45vw,28px)] text-left font-hvdTrialGraphit font-thin leading-[100%]'>
							{list.links.map((link) => (
								<li key={link.name}>
									<a href={link.path}>{link.name}</a>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className='w-full h-[15%] max-sm:mt-[2vh] lg:h-1/3 relative flex place-content-center place-items-center'>
				<ul className='flex gap-[clamp(30px,3vw,60px)]'>
					{socialData.map((social) => (
						<li key={social.name}>
							<a href={social.path}>
								{social.name === 'Instagram' && (
									<InstagramIcon className='h-[clamp(20px,2vw,38px)]' />
								)}
								{social.name === 'X' && (
									<XIcon className='h-[clamp(20px,2vw,38px)]' />
								)}
								{social.name === 'WhatsApp' && (
									<WhatsAppIcon className='h-[clamp(20px,2vw,38px)]' />
								)}
								{social.name === 'Facebook' && (
									<FacebookIcon className='h-[clamp(20px,2vw,38px)]' />
								)}
								{social.name === 'LinkedIn' && (
									<LinkedInIcon className='h-[clamp(20px,2vw,38px)]' />
								)}
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}
