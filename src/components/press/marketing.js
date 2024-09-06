import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Logo from "@/components/ui/logo";

import pressData from "@/constants/press-data";

export default function Marketing() {
  const containerRef = useRef(null);
  const imagesRef = useRef(null);
  const textsRef = useRef(null);
  const numbersRef = useRef(null);

  useGSAP(
    () => {
      const images = Array.from(imagesRef.current.children);
      const texts = Array.from(textsRef.current.children);
      const numbers = Array.from(numbersRef.current.children);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${
            window.innerHeight *
            pressData.marketing.length *
            (window.innerWidth >= 1024 ? 2 : 0.5)
          }`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
        },
      });

      for (let i = 1; i < pressData.marketing.length; i++) {
        tl.to(
          texts[i - 1],
          {
            autoAlpha: 0,
            ease: "power4.out",
          },
          "+=0.5"
        )
          .to(
            numbers[i - 1].children[0],
            {
              color: "#767676",
              fontWeight: 400,
              ease: "power4.out",
            },
            "<"
          )
          .to(
            numbers[i - 1].children[1],
            {
              autoAlpha: 0,
              ease: "power4.out",
            },
            "<"
          )
          .to(
            texts[i],
            {
              autoAlpha: 1,
              ease: "power4.in",
            },
            "<"
          )
          .to(
            numbers[i].children[0],
            {
              color: "#9B36FF",
              fontWeight: 500,
              ease: "power4.in",
            },
            "<"
          )
          .to(
            numbers[i].children[1],
            {
              autoAlpha: 1,
              ease: "power4.in",
            },
            "<"
          )
          .to(
            images[i],
            {
              y: 0,
              ease: "power4.in",
            },
            "<"
          )
          .to(containerRef.current, {
            autoAlpha: 1,
            duration: 0.5,
          });
      }
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="marketing"
      className="w-full h-screen px-[8vw] lg:px-[clamp(40px,4vw,75px)] pt-[12vh] lg:py-[4vw] relative flex flex-col place-content-start lg:place-content-center place-items-center gap-[60px] overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row place-content-between place-items-center gap-[10px] lg:gap-0">
        <p className="relative text-transparent text-[clamp(30px,3.75vw,70px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#9B36FF]">
          Marketing that gets results
        </p>
        <p className="w-full lg:max-w-[clamp(0px,37.5vw,715px)] relative text-[#FFFFFF] text-[clamp(14px,1.55vw,29px)] text-center lg:text-left font-poppins font-normal leading-[150%]">
          Boost your online presence with higher search rankings and more buyers
          to your site!
        </p>
      </div>
      <div className="w-full h-full lg:h-auto pl-[8vw] pr-[4vw] relative flex flex-col lg:flex-row place-content-between place-items-center lg:place-items-center gap-[30px] lg:gap-[clamp(0px,12vw,200px)]">
        <div
          ref={imagesRef}
          className="h-[40vw] lg:h-[32vw] aspect-[9/10] relative"
        >
          {pressData.marketing.map((item, idx) => (
            <span
              key={idx}
              className={`w-full h-full absolute inset-0 rounded-[11px] lg:rounded-[21px] overflow-hidden ${
                idx === pressData.marketing.length - 1 ? "scale-125" : 'bg-[#D9D9D9]'
              }`}
              style={{
                rotate: `-${(idx + 1) * 3}deg`,
                translate: `0 ${idx === 0 ? "" : "-150vh"}`,
              }}
            >
              <Image
                src={item.image}
                alt={item.image}
                fill
                sizes='100vw'
                priority
                className={item.classes}
              />
            </span>
          ))}
        </div>
        <div className="w-full lg:w-auto lg:h-full relative flex flex-grow flex-col place-content-end">
         
          <div ref={textsRef}>
            {pressData.marketing.map((item, idx) => (
              <div
                key={item.title + idx}
                className={`pt-[4vw] absolute inset-0 flex flex-col gap-[30px] ${
                  idx === 0 ? "" : "invisible"
                }`}
              >
                <p className="relative text-transparent text-[clamp(30px,3.75vw,70px)] text-center lg:text-left font-inter font-extrabold leading-[125%] uppercase bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#9B36FF]">
                  {item.title}
                </p>
                <p className="w-full max-w-none lg:max-w-[clamp(0px,45vw,850px)] relative text-[#FFFFFF] text-[clamp(14px,1.55vw,29px)] text-center lg:text-left font-poppins font-normal leading-[150%]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
     
        </div>
        <div className="w-full h-full absolute inset-0">
          <div className="w-full h-full relative">
            <ul
              ref={numbersRef}
              className="absolute top-1/4 lg:top-1/2 left-0 -translate-y-1/2 flex flex-col place-content-between place-items-start gap-[clamp(10px,1vw,20px)]"
            >
              {pressData.marketing.map((market, idx) => (
                <li
                  key={market.title + idx}
                  className="flex place-content-center place-items-center gap-[clamp(5px,0.5vw,10px)]"
                >
                  <p
                    className={`${
                      idx === 0 ? "text-[#9B36FF]" : "text-[#767676]"
                    } text-[clamp(14px,1.1vw,20px)] text-left font-hvdTrialGraphit ${
                      idx === 0 ? "font-medium" : "font-normal"
                    } leading-[125%]`}
                  >
                    {idx + 1}
                  </p>
                  <svg
                    viewBox="0 0 30 6"
                    fill="none"
                    className={`w-[clamp(15px,1.75vw,35px)] ${
                      idx === 0 ? "" : "invisible"
                    }`}
                  >
                    <path
                      d="M0.333333 3C0.333333 4.47276 1.52724 5.66667 3 5.66667C4.47276 5.66667 5.66667 4.47276 5.66667 3C5.66667 1.52724 4.47276 0.333333 3 0.333333C1.52724 0.333333 0.333333 1.52724 0.333333 3ZM3 3.5H30V2.5H3V3.5Z"
                      fill="#9B36FF"
                    />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
