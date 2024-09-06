import React from "react";
import Layout from "@/layout/layout";
import Hero from "@/components/ai-development/Hero";
import Sec2 from "@/components/ai-development/Sec2";
import Sec3 from "@/components/ai-development/Sec3";
import OurNetwork from "@/components/home/our-network";
import AskedQuestion from "@/components/ai-development/AskedQuestion";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import networkData from "@/constants/network-data";
const index = ({ networkData, slider, Questions }) => {
  useDocumentTitle("AI Development");

  return (
    <Layout>
      <Hero />
      <Sec2 />
      <Sec3 sliderData={slider} />
      <OurNetwork networkStats={network} />
      <AskedQuestion Questions={Questions} />
    </Layout>
  );
};

export async function getServerSideProps() {
  const { data } = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/api/ai-network-stats`,
    {
      method: "GET",
      redirect: "follow",
    }
  ).then((response) => response.json());
  const sliderData = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/api/ai-services?populate=*`,
    {
      method: "GET",
      redirect: "follow",
    }
  ).then((response) => response.json());
  const frequentlyQuestion = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API}/api/frequently-questions?populate=*`,
    {
      method: "GET",
      redirect: "follow",
    }
  ).then((response) => response.json());

  return {
    props: {
      network: data.map(item => item.attributes),
      slider: sliderData.data,
      Questions: frequentlyQuestion.data,
    },
  };
}

export default index;
