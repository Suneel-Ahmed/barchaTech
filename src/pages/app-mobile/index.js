import React from "react";
import Layout from "@/layout/layout";
import Image from "next/image";
import Sec2 from "@/components/app-mobile/Sec2";
import Sec3 from "@/components/app-mobile/Sec3";
import Sec4 from "@/components/app-mobile/Sec4";
import Sec6 from "@/components/app-mobile/Sec6";
import Button from '@/components/ui/button';

// Images
import leftMobile from "../../../public/images/app-mobile/mobileLeft.png";
import rightMobile from "../../../public/images/app-mobile/mobileRight.png";
import bgNexus from "../../../public/images/app-mobile/bg-nexus.png";
import iphone12 from "../../../public/images/app-mobile/iPhone12.png";

// Icons
import brandStrategy_icon from "../../../public/images/app-mobile/brandStrategy_Icon.svg";
import productDesign_Icon from "../../../public/images/app-mobile/productDesign_Icon.svg";
import productStrategy_Icon from "../../../public/images/app-mobile/productStrategy_Icon.svg";
import softwareDev_Icon from "../../../public/images/app-mobile/softwareDev_Icon.svg";
import apple_Icon from "../../../public/images/app-mobile/apple_Icon.svg";
import android_Icon from "../../../public/images/app-mobile/android_Icon.svg";
import reactNative_Icon from "../../../public/images/app-mobile/reactNative_Icon.svg";
import lot_Icon from "../../../public/images/app-mobile/lot_Icon.svg";
import game_Icon from "../../../public/images/app-mobile/game_Icon.svg";
import flutter_Icon from "../../../public/images/app-mobile/flutter_Icon.svg";
import rich_Icon from "../../../public/images/app-mobile/rich_Icon.svg";
import thumb_Icon from "../../../public/images/app-mobile/thumb_Icon.svg";
import security_Icon from "../../../public/images/app-mobile/security_Icon.svg";
import feedback_Icon from "../../../public/images/app-mobile/feedback_Icon.svg";
import lastSecLogoBg from "../../../public/images/app-mobile/lastSecLogoBg.png";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const index = () => {
  useDocumentTitle("App Mobile");

  const brandStrategy = [
    {
      id: 1,
      title: "Brand strategy",
      icon: (
        <Image
          src={brandStrategy_icon}
          width={200}
          className="w-[70px] h-auto"
          height={200}
          alt="Brandstrategy icon"
          priority
        />
      ),
      para: "Craft a compelling narrative for your mobile app that resonates with your target audience. Our brand strategy service focuses on defining your app’s identity, mission, and values, ensuring they align with your business goals and market demands.",
    },
    {
      id: 2,
      title: "PRODUCT DESIGN",
      icon: (
        <Image
          src={productDesign_Icon}
          width={200}
          className="w-[50px] h-auto"
          height={200}
          alt="productDesign icon"
          priority
        />
      ),
      para: "Turn your vision into a stunning reality with our product design service. Specializing in intuitive, user-friendly interfaces, our design team prioritizes user experience (UX) and user interface (UI).",
    },
    {
      id: 3,
      title: "PRODUCT STRATEGY",
      icon: (
        <Image
          src={productStrategy_Icon}
          width={200}
          className="w-[70px] h-auto"
          height={200}
          alt="productStrategy icon"
          priority
        />
      ),
      para: "Navigate the path to success with a clear and focused product strategy. Our approach involves deep market analysis, competitive research, and user behavior insights to inform the development roadmap of your mobile app.",
    },
    {
      id: 4,
      title: "SOFTWARE DEVELOPMENT",
      icon: (
        <Image
          src={softwareDev_Icon}
          width={200}
          className="w-[70px] h-auto"
          height={200}
          alt="softwareDev icon"
          priority
        />
      ),
      para: "Bring your mobile app to life with our comprehensive software development service. From backend to frontend development, our team of skilled developers uses the latest technologies and agile methodologies to build robust, scalable, and efficient mobile applications.",
    },
  ];

  const sec4 = [
    {
      id: 1,
      title: "iOS Apps",
      icon: (
        <Image
          src={apple_Icon}
          width={200}
          className="w-[70px] h-auto"
          height={200}
          alt="Brandstrategy icon"
          priority
        />
      ),
      para: "Scalable iOS application development services with a focus on usability. ",
    },
    {
      id: 2,
      title: "Android Apps",
      icon: (
        <Image
          src={android_Icon}
          width={200}
          className="w-[70px] h-auto"
          height={200}
          alt="Brandstrategy icon"
          priority
        />
      ),
      para: "Robust Android applications for all businesses and industries.",
    },
    {
      id: 3,
      title: "react native",
      icon: (
        <Image
          src={reactNative_Icon}
          width={200}
          className="w-[70px] h-auto"
          height={200}
          alt="Brandstrategy icon"
          priority
        />
      ),
      para: "Exceptional react native applications for iOS and Android platforms.",
    },
  ];

  const sec4Right = [
    {
      id: 1,
      title: "lot Apps",
      icon: (
        <Image
          src={lot_Icon}
          width={200}
          className="w-[70px] h-auto"
          height={200}
          alt="Brandstrategy icon"
          priority
        />
      ),
      para: "We provide user-friendly Internet of Things (IoT) applications to different companies.",
    },
    {
      id: 2,
      title: "game Apps",
      icon: (
        <Image
          src={game_Icon}
          width={200}
          className="w-[70px] h-auto"
          height={200}
          alt="Brandstrategy icon"
          priority
        />
      ),
      para: "User-friendly gaming applications for Android and iOS applications.",
    },
    {
      id: 3,
      title: "flutter",
      icon: (
        <Image
          src={flutter_Icon}
          width={200}
          className="w-[70px] h-auto"
          height={200}
          alt="Brandstrategy icon"
          priority
        />
      ),
      para: "Flutter-based custom mobile applications for businesses.",
    },
  ];

  const sec5 = [
    {
      id: 1,
      icon: rich_Icon,
      title: "A rich experience",
      para: "To create a mobile app that users will download and use frequently, you must provide an experience that is not available elsewhere. Often, businesses get caught up in the idea that they need to create a mobile app because it appears to be the thing that everyone is doing.",
    },
    {
      id: 2,
      icon: security_Icon,
      title: "security",
      para: "Recent high-profile online data breaches have highlighted the importance of app security. The confidentiality of users’ private data is a fundamental requirement of any mobile app. It is also critical that users understand that strong security measures are in place.",
    },
    {
      id: 3,
      icon: feedback_Icon,
      title: "Feedback",
      para: "Make it simple for users to provide feedback. It fosters a sense of involvement and demonstrates that your company listens to its customers. A user’s ability to leave reviews and comments should be simple. You should also encourage comments about the app’s functionality.",
    },
    {
      id: 4,
      icon: thumb_Icon,
      title: "usability FIRst",
      para: "It is critical to create high-quality apps. The app should be innovative, informative, and simple to use. It should emphasize interaction and simplicity, be uncomplicated, and include the expected elements.",
    },
  ];

  return (
    <Layout>
      <section className="w-full h-screen  relative max-sm:px-[20px] px-[100px] flex justify-center items-center">
        <div className="gradient-circle  -top-[30%] -left-[30%]" />
        <div className="gradient-circle -top-[30%] -right-[30%]" />
        <div className="gradient-circle z-20 w-[1005.64px] h-[1005.64px]" />
        <div className="flex z-30 flex-col  items-center gap-[40px]">
          <h1 className="text-[67px]  font-inter max-sm:text-[40px] max-sm:leading-[50px] max-md:text-[50px] max-lg:text-[58px] max-w-[1122px] text-center font-extrabold leading-[81px]  gradient-text">
            Transform Your Ideas Into Innovative Mobile Apps
          </h1>

          <Button
            link="/#book-a-call"
            className="w-fit h-[clamp(36px,4vw,64px)]"
          >
            Book a Call
          </Button>
        </div>

        <div className="absolute">
          <div className="w-[1005.64px] opacity-[0.3] gradient-border flex justify-center items-center h-[1023.61px]  border-[1.3px]">
            <div className="w-[771.81px] gradient-border flex justify-center items-center h-[788.07px]  border-[1.3px]">
              <div className="w-[571.81px] gradient-border flex justify-center items-center h-[588.07px]  border-[1.3px]"></div>
            </div>
          </div>
          {/* <div className='w-[1005.64px] h-[1023.61px] rounded-full border-[1.3px]' ></div> */}
        </div>

        <div className="absolute max-lg:hidden   max-xl:left-0 max-2xl:left-[5%] left-[15%] top-[40%]">
          <Image
            src={rightMobile}
            alt="mobile-phone"
            className="max-w-[349.32px] floating-element h-auto"
            width={500}
            height={500}
            priority
          />
        </div>
        <div className="absolute right-[15%] max-lg:hidden max-xl:right-0 max-2xl:right-[5%] top-[40%]">
          <Image
            src={leftMobile}
            alt="mobile-phone"
            className="max-w-[350px] floating-element2 h-auto"
            width={500}
            height={500}
            priority
          />
        </div>
      </section>

      <Sec2
        bgNexus={bgNexus}
        leftMobile={leftMobile}
        rightMobile={rightMobile}
        brandStrategy={brandStrategy}
      />

      <Sec3
        heading={"End-to-End Services: From ideation to launch and beyond"}
        para={
          " Our custom web design agency perpetuates positive change and has growth-driven purpose behind every pixel. We combine a well-refined process with stunning visuals to craft a one of a kind user experience."
        }
        leftMobile={leftMobile}
        rightMobile={rightMobile}
      />

      <Sec4 sec4={sec4} sec4Right={sec4Right} iphone12={iphone12} />

      <section className="w-full flex  flex-col max-sm:px-[20px] max-xl:px-[50px] relative py-[100px] gap-[116px] px-[100px]">
        <h1 className="text-[clamp(24px,10vw,80px)] text-center    font-inter font-extrabold gradient-text uppercase">
          SOME OF THE BEST FEATURES
        </h1>
        <div className="gradient-circle top-[20%] -left-[10%]" />
        <div className="flex flex-wrap  justify-between max-lg:justify-center gap-y-[109px]">
          {sec5?.map((val) => (
            <div
              key={val?.id}
              className="flex max-lg:justify-center max-lg:w-full max-xl:w-[460px] max-2xl:w-[530px]   max-w-[660px] items-center max-2xl:gap-[20px] gap-[50px]"
            >
              <div className="gradient-IconBox max-lg:hidden  max-md:w-[200px] max-sm:w-[100px] max-sm:h-[100px] w-[153px] flex justify-center items-center h-[170px] rounded-[23px] relative overflow-hidden">
                <div className="content  p-[15px]">
                  <Image
                    src={val?.icon}
                    width={200}
                    className="  w-full h-auto"
                    height={200}
                    alt="icon"
                    priority
                  />
                </div>
              </div>
              <div className="flex max-lg:w-full ps-[20px] w-[573px]  flex-col gap-[23px]">
                <h2 className="gradient-text  flex  items-center gap-x-3  font-inter text-[clamp(20px,2.55vw,34px)] leading-[140%] uppercase font-extrabold">
                  <div className="gradient-IconBox lg:hidden  max-lg:w-[80px] max-lg:h-[80px]  w-[153px] flex justify-center items-center h-[170px] rounded-[23px] relative overflow-hidden">
                    <div className="content  p-[15px]">
                      <Image
                        src={val?.icon}
                        width={200}
                        className="  w-full h-auto"
                        height={200}
                        alt="icon"
                        priority
                      />
                    </div>
                  </div>
                  {val?.title}
                </h2>
                <p className="text-[clamp(16px,1.55vw,20px)] leading-[140%]  font-normal text-poppins ">
                  {val?.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Sec6 lastSecLogoBg={lastSecLogoBg} />
    </Layout>
  );
};

export default index;
