import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import CTACard from '@/components/ui/cta-card';

import ctaData from '@/constants/cta-data';

export default function CTA() {
	const containerRef = useRef(null);
	const ctaCardListRef = useRef(null);
	const heading = useRef(null);
	const numberListRef = useRef(null);

	useGSAP(
		() => {
			const ctaCards = Array.from(ctaCardListRef.current.children);
			const numbers = Array.from(numberListRef.current.children);

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top top',
					end: `+=${window.innerHeight * (window.innerWidth >= 1024 ? 10 : 5)}`,
					scrub: 1.5,
					pin: true,
					pinSpacing: true,
				},
			});
			tl.to(heading.current , {autoAlpha: 0})
			tl.set(Array.from(numbers[0].children)[0], {
				color: '#9B36FF',
				fontWeight: 500,
				scale: 1.25,
			}).set(Array.from(numbers[0].children)[1], {
				autoAlpha: 1,
			});

			for (let i = 0; i < ctaCards.length - 1; i++) {
				const ctaCard = gsap.utils.selector(ctaCards[i + 1]);

				tl.to(
					ctaCards[i],
					{
						autoAlpha: 0,
						ease: 'power3.out',
						duration: 0.75,
					},
					'+=0.5'
				)
					.to(
						ctaCards[i + 1],
						{
							autoAlpha: 1,
							ease: 'power3.in',
							duration: 0.75,
						},
						'<'
					)
					.fromTo(
						ctaCard('.cta-card-image'),
						{
							y: '100vh',
						},
						{
							y: 0,
							ease: 'power2.out',
							duration: 1.5,
						},
						'-=1'
					)
					.to(
						Array.from(numbers[i].children)[0],
						{
							color: '#767676',
							fontWeight: 400,
							scale: 1,
						},
						'<'
					)
					.to(
						Array.from(numbers[i].children)[1],
						{
							autoAlpha: 0,
						},
						'<'
					)
					.to(
						Array.from(numbers[i + 1].children)[0],
						{
							color: '#9B36FF',
							fontWeight: 500,
							scale: 1.25,
						},
						'<'
					)
					.to(
						Array.from(numbers[i + 1].children)[1],
						{
							autoAlpha: 1,
						},
						'<'
					)
					.to(ctaCards[i + 1], {
						autoAlpha: 1,
						duration: 0.25,
					});
			}
		},
		{
			scope: containerRef,
		}
	);

	return (
		<section
			ref={containerRef}
			id='Process'
			className='w-full h-screen pl-[16vw] lg:pl-[10vw] pr-[8vw] lg:pr-[clamp(40px,4vw,75px)] relative'
		>
			<div ref={heading} className='absolute max-lg:hidden top-[150px] ' >
        <h1 className='gradient-text-purple  relative font-inter font-semibold text-[clamp(40px,5.25vw,98px)]  z-20 ' >HOW WE HELP</h1>
        </div>
			<div className='w-full h-full absolute inset-0'>
				<div className='w-full h-full relative'>
					<ul
						ref={numberListRef}
						className='px-[4vw] lg:px-[clamp(40px,4vw,75px)] absolute top-1/2 left-0 -translate-y-1/2 flex flex-col place-content-between place-items-start gap-[clamp(10px,1vw,20px)]'
					>
						{ctaData.displays.map((display, idx) => (
							<li
								key={display.title + idx}
								className='flex place-content-center place-items-center gap-[clamp(5px,0.5vw,10px)]'
							>
								<p className='text-[#767676] text-[clamp(14px,1.1vw,20px)] text-left font-hvdTrialGraphit font-normal leading-[125%]'>
									{idx + 1}
								</p>
								<svg
									viewBox='0 0 30 6'
									fill='none'
									className='w-[clamp(15px,1.75vw,35px)] invisible'
								>
									<path
										d='M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5H30V2.5H3V3.5Z'
										fill='#9B36FF'
									/>
								</svg>
							</li>
						))}
					</ul>
				</div>
			</div>
			<ul
				ref={ctaCardListRef}
				className='w-full h-full relative flex place-content-between place-items-center'
			>
				{ctaData.displays.map((display, idx) => (
					<li
						key={display.title + idx}
						className={`w-full h-full absolute ${
							idx > 0 ? 'invisible' : 'visible'
						}`}
					>
						<CTACard
							number={idx + 1}
							title={display.title}
							text={display.text}
							image={display.image}
							link={display.link}
							alt={idx % 2 !== 0 ? true : false}
						/>
					</li>
				))}
			</ul>
		</section>
	);
}
