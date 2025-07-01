import React from "react";
import Image from "next/image";
import SectionTwoImg from "../../../../public/assets/home/sectionOne.png";
// import { useTranslations } from "next-intl";

const SectionTwo = () => {
  //   const t = useTranslations("SectionTwo");
  return (
    <div className="relative h-[40vh] overflow-hidden">
      <Image
        src={SectionTwoImg}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-white/0" />
      <div className="relative z-10 mx-auto max-w-7xl h-full flex items-center justify-center lg:justify-start">
        <div className=" w-full flex flex-col items-center text-center">
          <h2 className="text-base font-bold tracking-wide text-primary">
            Nature Thank
          </h2>
          <h1 className="mt-2 text-4xl font-bold">
            <span className="block">
              Sri Lanka’s Best Herbal
              <br /> Products
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
