/* eslint-disable react/no-unescaped-entities */ "use client";
import React, { useEffect } from "react";
import Image from "next/image";
import fetchDataExample from "./test";
import Section3Left from "../../../../public/assets/home/section3left.png";
import Section3Right from "../../../../public/assets/home/section3right.png";
import { Col } from "antd";
import { motion } from "framer-motion";
const SectionThree = () => {
  useEffect(() => {
    const testFetchData = async () => {
      console.log("Component mounted, calling fetchData...");
      await fetchDataExample();
    };
    testFetchData();
  }, []);
  return (
    <div className="container mx-auto py-8 flex flex-col md:flex-row">
      <Col span={24} md={12} lg={8} className="flex justify-start">
        <Col span={12} md={12} className="flex justify-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={Section3Left}
              alt="Section 3 Left"
              className=" rounded-lg"
              objectFit="cover"
            />
          </motion.div>
        </Col>

        <Col span={12} md={12} className="flex justify-center md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={Section3Right}
              alt="Section 3 Right"
              className=" rounded-lg"
              objectFit="cover"
            />
          </motion.div>
        </Col>
      </Col>
      <Col
        span={24}
        md={12}
        lg={16}
        className="flex justify-start items-center"
      >
        <div className="w-full">
          <div className="mb-6">
            <h2 className="text-green-700 font-bold text-2xl">OUR COMPANY</h2>
            <h1 className="text-3xl font-bold mb-2">Nature Thank Co.Ltd</h1>
          </div>
          <div className="space-y-4">
            <p className="text-gray-600 border-s-4 border-l-accent ps-2">
              Lorem ipsum simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown.
            </p>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown.
            </p>
          </div>
        </div>
      </Col>
    </div>
  );
};
export default SectionThree;
