import Layout from '@/layout/layout';

import Loader from '@/components/ui/loader';
import Hero from '@/components/home/hero';
import IndustryLeaders from '@/components/home/industry-leaders';
import OurServices from '@/components/home/our-services';
import OurNetwork from '@/components/home/our-network';
import OurCustomers from '@/components/home/our-customers';
import CTA from '@/components/home/cta';
import BookCall from '@/components/home/book-call';

import useAssetsLoader from '@/hooks/useAssetsLoader';
import useDocumentTitle from '@/hooks/useDocumentTitle';

import industryLeaderData from '@/constants/industry-leader-data';
import servicesData from '@/constants/services-data';
import customerData from '@/constants/customer-data';
import ctaData from '@/constants/cta-data';
import network_Data from '@/constants/network-data';
import footerData from '@/constants/footer-data';

export default function Home() {
	useDocumentTitle('Home');

	const { areImagesLoaded, areFontsLoaded, areVideosLoaded } = useAssetsLoader(
		[
			...industryLeaderData,
			...servicesData.services
				.filter((service) => !service.video)
				.map((service) => service.src),
			...customerData.reviews.map((review) => review.image),
			...ctaData.displays.map((display) => display.image),
			...footerData.images,
		],
		[
			'normal 100px Inter',
			'normal 200px Inter',
			'normal 300px Inter',
			'normal 400px Inter',
			'normal 500px Inter',
			'normal 600px Inter',
			'normal 700px Inter',
			'normal 800px Inter',
			'normal 900px Inter',
			'normal 100px LeagueSpartan',
			'normal 200px LeagueSpartan',
			'normal 300px LeagueSpartan',
			'normal 400px LeagueSpartan',
			'normal 500px LeagueSpartan',
			'normal 600px LeagueSpartan',
			'normal 700px LeagueSpartan',
			'normal 800px LeagueSpartan',
			'normal 900px LeagueSpartan',
			'normal 100px HvDTrialGraphit',
			'normal 200px HvDTrialGraphit',
			'normal 300px HvDTrialGraphit',
			'normal 400px HvDTrialGraphit',
			'normal 500px HvDTrialGraphit',
			'normal 600px HvDTrialGraphit',
			'normal 700px HvDTrialGraphit',
			'normal 800px HvDTrialGraphit',
			'normal 900px HvDTrialGraphit',
		],
		[
			'videos/home/hero.mp4',
			'videos/home/services-video-01.mp4',
			'videos/home/services-video-02.mp4',
			'videos/home/services-video-03.mp4',
		]
	);

	if (!areImagesLoaded || !areFontsLoaded || !areVideosLoaded) {
		return (
			<div
				className='spinner-container'
				style={{
					position: 'fixed',
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					zIndex: 9999,
				}}
			>
				<Loader />
			</div>
		);
	}

	return (
		<Layout>
			<Hero />
			<OurCustomers customerReviews={customerData} />
			<OurServices />
			<IndustryLeaders industryLeaders={industryLeaderData} />
			<CTA />
			<OurNetwork networkStats={network_Data} />
			<BookCall />
		</Layout>
	);
}

