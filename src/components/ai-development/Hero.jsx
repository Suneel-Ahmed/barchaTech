import React from "react";
import Image from "next/image";
import bgNexus from "../../../public/images/ai-development/bgNexus.png";
import Button from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="w-full h-screen max-sm:h-[90vh] relative max-sm:px-[20px] px-[60px]  flex justify-center items-center">
      <div className="gradient-circle -top-[30%] -left-[0%]" />
      <div className="gradient-circle  -right-[15%]" />
      {/* <div className="gradient-circle z-20 w-[1005.64px] h-[1005.64px]" /> */}
      <div className="flex z-30 flex-col  items-center gap-[40px]  ">
        <h1 className=" gradient-text-purple text-[127px]  font-inter max-sm:text-[40px] max-sm:leading-[50px]  max-lg:leading-[75px] max-md:leading-[65px] max-md:text-[60px] max-lg:text-[70px] px-[0px] text-center font-extrabold leading-[127px] uppercase  ">
          AI Development Services
        </h1>
        <p className=" lg:max-w-[clamp(0px,65vw,1232px)] text-[clamp(14px,1.55vw,29px)] font-normal  leading-[150%] text-center text-[#ffffff] font-poppins ">
          Leverage our state-of-the-art custom AI services that automate mundane
          processes and strengthen business intelligence
        </p>

        <Button link="/#book-a-call" className="w-fit h-[clamp(36px,4vw,64px)]">
          Book a Call
        </Button>
      </div>

      <div className="absolute  w-full">
        <Image
          src={bgNexus}
          alt="Nexus"
          className="w-full  h-auto"
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
