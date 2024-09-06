import React from "react";
import Image from "next/image";
import Layout from "@/layout/layout";
import Link from "next/link";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import qs from "qs";

const index = ({ videography }) => {
  useDocumentTitle("Nike");

  return (
    <Layout>
      <section className="w-full h-[678px] relative flex justify-center items-center">
        <div className=" w-full absolute overflow-x-hidden top-0">
          <Image
            src={`${videography[0].attributes.Thumbnail.data.attributes.url}`}
            width={500}
            height={500}
            className="w-[1920px] h-[678px] object-cover 2xl:w-full"
            alt="banner image"
          />
        </div>
        <div className="flex z-30 mt-[50px] gap-[47px] flex-col items-center">
          <h1 className="text-[107px] font-inter max-sm:text-[45px] max-sm:leading-[50px] max-md:text-[60px] max-lg:text-[80px] max-w-[1122px] text-center font-extrabold leading-[91px] lg:leading-[110px] uppercase gradient-text">
            {videography[0].attributes.Title}
          </h1>
          <Link
            href={"/videography"}
            className="w-[270px]  max-sm:w-[200px] max-sm:text-[20px] h-[75px] text-[28px] font-semibold text-center league-spartan  flex videoGraphy_btn justify-center border border-[FFFFFF]/[27%] items-center rounded-[100px] bg-[#D9D9D9]/[18%] "
          >
            Explore now
          </Link>
        </div>
      </section>
      <section className="py-[97px] flex flex-col max-md:gap-[50px] gap-[103px] max-sm:px-[20px]  max-md:px-[30px] max-xl:px-[100px] px-[143px]">
        <div className="w-full rounded-[20px]  h-fit bg-slate-800 flex justify-center items-center ">
          <video
            muted
            loop
            controls
            className="w-full h-full object-cover  rounded-[20px] max-h-[390px] lg:max-h-[75vh]"
          >
            <source
              src={`${videography[0].attributes.Video.data.attributes.url}`}
              type="video/mp4"
            />
            Video not supported
          </video>
        </div>

        <div className="flex flex-col max-xl:gap-[30px]   gap-[40px]">
          {videography[0].attributes.description?.map((val, id) => (
            <p
              key={id}
              className="text-[29px] max-xl:text-[25px] max-sm:text-[20px] max-sm:leading-[25px]  max-xl:leading-[35px] leading-[40px] text-center font-normal   text-poppins text-[#FFFFFF]"
            >
              {val.children[0].text}
            </p>
          ))}
        </div>
      </section>
    </Layout>
  );
};
export async function getServerSideProps(context) {
  const { slug } = context.params;
  const query = qs.stringify(
    {
      populate: {
        description: true,
        Thumbnail: true,
        Video: true,
      },
      filters: {
        slug_separated_by_hyphens: {
          $eq: slug,
        },
      },
    },
    {
      encodeValuesOnly: true,
    }
  );

  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/api/videographies?${query}`,
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
