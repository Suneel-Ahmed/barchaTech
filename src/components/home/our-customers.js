import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import CustomerReview from '@/components/ui/customer-review';


export default function OurCustomers({ customerReviews, alt = false }) {
	const containerRef = useRef(null);
	console.log(customerReviews)
	const titleRef = useRef(null);
	const reviewListRef = useRef(null);
	const buttonRef = useRef(null);

	useGSAP(
		() => {
			const reviews = Array.from(reviewListRef.current.children);

			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: 'top top',
					end: `+=${window.innerHeight * (window.innerWidth >= 1024 ? 10 : 5)}`,
					scrub: 1,
					pin: true,
					pinSpacing: true,
				},
			});

			reviews.forEach((review) => {
				tl.fromTo(
					review,
					{
						autoAlpha: 0,
					},
					{
						autoAlpha: 1,
					},
					'<'
				);
			});

			reviews.forEach((review, idx) => {
				tl.fromTo(
					review,
					{
						y: '-100vh',
						rotateZ: `${(reviews.length - 1 - idx) * -7}deg`,
						transformOrigin: 'center',
					},
					{
						y: 0,
					},
					'+=0.5'
				);
			});

			reviews.forEach((review, idx) => {
				tl.to(
					review,
					{
						rotateZ: 0,
					},
					idx === 0 ? '+=0.5' : '<'
				);
			});

			tl.to(
				buttonRef.current,
				{
					autoAlpha: 1,
				},
				'<'
			);

			if (window.innerWidth >= 1024) {
				tl.to(
					buttonRef.current,
					{
						autoAlpha: 0,
					},
					'+=1'
				).to(
					titleRef.current,
					{
						y: window.innerWidth >= 1024 ? '-40%' : '0%',
						scale: window.innerWidth >= 1024 ? 0.8 : 1,
					},
					'<'
				);

				reviews.forEach((review, idx) => {
					tl.to(
						review,
						{
							left: `${idx * 25}%`,
							xPercent: 0,
							x: `${(window.innerWidth * 0.25 - review.offsetWidth) / 2}px`,
							y: '50%',
							scale: window.innerWidth >= 1200 ? 0.8 : 0.7,
						},
						'<'
					);
				});
			}

			tl.to(titleRef.current, {
				autoAlpha: 1,
				duration: 0.25,
			});
		},
		{ scope: containerRef }
	);

	return (
		<section
			ref={containerRef}
			id='our-customers'
			className='w-full h-screen relative flex place-content-center place-items-center'
		>
			<div   className='w-full  h-full absolute inset-0'>
				<div className='w-full  h-full relative'>
					<div className='w-[75vw] lg:w-[55vw] aspect-square absolute top-[80%] left-[-10%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(26, 24, 131, 0.15)_0%,rgba(181,24,131,0)_100%)] blur-[125px]' />
					<div className='w-[75vw] lg:w-[55vw] aspect-square absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(26, 24, 131, 0.15)_0%,rgba(181,24,131,0)_100%)] blur-[125px]' />
					<div className='w-[75vw] lg:w-[55vw] aspect-square absolute top-0 right-[-10%] translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(26, 24, 131, 0.35)_0%,rgba(181,24,131,0)_100%)] blur-[125px]' />
				</div>
			</div>
			<p
				ref={titleRef}
				className='mb-[60vh]  relative lg:mb-0 text-transparent text-[clamp(50px,10vw,192px)] text-center font-leagueSpartan font-semibold leading-[100%] uppercase gradient-text-purple'
			>
				Our {!alt ? 'customers' : 'partners'}
				<br />
				speak for us
			</p>
			<div className='w-full h-full absolute inset-0'>
				<ul ref={reviewListRef} className='w-full h-full relative'>
					{customerReviews?.reviews?.slice(0, 4).map((customer, idx) => (
						<li
							key={customer + idx}
							className='w-[clamp(300px,65vw,400px)] lg:w-[clamp(350px,26.25vw,510px)] aspect-square absolute inset-1/2 -translate-x-1/2 -translate-y-1/2'
						>
							<CustomerReview
								name={customer.name}
								image={customer.image}
								review={customer.review}
								link={customer.link}
								unoptimized
							/>
						</li>
					))}
				</ul>
		
			</div>
		</section>
	);
}
