import Image from "next/image";


import servicesData from "@/constants/services-data";

export default function OurServices() {


  
  return (
    <>
  

      <div
       id="our-services"
        className="w-full h-screen lg:pt-[16vh] inset-0 origin-top-right flex flex-col place-content-center place-items-center lg:place-content-start gap-[30px]"
      >
        <p
          className={
            "text-transparent text-[clamp(48px,6vw,110px)] text-center font-leagueSpartan font-semibold leading-[100%] uppercase gradient-text-purple"
          }
        >
          Services
        </p>
        <ul className="w-fit] grid grid-rows-4 lg:grid-rows-2 grid-cols-2 lg:grid-cols-4 place-content-center place-items-center gap-[clamp(0px,4vw,25px)]">
          {servicesData.services
            .filter((service) => !service.exclude)
            .slice(0, 8)
            .map((service, idx) => (
              <a href={service.link}>
                <li key={service + idx}>
                  <span className="w-[clamp(0px,35vw,250px)] lg:w-[clamp(0px,16vw,310px)] aspect-video relative block rounded-3xl overflow-hidden">
                    {service.video ? (
                      <video muted className="w-full h-full object-cover">
                        <source src={service.src} type="video/mp4" />
                        Video not supported
                      </video>
                    ) : (
                      <Image
                        src={service.src}
                        alt={service.src}
                        fill
                        sizes="22vw"
                        className="object-center"
                      />
                    )}
                  </span>
                  <p className="mt-[10px] text-[#FFFFFF] text-[clamp(14px,1.75vw,32px)] text-center font-normal leading-[150%]">
                    {service.title}
                  </p>
                </li>
              </a>
            ))}
        </ul>
      </div>
    </>
  );
}
