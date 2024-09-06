import { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function NetworkStat({ text, value, symbol }) {
	const containerRef = useRef(null);
	const [animatedValue, setAnimatedValue] = useState(0);

	useGSAP(
		() => {
			const obj = { val: 0 };

			gsap
				.timeline({
					scrollTrigger: {
						trigger: containerRef.current,
						start: 'top 70%',
						end: 'top 30%',
					},
				})
				.to(obj, {
					val: value,
					ease: 'power2.in',
					duration: 1,
					onUpdate: () => {
						setAnimatedValue(`${Math.floor(obj.val)}${symbol}`);
					},
				});
		},
		{ scope: containerRef, dependencies: [value, symbol] }
	);

	return (
		<span
			ref={containerRef}
			className='w-fit min-w-[clamp(0px,17.2vw,330px)] flex flex-col border-t-[1px] border-[#9B36FFA8]'
		>
			<p className='py-[clamp(0px,1.5vw,30px)] text-transparent text-[clamp(0px,5vw,90px)] text-left font-leagueSpartan font-semibold leading-[100%] bg-clip-text bg-gradient-to-r from-[#E33AFF] from-[0%] to-[#FFFFFF] to-[50%]'>
				{animatedValue}
			</p>
			<p className='text-[#FFFFFF] text-[clamp(10px,1.45vw,27px)] text-left font-hvdTrialGraphit font-normal leading-[125%]'>
				{text}
			</p>
		</span>
	);
}
