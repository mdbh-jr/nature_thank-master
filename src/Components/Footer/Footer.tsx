import React from "react";
import { Row, Col, Input } from "antd";
import Image from "next/image";
import {
  FacebookFilled,
  TwitterCircleFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import footerimg from "../../../public/assets/footer.svg";
import logo from "../../../public/assets/light 1.svg";
import NtButton from "@/CommonComponents/NtButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Creative Footer Section */}
      <div className="relative bg-[#DEF9E2] text-gray-900 py-16 px-8 md:px-16">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-60">
          <Image
            src={footerimg}
            alt="Footer Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Footer Content */}
        <Row gutter={[24, 24]} justify="center" className="relative z-10">
          {/* Logo Section */}
          <Col xs={24} sm={12} md={4} className="text-left">
            <Image src={logo} alt="Logo" className="mb-4" />
          </Col>

          {/* Address Section */}
          <Col xs={24} sm={12} md={4} className="text-left">
            <h5 className="font-bold text-lg mb-4">Contact Us</h5>
            <ul className="space-y-2">
              <li>Galle Road,</li>
              <li>Mount Lavina,</li>
              <li>Colombo,</li>
              <li>Sri Lanka.</li>
            </ul>
          </Col>

          {/* My Account Links */}
          <Col xs={24} sm={12} md={4} className="text-left">
            <h5 className="font-bold text-lg mb-4">My Account</h5>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>Login/Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={4} className="text-left">
            <h5 className="font-bold text-lg mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li>Terms & Policy</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </Col>

          {/* Newsletter and Social Media Section */}
          <Col xs={24} sm={12} md={4} className="text-left">
            <h5 className="font-bold text-lg mb-4">Newsletter</h5>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex mb-4">
              <Input placeholder="Your email" className="mr-2" />
              <NtButton type="primary">Subscribe</NtButton>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookFilled className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterCircleFilled className="text-2xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramFilled className="text-2xl" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeFilled className="text-2xl" />
              </a>
            </div>
          </Col>
        </Row>
      </div>

      {/* Copyright Section */}
      <div className="bg-green-900 text-center text-white p-4">
        <p className="text-sm">
          Copyright © {currentYear} | All Rights Reserved by{" "}
          <b> Code Scape Labs </b>
        </p>
      </div>
    </>
  );
};

export default Footer;
