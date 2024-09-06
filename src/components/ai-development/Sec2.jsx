import React from "react";
import Image from "next/image";
import sec2_img from "../../../public/images/ai-development/sec2_Img.png";
import bgSec2 from "../../../public/images/ai-development/bgSec2.png";

const Sec2 = () => {
  return (
    <section className="w-full relative px-[90px] max-lg:px-[50px] max-sm:px-[20px]  min-h-[70vh] max-md:h-[50vh] max-sm:py-[30px] py-[100px] flex ">
      <div className="gradient-circle top-[0%] -left-[10%]" />
      <div className="gradient-circle top-[0%] -right-[20%]" />
      <div className="w-1/2 max-xl:w-[60%]  max-md:w-[100%] max-lg:gap-[20px] flex flex-col my-auto">
        <h1 className="text-[clamp(40px,3.75vw,69px)]  uppercase max-sm:text-[40px] max-md:text-center max-sm:leading-[50px] max-xl:text-[60px] max-xl:leading-[62px] font-extrabold font-inter gradient-text-purple leading-[83px] ">
          We make incredible projects
        </h1>
        <p className="text-[clamp(18px,1.55vw,29px)]  max-md:text-center  font-normal leading-[37px] text-poppins ">
          QUIZ MATE is one of our most outstanding projects in the market. What
          are you waiting for?
        </p>
      </div>
      <div className="w-1/2 max-xl:w-[40%] z-10 mt-[20px] max-md:hidden relative flex items-center justify-end ">
        <>
          <div className="absolute  ">
            <Image
              src={sec2_img}
              alt="mobile-phone"
              className=" w-[430px] floating-element2 h-auto"
              width={500}
              height={500}
              priority
            />
          </div>
        </>
      </div>
      <div className="absolute z-0 right-0">
        <Image
          src={bgSec2}
          alt="mobile-phone"
          className="w-[900px]  h-auto"
          width={500}
          height={500}
          priority
        />
      </div>
    </section>
  );
};

export default Sec2;
