import React from "react";
import Layout from "@/layout/layout";
import Image from "next/image";
import Sec2 from "@/components/app-mobile/Sec2";
import Sec3 from "@/components/app-mobile/Sec3";
import Sec4 from "@/components/app-mobile/Sec4";
import Sec6 from "@/components/app-mobile/Sec6";
import Button from '@/components/ui/button';

// Images
import bgNexus from "../../../public/images/app-mobile/bg-nexus.png";

import bannerImg from "../../../public/images/Innovative-websites/bannerImg.png";
import sec2_Img from "../../../public/images/Innovative-websites/sec2.png";
import IncredibleWebsites_Img from "../../../public/images/Innovative-websites/IncredibleWebsites_Img.png";
import WebsiteMaintenance from "../../../public/images/Innovative-websites/WebsiteMaintenance.png";

// Icons
import brandStrategy_icon from "../../../public/images/app-mobile/brandStrategy_Icon.svg";
import productDesign_Icon from "../../../public/images/app-mobile/productDesign_Icon.svg";
import productStrategy_Icon from "../../../public/images/app-mobile/productStrategy_Icon.svg";
import softwareDev_Icon from "../../../public/images/app-mobile/softwareDev_Icon.svg";
import webMaintenance_Icon from "../../../public/images/Innovative-websites/webmaintenace_icon.svg";
import Content_Icon from "../../../public/images/Innovative-websites/content_Icon.svg";
import UI_Icon from "../../../public/images/Innovative-websites/Ui_icon.svg";
import reactNative_Icon from "../../../public/images/app-mobile/reactNative_Icon.svg";
import lot_Icon from "../../../public/images/app-mobile/lot_Icon.svg";
import flutter_Icon from "../../../public/images/app-mobile/flutter_Icon.svg";
import rich_Icon from "../../../public/images/app-mobile/rich_Icon.svg";
import thumb_Icon from "../../../public/images/app-mobile/thumb_Icon.svg";
import security_Icon from "../../../public/images/app-mobile/security_Icon.svg";
import feedback_Icon from "../../../public/images/app-mobile/feedback_Icon.svg";
import lastSecLogoBg from "../../../public/images/app-mobile/lastSecLogoBg.png";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const index = () => {
  useDocumentTitle("Innovative Websites");

  const brandStrategy = [
    {
      id: 1,
      title: "UI | UX",
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
      para: "We  develop an intuitive user experience across all devices, with strategic information architecture, and a clear user journey from start to finish.",
    },
    {
      id: 2,
      title: "Development",
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
      para: "The priorities for all of our websites are automation, problem-solving, robust functionality and a strong foundation for successful SEO.",
    },
    {
      id: 3,
      title: "quality assurance",
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
      para: "Our team checks that all website components are coherently working together, delivering a positive UX through and through.",
    },
    {
      id: 4,
      title: "Deployment",
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
      para: "It’s launch time! Right when your website goes live, we keep a close eye on each and every aspect of it. ",
    },
  ];

  const sec4 = [
    {
      id: 1,
      title: "Website Maintenance",
      icon: (
        <Image
          src={webMaintenance_Icon}
          width={200}
          className="w-[70px] h-auto"
          height={200}
          alt="Brandstrategy icon"
          priority
        />
      ),
      para: "Our website maintenance services ensure that your company's website remains healthy and up-to-date.",
    },
    {
      id: 2,
      title: "Content Strategy",
      icon: (
        <Image
          src={Content_Icon}
          width={200}
          className="w-[70px] h-auto"
          height={200}
          alt="Brandstrategy icon"
          priority
        />
      ),
      para: "We combine market research and web design expertise to deliver your message to the public.",
    },
    {
      id: 3,
      title: "Web Design & Development",
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
      para: "Our team leverages technology to create and deliver modern and functional websites.",
    },
  ];

  const sec4Right = [
    {
      id: 1,
      title: "Website Hosting",
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
      para: "For maximum impact, a website needs a combination of speed, stability, scalability, and security.",
    },
    {
      id: 2,
      title: "UI Design",
      icon: (
        <Image
          src={UI_Icon}
          width={200}
          className="w-[70px] h-auto"
          height={200}
          alt="Brandstrategy icon"
          priority
        />
      ),
      para: "A visually stunning and strategically organized user interface is key to success.",
    },
    {
      id: 3,
      title: "UX Design",
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
      para: "We enhance your audience’s connection to your brand by crafting modern, digital experiences.",
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
      <section className="w-full  min-h-screen relative max-sm:px-[20px] px-[100px] flex justify-center items-center">
        <div className="gradient-circle -top-[50%] -left-[30%]" />
        <div className="gradient-circle -top-[30%] -right-[30%]" />
        <div className="flex  gap-[20px] w-full justify-between items-center">
          <div className="flex  max-lg:items-center max-sm:mt-[150px] z-30 flex-col gap-[20px]">
            <h1 className="text-[clamp(40px,3.75vw,69px)]  max-lg:text-center   max-w-[972px] text-left font-extrabold leading-[120%]  gradient-text">
              Transform Your Ideas Into Innovative WEBSITES
            </h1>
            <p className=" text-[clamp(14px,1.45vw,27px)] leading-[150%] max-w-[972px]  max-lg:text-center  text-poppins font-normal  text-[#FFFFFF] ">
              Elevate your digital presence by turning ideas into cutting-edge,
              user-friendly websites. Our expert team blends technology and
              creativity to craft websites that not only reflect your brand but
              also engage and convert visitors.
            </p>

            <Button
              link="/#book-a-call"
              className="w-fit h-[clamp(36px,4vw,64px)]"
            >
              Book a Call
            </Button>
          </div>

          <div className=" ">
            <div className="absolute  opacity-[0.3]  max-lg:w-full max-lg:h-full max-lg:flex max-lg:justify-center max-lg:items-center -z-10 -right-[7%]  top-0 ">
              <div className="w-[1005.64px] max-lg:w-[600px] max-lg:h-[600px] max-sm:w-[400px] max-sm:h-[400px] overflow-hidden gradient-border flex justify-center items-center h-[1023.61px]  border-[1.3px]">
                <div className="w-[771.81px] max-lg:w-[500px] max-lg:h-[500px] max-sm:w-[300px] max-sm:h-[300px] gradient-border flex justify-center items-center h-[788.07px]  border-[1.3px]">
                  <div className="w-[571.81px] gradient-border max-lg:w-[200px] max-lg:h-[200px] max-sm:w-[100px] max-sm:h-[100px] flex justify-center items-center h-[588.07px]  border-[1.3px]"></div>
                </div>
              </div>
            </div>
            <Image
              className="z-50  max-lg:hidden max-xl:w-[300px] h-auto max-w-[592px] "
              src={bannerImg}
              width={500}
              height={500}
              alt="image"
              priority
            />
          </div>
        </div>
      </section>

      <Sec2 bgNexus={bgNexus} page2={sec2_Img} brandStrategy={brandStrategy} />

      <Sec3
        heading={"Incredible Websites"}
        para={
          "We design and develop lightning-fast, ultra-intuitive, custom websites that balance core business goals with innovative user experiences spanning all industries."
        }
        para2={
          "Our custom web design agency perpetuates positive change and has growth-driven purpose behind every pixel. We combine a well-refined process with stunning visuals to craft a one of a kind user experience."
        }
        IncredibleWebsites_Img={IncredibleWebsites_Img}
      />

      <Sec4
        sec4={sec4}
        sec4Right={sec4Right}
        WebsiteMaintenance={WebsiteMaintenance}
      />

      <Sec6 lastSecLogoBg={lastSecLogoBg} />
    </Layout>
  );
};

export default index;
