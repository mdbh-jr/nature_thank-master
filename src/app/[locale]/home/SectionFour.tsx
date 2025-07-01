import Image from "next/image";
import React from "react";
import Section4Img from "../../../..//public/assets/home/sectionFour.png";

const SectionFour = () => {
  return (
    <div className="bg-secondary rounded-3xl h-[30rem] items-center flex justify-center">
      <Image
        src={Section4Img}
        alt="Section 4"
        className="rounded-full w-[250px] h-[250px]"
      />
    </div>
  );
};

export default SectionFour;
