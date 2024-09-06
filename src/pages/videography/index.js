import React from "react";
import Layout from "@/layout/layout";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";
// banner image
import bannerimg from "../../../public/images/videography/bannerBg.png";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const index = ({ videography }) => {
  useDocumentTitle("Videography");

  return (
    <Layout>
      <section className="w-full h-[678px]  relative flex justify-center items-center">
        <div className=" w-full absolute overflow-x-hidden top-0">
          <Image
            src={bannerimg}
            width={500}
            height={500}
            className="w-[1920px] h-[678px] object-cover 2xl:w-full"
            alt="banner image"
          />
        </div>
        <div className="flex z-30 mt-[50px] gap-[47px] flex-col items-center">
          <h1 className="text-[107px]  font-inter max-sm:text-[45px] max-sm:leading-[50px] max-md:text-[60px] max-lg:text-[80px] max-w-[1122px] text-center  leading-[81px] font-extrabold  gradient-text">
            VIDEOGRAPHY
          </h1>
          <button className="w-[270px]  max-sm:w-[200px] max-sm:text-[20px] h-[75px] text-[28px] font-semibold text-center league-spartan  flex videoGraphy_btn justify-center border border-[FFFFFF]/[27%] items-center rounded-[100px] bg-[#D9D9D9]/[18%] ">
            Explore now
          </button>
        </div>
      </section>
      <section className="mt-[19px] px-[19px]  pb-[200px]">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="10px">
            {videography.map((val, i) => (
              <Link
                href={`/videography/${val.attributes.slug_separated_by_hyphens}`}
                className=" group hover:bg-black relative "
                key={i}
              >
                <div className="absolute bottom-[50px] opacity-0 group-hover:opacity-[1] transition-all duration-[1s] z-20 flex items-center justify-between w-full px-[5%]">
                  <h1 className="max-sm:text-[20px] uppercase  font-inter text-[30px] font-extrabold  gradient-text">
                    {val.attributes.Title}
                  </h1>
                  <button className="w-[170px] min-w-[170px]  max-sm:w-[200px] max-sm:text-[20px] h-[50px] text-[20px] font-semibold text-center league-spartan  flex videoGraphy_btn justify-center border border-[FFFFFF]/[27%] items-center rounded-[100px] bg-[#D9D9D9]/[18%] ">
                    Explore now
                  </button>
                </div>
                <Image
                  width={500}
                  height={500}
                  alt="images"
                  className="w-full group-hover:opacity-[0.5]"
                  src={`${val.attributes.Thumbnail.data.attributes.url}`}
                  priority
                />
              </Link>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/api/videographies?populate=*`,
    {
      method: "GET",
      redirect: "follow",
    }
  ).then((response) => response.json());

  return {
    props: {
      videography: data,
    },
  };
}

export default index;
