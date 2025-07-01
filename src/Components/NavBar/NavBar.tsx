"use client";
import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/CommonComponents/LanguageSwitcher";
import { Badge } from "antd";
import { NavItems } from "@/Data/Menu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("Navbar");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl text-white">
              Nature Thank
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block text-white">
            <div className="ml-10 flex items-baseline space-x-4">
              {NavItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="hover:bg-green-700 px-3 py-2 rounded-md"
                >
                  {t(item.title.toLowerCase())}
                </Link>
              ))}
            </div>
          </div>

          {/* Search, User, and Cart Icons */}
          <div className="hidden lg:flex items-center text-white">
            <button className="p-1 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
              <CiSearch className="h-6 w-6 text-white" />
            </button>
            <button className="ml-4 p-1 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
              <FaUser className="h-6 w-6 text-white" />
            </button>
            <Badge count={5}>
              <button className="ml-4 p-1 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                <MdShoppingCart className="h-6 w-6 text-white" />
              </button>
            </Badge>
          </div>
          <LanguageSwitcher />

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center text-white">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isMenuOpen ? (
                <IoMdClose className="block h-6 w-6" />
              ) : (
                <IoMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="block hover:bg-green-700 px-3 py-2 rounded-md"
              >
                {t(item.title.toLowerCase())}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-green-700 text-white">
            <div className="flex items-center px-5">
              <button className="p-1 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                <CiSearch className="h-6 w-6 text-white" />
              </button>
              <button className="ml-4 p-1 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                <FaUser className="h-6 w-6 text-white" />
              </button>
              <Badge count={5}>
                <button className="ml-4 p-1 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white">
                  <MdShoppingCart className="h-6 w-6 text-white" />
                </button>
              </Badge>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
