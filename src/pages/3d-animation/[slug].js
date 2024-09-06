import React from "react";
import Image from "next/image";
import Layout from "@/layout/layout";
import Link from "next/link";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import qs from "qs";

const index = ({ animation }) => {
  useDocumentTitle("3D Animations");

  return (
    <Layout>
      <section className="w-full h-[678px] relative flex justify-center items-center">
        <div className=" w-full absolute z overflow-x-hidden top-0">
          <Image
            src={`${
              process.env.NEXT_PUBLIC_IS_STRAPI_CLOUD === "true"
                ? ""
                : process.env.NEXT_PUBLIC_BACKEND_API
            }${animation[0]?.attributes?.Thumbnail?.data?.attributes?.url}`}
            width={500}
            height={500}
            className="w-[1920px] h-[678px] object-cover 2xl:w-full"
            alt="banner image"
            priority
          />
        </div>
        <div className="flex relative z-[9999] mt-[50px] gap-[47px] flex-col items-center">
          <h1 className="text-[107px]  font-inter max-sm:text-[45px] max-sm:leading-[50px] max-md:text-[60px] max-lg:text-[80px] max-w-[1122px] text-center font-extrabold leading-[91px] lg:leading-[110px] uppercase gradient-text">
            {animation[0]?.attributes?.title}
          </h1>
          <Link
            href={"/3d-animation"}
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
              src={`${
                process.env.NEXT_PUBLIC_IS_STRAPI_CLOUD === "true"
                  ? ""
                  : process.env.NEXT_PUBLIC_BACKEND_API
              }${animation[0]?.attributes?.Video?.data?.attributes?.url}`}
              type="video/mp4"
            />
            Video not supported
          </video>
        </div>

        <div className="flex flex-col max-xl:gap-[30px]   gap-[40px]">
          {animation[0].attributes?.description.map((val, id) => (
            <p
              key={id}
              className="text-[29px] max-xl:text-[25px] max-sm:text-[20px] max-sm:leading-[25px]  max-xl:leading-[35px] leading-[40px] text-center font-normal   text-poppins text-[#FFFFFF]"
            >
              {val.children[0].text}
            </p>
          ))}
          {/* <p className="text-[29px] max-xl:text-[25px] max-sm:text-[20px] max-sm:leading-[25px] max-xl:leading-[35px] leading-[40px] text-center font-normal  text-poppins text-[#FFFFFF]" >Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.</p>
            <p className="text-[29px] max-xl:text-[25px] max-sm:text-[20px] max-sm:leading-[25px] max-xl:leading-[35px] leading-[40px] text-center font-normal  text-poppins text-[#FFFFFF]" > Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi, sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed tincidunt ac, finibus non odio. Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu, faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi, consequat dictum risus dapibus a. Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.</p> */}
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
  // console.log
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/api/animations?${query}`,
    {
      method: "GET",
      redirect: "follow",
    }
  ).then((response) => response.json());
  return {
    props: {
      animation: data,
    },
  };
}
export default index;
