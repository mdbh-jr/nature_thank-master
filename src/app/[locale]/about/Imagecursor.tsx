import React, { useEffect, useState } from 'react';
import image1 from "../../../../public/assets/herble2.svg";
import image2 from "../../../../public/assets/herble1.svg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ImageCursor = [
  {
    id: 1,
    image: image1,
    alt: "Herble",
  },
  {
    id: 2,
    image: image2,
    alt: "Herble2",
  }
];

function Imagecursor() {
  const [activeImg, setActiveImg] = useState(0);

  const HandlePrev = () => {
    setActiveImg((activeImg - 1 + ImageCursor.length) % ImageCursor.length);
  };

  const HandleNext = () => {
    setActiveImg((activeImg + 1) % ImageCursor.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      HandleNext();
    }, 6000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImg]);

  return (
    <div className="relative w-full h-full overflow-hidden"> {/* Ensure overflow hidden to crop images properly */}
      {/* Button Container - Positioned above the image */}
      <div className="absolute top-0 right-20 flex space-x-2 z-10 mb-5">
        <button 
          onClick={HandlePrev} 
          className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition">
          <FaArrowLeft /> 
        </button>

        <button 
          onClick={HandleNext} 
          className="bg-green-500 text-white rounded-full p-2 hover:bg-green-600 transition">
          <FaArrowRight /> 
        </button>
      </div>

      {/* Image Section */}
      <div className="relative w-full h-[500px] flex items-center justify-center mt-10 mb-4 overflow-hidden">
        {ImageCursor.map((img, index) => (
          <img
            key={img.id}
            className={`transition-opacity duration-500 ${activeImg === index ? "opacity-100" : "opacity-0 absolute" }`} // Smooth transition effect
            src={img.image.src}  // Use .src when handling imported images
            alt={img.alt}
          />
        ))}
      </div>
    </div>
  );
}

export default Imagecursor;
