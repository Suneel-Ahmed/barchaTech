import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "swiper/css";

const Sec3 = ({sliderData}) => {
  return (
    <section className="w-full max-sm:mt-[100px] relative px-[90px] max-lg:px-[50px] max-sm:px-[20px]  min-h-[90vh] max-sm:py-[50px] py-[100px] flex flex-col">
      <div className="flex z-30 flex-col  items-center gap-[40px]  ">
        <h1 className=" text-[clamp(40px,3.75vw,77px)]  font-inter max-sm:text-[40px] max-sm:leading-[50px]  max-lg:leading-[75px] max-md:leading-[65px] max-md:text-[60px] max-lg:text-[70px] px-[0px] text-center font-extrabold leading-[85px] uppercase  gradient-text-purple">
          Artificial Intelligence Development Services We Offer
        </h1>
        <p className="text-[clamp(18px,1.55vw,29px)] font-normal leading-[140%] text-center text-[#ffffff] text-poppins max-w-[1607px]">
          Our AI development services are known to unlock the potential of vast
          amounts of data for driving tangible business results. Being a
          renowned AI solutions company, we specialize in leveraging the power
          of AI to transform raw data into actionable insights, paving the way
          for operational efficiency and enhanced decision-making
        </p>
      </div>
      <div className="mt-[148px]">
        <Swiper
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1800: {
              slidesPerView: 3.3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper !overflow-visible"
        >
          {sliderData?.map((val) => (
            <SwiperSlide key={val.id}>
              <div style={{
                backgroundImage : `url(${val.attributes.img.data.attributes.url})`,
                backgroundRepeat : "no-repeat",
                backgroundSize : "cover",
                backgroundPosition : "center"
              }}  className="max-w-[504px]  max-2xl:h-[550px]  h-[734px]  pb-[86px] px-[40px] flex flex-col  rounded-[13px]">
                
                <div className="mt-auto min-h-[80px] ">
                  <h3 className=" text-white text-[39px] leading-[35px] league-spartan font-semibold ">
                    {val.attributes.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Sec3;
