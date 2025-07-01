/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";

const page = () => {
  return (
    <>
      {/* Title Section */}
      <div className="flex justify-center text-center font-bold text-[38px]">
        <h1 className="text-black mt-10 mb-0">Get In Touch</h1>
      </div>
      <div className="flex justify-center text-center text-[18px]">
        <p className="font-semibold">We are here for you! How can we help?</p>
      </div>

      {/* Form and Map Section */}
      <div className="flex flex-col items-center mt-5 w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center w-full max-w-[1200px] gap-8">
          {/* Form Section */}
          <form className="flex flex-col gap-5 w-full lg:w-[40%]">
            <div className="bg-white/5 p-2 rounded-lg border border-green-500">
              <input
                type="text"
                className="bg-transparent w-full h-full p-0 text-[18px] font-medium text-black outline-none"
                placeholder="Name"
              />
            </div>
            <div className="bg-white/5 p-2 rounded-lg border border-green-500">
              <input
                type="email"
                className="bg-transparent w-full h-full p-0 text-[18px] font-medium text-black outline-none"
                placeholder="Email"
              />
            </div>
            <div className="bg-white/5 p-2 rounded-lg border border-green-500">
              <input
                type="text"
                className="bg-transparent w-full h-full p-0 text-[18px] font-medium text-black outline-none"
                placeholder="Phone"
              />
            </div>
            <div className="bg-white/5 p-2 rounded-lg border border-green-500">
              <textarea
                className="bg-transparent w-full h-full p-0 text-[18px] font-medium text-black outline-none"
                placeholder="Message"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#017D03] text-[#FFFFFF] font-bold text-[18px] p-2.5 rounded-lg w-full mt-4 mb-6 transition-transform transform hover:scale-105 duration-300 ease-in-out hover:bg-green-700"
            >
              Submit
            </button>
          </form>

          {/* Google Maps Section */}
          <div className="w-full lg:w-[55%] h-[400px]">
            <iframe
              className="w-full h-[60%] rounded-lg border border-gray-300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63398.269086234766!2d81.1085736!3d6.7219516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae46bc305799c53%3A0xa1f7c9089f7850e3!2sManuka&#39;s%20place!5e0!3m2!1sen!2slk!4v1720767555462!5m2!1sen!2slk"
              loading="lazy"
            ></iframe>
            <div className="gap-3 flex items-center mt-3 mb-3">
              <FaLocationDot className="text-[24px] text-green-700" />
              <p className="text-[18px] font-medium text-black">
                Manuka's Place, 12345, Dhaka, Bangladesh
              </p>
            </div>
            <div className="gap-3 flex items-center mt-2 mb-3">
              <FaPhoneAlt className="text-[24px] text-green-700" />
              <p className="text-[18px] font-medium text-black">
                Phone: +880 1234567890
              </p>
            </div>
            <div className="gap-3 flex items-center mb-2 mt-2">
              <MdOutlineAttachEmail className="text-[24px] text-green-700" />
              <p className="text-[18px] font-medium text-black">
                Email: manukasplace@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
