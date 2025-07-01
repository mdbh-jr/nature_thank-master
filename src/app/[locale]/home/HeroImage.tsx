"use client";
import React from "react";
import Image from "next/image";
import HeroBgImage from "../../../../public/assets/home/hero.png";
import NtButton from "@/CommonComponents/NtButton";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("HeroSection");

  return (
    <div className="relative h-[70vh] overflow-hidden">
      <Image
        src={HeroBgImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-white/0" />
      <div className="relative z-10 mx-auto max-w-7xl h-full flex items-center justify-center lg:justify-start">
        <div className=" w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-base font-semibold tracking-wide text-primary">
            {t("product")}
          </h2>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">{t("title1")}</span>
            <span className="block text-primary">{t("title2")}</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
            {t("paragraph")}
          </p>
          <NtButton
            type="primary"
            className="mt-5 sm:mt-8 px-8 py-6 bg-primary text-white rounded-md transition-colors duration-300"
            onClick={() => console.log("Button clicked")}
          >
            {t("shop now")}
          </NtButton>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
