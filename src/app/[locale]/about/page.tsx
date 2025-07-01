"use client";
import React from "react";
import Image from "next/image";
import aboutus from "../../../../public/assets/about.svg";
import Herble from "../../../../public/assets/Herble.png";
import icon from "../../../../public/assets/icon.svg";
import Imagecursor from "./Imagecursor";
import Imagecursor2 from "./Imagecursrsor2";
import ourteam from "../../../../public/assets/our team image.svg";
import SectionOne from "../home/SectionOne";

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        <Image
          src={aboutus}
          alt="About us section image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            saepe repellendus minus vel molestias voluptatum dignissimos,
            repellat aliquam deleniti hic ratione rem dolor temporibus impedit
            aperiam quis dolores reiciendis. Architecto.
          </p>
        </div>
      </div>

      {/* Company Text Section */}
      <div className="container mx-auto mt-8 px-5 sm:px-11 text-center md:text-left">
        <h2 className="text-[14px] sm:text-[24px] mt-4 uppercase font-semibold text-primary">
          Our Company
        </h2>
        <p className="text-[#333] text-lg sm:text-[42px] mt-2 mb-6">
          Nature Thank Story
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-between px-5 sm:px-11 mt-6 space-y-6 md:space-y-0">
        {/* Text Content */}
        <div className="flex flex-col md:w-1/2 space-y-5">
          {/* First Paragraph with Icon */}
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="flex items-start space-x-4">
                <Image src={icon} alt="icon" className="w-[40px] h-[40px]" />
                <p className="font-sans text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque volutpat dui quis neque scelerisque, vel bibendum
                  felis aliquet.
                </p>
              </div>
            ))}
        </div>

        {/* Image Content */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative w-[80%] md:w-[90%] lg:w-[434px] aspect-[4/3]">
            <Image
              src={Herble}
              alt="Herble image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="container mx-auto mt-6 px-5 sm:px-11">
        <hr className="h-px mb-8 bg-gray-200 border-0 w-full dark:bg-gray-700" />
      </div>

      {/* Final Section */}
      <div className="bg-[#E7FDE5] w-full h-auto py-10 mb-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 sm:px-11">
          {/* Left Section */}
          <div>
            <h3 className="text-[20px] sm:text-[24px] font-bold text-primary">
              Our Mission
            </h3>
            <h3 className="text-[35px] sm:text-[37px] font-bold text-black">
              Nature Thank <br /> Co.LTD
            </h3>
            <div className="bg-white w-full h-auto py-6 mt-6">
              <div className="flex items-start space-x-4 px-5">
                <Image
                  src={icon}
                  alt="icon image"
                  className="w-[40px] h-[40px]"
                />
                <p className="text-[#333] text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vivamus lobortis efficitur tincidunt. Nulla facilisi. Etiam id
                  ligula ac leo pulvinar facilisis. Integer feugiat nisl sit
                  amet lectus vehicula, nec efficitur urna viverra.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-[20px] sm:text-[24px] font-bold text-primary">
              Our Vision
            </h3>
            <h3 className="text-[35px] sm:text-[37px] font-bold text-black">
              Nature Thank <br /> Co.LTD
            </h3>
            <div className="bg-white w-full h-auto py-6 mt-6">
              <div className="flex items-start space-x-4 px-5">
                <Image
                  src={icon}
                  alt="icon image"
                  className="w-[40px] h-[40px]"
                />
                <p className="text-[#333] text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  felis id purus feugiat lobortis non vel purus. Cras pharetra
                  tortor a felis euismod vulputate. Donec vestibulum mauris non
                  elit vestibulum fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Value Section */}
      <div>
        <h1 className="uppercase text-black text-center text-[48px] font-bold mb-6">
          Our values
        </h1>

        <SectionOne />
      </div>

      {/* Company Intro Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 sm:px-11 mt-6">
        <div className="bg-white w-full h-auto py-6">
          {/* Left section */}
          <div>
            <hr className="h-px mb-8 bg-gray-200 border-0 w-full dark:bg-gray-700" />
            <h3 className="text-[20px] sm:text-[24px] font-bold text-primary">
              Our Company
            </h3>
            <h3 className="text-[35px] sm:text-[37px] font-bold text-black">
              Nature Thank <br /> Co.LTD
            </h3>
            <div className="bg-white w-full h-auto py-6 mt-6">
              <div className="flex items-start space-x-4 px-5">
                <Image
                  src={icon}
                  alt="icon image"
                  className="w-[40px] h-[40px]"
                />
                <p className="text-[#333] text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  felis id purus feugiat lobortis non vel purus. Cras pharetra
                  tortor a felis euismod vulputate. Donec vestibulum mauris non
                  elit vestibulum fermentum.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex justify-center">
          <Imagecursor />
        </div>
      </div>

      {/* Sustainability Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-5 sm:px-11 mt-6">
        <div className="bg-white w-full h-auto py-6 flex justify-center">
          <Imagecursor2 />
        </div>
        {/* Right Section */}
        <div>
          <hr className="h-px mb-8 bg-gray-200 border-0 w-full dark:bg-gray-700" />
          <h3 className="text-[20px] sm:text-[24px] font-bold text-primary">
            Our Company
          </h3>
          <h3 className="text-[35px] sm:text-[37px] font-bold text-black">
            Nature Thank <br /> Co.LTD
          </h3>
          <div className="bg-white w-full h-auto py-6 mt-6">
            <div className="flex items-start space-x-4 px-5">
              <Image
                src={icon}
                alt="icon image"
                className="w-[40px] h-[40px]"
              />
              <p className="text-[#333] text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                felis id purus feugiat lobortis non vel purus. Cras pharetra
                tortor a felis euismod vulputate. Donec vestibulum mauris non
                elit vestibulum fermentum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="container mx-auto mt-6 px-5 sm:px-11">
        <hr className="h-px mb-8 bg-gray-200 border-0 w-full dark:bg-gray-700" />
      </div>

      <div className="container mx-auto text-center">
        <h1 className="uppercase text-[48px] font-bold mb-6">Our Team</h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-5 sm:px-11">
        {/* Team Member 1 */}
        <div className="flex flex-col items-center">
          <Image
            src={ourteam}
            alt="Team member 1"
            className="w-[300px] h-[300px] object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">Manuka</h2>
          <p className="text-sm text-gray-600">Tech Lead</p>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center">
          <Image
            src={ourteam}
            alt="Team member 2"
            className="w-[300px] h-[300px] object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">Jane Doe</h2>
          <p className="text-sm text-gray-600">Project Manager</p>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center">
          <Image
            src={ourteam}
            alt="Team member 3"
            className="w-[300px] h-[300px] object-cover"
          />
          <h2 className="text-xl font-semibold mt-4">John Smith</h2>
          <p className="text-sm text-gray-600 mt-5 mb-5">Software Engineer</p>
        </div>
      </div>

      <div className="container mx-auto mt-6 px-5 sm:px-11">
        <hr className="h-px mb-8 bg-gray-200 border-0 w-full dark:bg-gray-700" />
      </div>
    </>
  );
};

export default AboutPage;
