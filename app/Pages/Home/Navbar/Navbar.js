"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./../../../assets/Logo/logo.png";
import Dark from "./Dark";
import Light from './Light.js';
import MenuBar from "./MenuBar";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false)
  console.log(darkMode)
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  return (
    <section className="menu-section bg-white h-[90px] flex items-center relative dark:bg-[#0C0800]">
      <div className="container mx-auto px-5 flex items-center justify-between">
        <div className="logo flex gap-5 items-center">
          <Image src={Logo} className="w-16 h-16"></Image>
          <h2 className="text-black font-bold text-3xl">SoftBik</h2>
        </div>
        <div className="menu">
          {/* Mobile Dark Mode */}
          <div className="flex justify-between items-center gap-5 lg:hidden">
          <button
              className="outline-none mobile-menu-button"
              onClick={toggleDarkMode}
            >{darkMode ?  <Dark></Dark> : <Light></Light>}
            </button>
            <button
              className="outline-none mobile-menu-button"
              onClick={toggleMenu}
            >
              <MenuBar></MenuBar>
            </button>
          </div>
          {/* Mobile Dark Mode  */}
          <ul className="hidden lg:flex items-center justify-center gap-5">
            <li>
              <Link
                href="/"
                className="font-medium text-[#737373] text-base hover:text-[#175CFF] dark:text-[#d4d4d4]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium text-[#737373] text-base hover:text-[#175CFF] dark:text-[#d4d4d4]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium text-[#737373] text-base hover:text-[#175CFF] dark:text-[#d4d4d4]"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium text-[#737373] text-base hover:text-[#175CFF] dark:text-[#d4d4d4]"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="font-medium text-[#737373] text-base hover:text-[#175CFF] dark:text-[#d4d4d4]"
              >
                Company
              </Link>
            </li>
          </ul>
        </div>
        <div className="button lg:flex items-center justify-center gap-5 hidden">
            <button onClick={()=>setDarkMode(!darkMode)}>{darkMode ?  <Dark></Dark> : <Light></Light>}</button>
          
          <Link
            href="/"
            className="text-[#737373] text-base font-medium hover:text-[#175CFF] dark:text-[#d4d4d4]"
          >
            Sign In
          </Link>
          <Link
            href="/"
            className="text-white rounded-lg font-semibold bg-[#175cff] hover:bg-[#0044E3] text-base py-3 px-8"
          >
            Get Started
          </Link>
        </div>
      </div>
      {/* Mobile And Table Device Menu */}
      {showMenu && (
        <div className="top-0 right-0 w-full md:w-[400px] z-10 bg-white py-5 px-5 lg:hidden absolute dark:bg-[#0C0800]">
          <div className="logo flex gap-5 items-center justify-between">
            <div className="flex gap-5 items-center">
              <Image src={Logo} className="w-16 h-16"></Image>
              <h2 className="text-black font-bold text-3xl">SoftBik</h2>
            </div>

            <div>
              <svg
                viewBox="0 0 21 21"
                fill="currentColor"
                height="1em"
                width="1em"
                className="text-3xl text-[#0043E1] dark:text-white"
                onClick={toggleMenu}
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15.5 15.5l-10-10zM15.5 5.5l-10 10" />
                </g>
              </svg>
            </div>
          </div>
          <ul className=" items-center justify-center gap-5 py-5">
            <li className="mb-2">
              <Link
                href="/"
                className="font-medium text-[#737373] text-base hover:text-[#175CFF] dark:text-[#a3a3a3]"
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/"
                className="font-medium text-[#737373] text-base hover:text-[#175CFF] dark:text-[#a3a3a3]"
              >
                Services
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/"
                className="font-medium text-[#737373] text-base hover:text-[#175CFF] dark:text-[#a3a3a3]"
              >
                Resources
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/"
                className="font-medium text-[#737373] text-base hover:text-[#175CFF] dark:text-[#a3a3a3]"
              >
                Pricing
              </Link>
            </li>
            <li className="mb-2">
              <Link
                href="/"
                className="font-medium text-[#737373] text-base hover:text-[#175CFF] dark:text-[#a3a3a3]"
              >
                Company
              </Link>
            </li>
          </ul>
          <div className="button flex flex-wrap items-center justify-center gap-5 lg:hidden">
            <svg
              viewBox="0 0 1000 1000"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M950 460c13.333 0 25 4 35 12s15 17.333 15 28c0 26.667-16.667 40-50 40h-48c-33.333 0-50-13.333-50-40 0-10.667 5-20 15-28s21.667-12 35-12h48M500 226c76 0 141 26.667 195 80s81 118 81 194c0 77.333-27 142.667-81 196s-119 80-195 80-140.667-26.667-194-80-80-118.667-80-196c0-76 26.667-140.667 80-194s118-80 194-80m0 474c54.667 0 101.667-19.333 141-58s59-86 59-142c0-54.667-19.667-101.667-59-141s-86.333-59-141-59-101.667 19.667-141 59-59 86.333-59 141c0 56 19.667 103.333 59 142s86.333 58 141 58M150 500c0 26.667-16.667 40-50 40H50c-33.333 0-50-13.333-50-40 0-10.667 5-20 15-28s21.667-12 35-12h50c13.333 0 25 4 35 12s15 17.333 15 28m350-350c-10.667 0-20-5-28-15s-12-21.667-12-35V50c0-13.333 4-25 12-35s17.333-15 28-15c10.667 0 20 5 28 15s12 21.667 12 35v50c0 13.333-4 25-12 35s-17.333 15-28 15m0 700c10.667 0 20 5 28 15s12 21.667 12 35v50c0 13.333-4 25-12 35s-17.333 15-28 15c-10.667 0-20-5-28-15s-12-21.667-12-35v-50c0-13.333 4-25 12-35s17.333-15 28-15m368-660l-34 34c-22.667 22.667-44 25.333-64 8-18.667-18.667-16-40 8-64 2.667-4 14-16 34-36 24-22.667 45.333-24.667 64-6s16 40-8 64M168 778c9.333-10.667 20.333-16.667 33-18 12.667-1.333 22.333 2 29 10 8 8 11.333 18.333 10 31-1.333 12.667-6.667 23.667-16 33l-36 36c-9.333 9.333-20.333 14.667-33 16-12.667 1.333-22.333-2-29-10-20-18.667-18-40 6-64 4-2.667 16-14 36-34m20-646l36 36c24 24 26 45.333 6 64-6.667 6.667-16.333 9.333-29 8-12.667-1.333-23.667-6.667-33-16-20-20-32-31.333-36-34-9.333-9.333-14.667-20.333-16-33-1.333-12.667 2-23 10-31 6.667-8 16.333-11.333 29-10 12.667 1.333 23.667 6.667 33 16m590 702c-24-24-26.667-45.333-8-64s40-16 64 8l34 34c24 24 26.667 45.333 8 64s-40 16.667-64-6c-20-20-31.333-32-34-36" />
            </svg>
            <Link
              href="/"
              className="text-[#175CFF] bg-white text-base px-6 py-[10px] rounded-lg font-medium hover:bg-[#175CFF] hover:text-white border border-[#175CFF] transition duration-500 delay-150"
            >
              Sign In
            </Link>
            <Link
              href="/"
              className="text-white rounded-lg font-semibold bg-[#175cff] hover:bg-[#0044E3] text-base py-3 px-8"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
