import React from "react";
import Image from "next/image";

const Sec2 = ({ bgNexus, leftMobile, rightMobile, brandStrategy, page2 }) => {
  return (
    <section className="w-full max-sm:mt-[100px] mt-[130px] py-[100px] max-sm:px-[40px] max-lg:px-[100px] max-xl:px-[20px] px-[100px]  min-h-screen  relative ">
      <div className="gradient-circle top-[0%] -left-[20%]" />
      <div className="gradient-circle top-[0%] -right-[10%]" />
      <div className="absolute top-[80px] left-0">
        <Image
          src={bgNexus}
          alt="Nexus"
          className="w-[1040px] opacity-[0.4]  h-auto"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="flex gap-[100px] max-2xl:gap-[50px] min-h-fit ">
        <div className="w-1/2 max-xl:w-[40%] max-lg:hidden  relative flex items-center justify-end ">
          {!page2 ? (
            <>
              <div className="absolute  rotate-[-10deg]  ">
                <Image
                  src={leftMobile}
                  alt="mobile-phone"
                  className=" w-[430px] floating-element2 h-auto"
                  width={500}
                  height={500}
                  priority
                />
              </div>
              <div className="absolute  max-xl:top-[20%] top-[5%]  right-[25%]  ">
                <Image
                  src={rightMobile}
                  alt="mobile-phone"
                  className=" w-[430px] floating-element h-auto"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </>
          ) : (
            <div className="flex justify-center w-full">
              <Image
                src={page2}
                alt="Nexus"
                className="max-w-[676px]  h-auto"
                width={500}
                height={500}
                priority
              />
            </div>
          )}
        </div>
        <div className="w-1/2 max-xl:w-[60%] max-lg:w-[100%] gap-[66px] flex flex-col">
          {brandStrategy?.map((val) => (
            <div
              key={val.id}
              className="flex max-w-[814px] gap-[18px] flex-col"
            >
              <h3 className="flex items-center max-sm:gap-[10px] text-[clamp(24px,1.55vw,34px)]  font-inter font-extrabold  gradient-text uppercase gap-[21px] ">
                {" "}
                {val.icon} {val.title}{" "}
              </h3>
              <p className=" text-[clamp(16px,1.55vw,26px)]   font-normal text-poppins">
                {val.para}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sec2;
