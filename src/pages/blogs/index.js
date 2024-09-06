/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import Layout from "@/layout/layout";
import BlogsCards from "@/components/ui/blogsCards";
import heroBg from "../../../public/images/blogs/news.png";
import bannerSmallCircle from "../../../public/images/blogs/bannerSmallCircle.svg";
import Image from "next/image";
import PortfolioCards from "@/components/ui/PortfolioCards";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Chevron from "@/components/ui/chevron";
import "swiper/css";
import "swiper/css/pagination";


const Blogs = (allPortfolio ) => {
  
const newsList = [
    {
        id : 1,
        img : heroBg,
        heading : "title",
        Date : "97200",
        slug : "marketing"
    }
]
  

  return (
    <Layout>
      <div className="w-full overflow-hidden   min-h-screen  relative flex justify-center items-center   ">
        <div className="bg-gradient-to-b from-black w-full h-[200px] absolute top-0 z-20"></div>
        <div className="bg-gradient-to-t from-black w-full h-[400px] absolute bottom-0 z-30"></div>
        <div className="bg-gradient-to-t from-black w-full h-[100px] absolute -bottom-3 z-30"></div>
        <div className="bg-gradient-to-t from-black w-full h-[50px] absolute -bottom-1 z-30"></div>
        <div className=" z-40  w-[1120px] h-[1120px] fixed top-[177px] ">
          <Image
            src={bannerSmallCircle}
            width={1000}
            height={1000}
            alt="portfolio Banner"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="w-full h-full absolute   z-10 top-0 left-0">
          <Image
            src={heroBg}
            width={1000}
            height={1000}
            alt="portfolio Banner"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="w-full z-20 h-full absolute top-0 bg-[#404040] opacity-[28%] left-0"></div>
        <div className=" text-center z-50 leading-[150px] max-lg:leading-[80px] Hitmo uppercase font-black relative">
          <h1 className="text-[150px] z-50 ourWork max-lg:text-[130px] max-md:text-[80px] text-white">
            latest
          </h1>
          <h2 className="text-[#E53641] z-50 ourWork max-lg:text-[130px] max-md:text-[80px] text-[150px]">
            news
          </h2>
        </div>

        <div className="w-[800px] h-[800px] absolute top-1/2 bg-[#E53641] rounded-full blur-[500px] z-20"></div>
      </div>

      <div className="-mt-[250px] flex gap-y-[80px] max-3xl:gap-x-[40px] gap-x-[110px] flex-wrap justify-center w-full px-4 lg:px-12 relative z-40">
        {          newsList?.map((news) => (
            <BlogsCards
              key={news?.id}
              id={news?.id}
              img={news?.img}
              heading={news?.title}
              date={news?.Date}
              slug={news?.slug}
            />
          ))}
      </div>
      

      {/* <section className="mt-[180px] w-full min-h-screen relative z-50 ">
        <div className="flex justify-between items-end  px-4 lg:px-12">
          <h1 className="text-[100px] Hitmo max-lg:text-[45px] max-lg:leading-[45.4px] uppercase font-black text-[#E53641] leading-[100.9px] ">
            Latest Work
          </h1>
          <span className="hidden lg:flex justify-between items-center gap-8 text-primary">
          <button onClick={handlePrevClick}>
            <Chevron className="w-[clamp(66px,7vw,126px)] -rotate-90" />
          </button>
          <button onClick={handleNextClick}>
            <Chevron className="w-[clamp(66px,7vw,126px)] rotate-90" />
          </button>
        </span>
        </div>
        <div className="mt-[82px] px-4 lg:px-12 ">
          <Swiper
            className="our-work-swiper"
            pagination={paginationSwiper}
            spaceBetween={50}
            modules={[Pagination]}
            slidesPerView={1}
            breakpoints={{
              800: {
                slidesPerView: 2,
              },
              1217: {
                slidesPerView: 2,
              },
              1624: {
                slidesPerView: 3,
              },
              
            }}
            onInit={(ev) => {
              set_my_swiper(ev);
            }}
          >
            {allPortfolio?.data?.map((work) => (
              <SwiperSlide
                key={work.id}
                className="h-[540px] max-md:pb-[150px] pb-[100px]"
              >
                <PortfolioCards key={work.id} data={work?.attributes} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section> */}
    </Layout>
  );
};

export default Blogs;

