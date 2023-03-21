"use client";
// import { useClient } from 'next/client';
import Link from "next/link";
import Image from "next/image";
import Ai from "./../../../assets/Features/ai.png";
import Advanced from "./../../../assets/Features/advanced.png";
import AutomationPower from "./../../../assets/Features/automation-power.png";
import { useState } from "react";

const FeaturedServices = () => {
  const [activeSection, setActiveSection] = useState("ai");
  // const isClient = useClient(); // mark component as client-side

  // if (isClient) {
  //   return null; // don't render on server-side
  // }
  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="py-10 lg:py-20 bg-[#FAFAFA] dark:bg-[#262626]">
      <div className="container mx-auto px-5">
        <div className="section-heading text-center">
          <h4 className="text-xl text-[#175CFF] font-semibold mb-2">Features</h4>
          <h2 className="text-4xl font-bold text-black mb-3 lg-[60%] dark:text-white">
            Powerful Advanced Features
          </h2>
          <d className="flex justify-center items-center">
            <p className="text-[#737373] text-base mb-3 lg:w-[60%] dark:text-[#a3a3a3]">
              Dynamically initiate market positioning total linkage with
              clicks-and-mortar technology progressively procrastinate
              compelling.
            </p>
          </d>
        </div>
        <div className="featured-button flex flex-wrap gap-5 py-5 justify-center items-center">
          <button
            className={`py-3 px-5 text-center transition duration-500  hover:text-white hover:bg-[#0044e3] rounded-lg font-medium ${
              activeSection === "ai"
                ? "text-white bg-[#0044e3] "
                : "text-[#737373] bg-[rgba(216,216,216,.25)]"
            } dark:text-white`}
            onClick={() => handleButtonClick("ai")}
          >
            Ai & Data Science
          </button>
          <button
            className={`py-3 px-5 text-center transition duration-500  hover:text-white hover:bg-[#0044e3] rounded-lg font-medium ${
              activeSection === "automation-power"
                ? "text-white bg-[#0044e3] "
                : "text-[#737373] bg-[rgba(216,216,216,.25)]"
            } dark:text-white`}
            onClick={() => handleButtonClick("automation-power")}
          >
            Automation Power
          </button>
          <button
            className={`py-3 px-5 text-center transition duration-500  hover:text-white hover:bg-[#0044e3] rounded-lg font-medium ${
              activeSection === "advanced-technology"
                ? "text-white bg-[#0044e3] "
                : "text-[#737373] bg-[rgba(216,216,216,.25)]"
            } dark:text-white`}
            onClick={() => handleButtonClick("advanced-technology")}
          >
            Advanced Technology
          </button>
        </div>

        {/* Ai */}
        {activeSection === "ai" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 items-center">
            <div className="service-content mt-10">
              <h2 className="font-bold text-3xl text-black mb-3 dark:text-white">
                AI & Data Science
              </h2>
              <p className="text-lg text-[#737373] mb-2 dark:text-[#a3a3a3]">
                Continually network effective bandwidth whereas goal-oriented
                schemas. Intrinsicly incentivize corporate synergy with accurate
                task bricks-and-clicks leadership skills .
              </p>
              <br />
              <p className="text-lg text-[#737373] mb-5 dark:text-[#a3a3a3]">
                Conveniently develop innovative infomediaries for enabled
                functionalities. Dynamically coordinate leading-edge after
                virtual potentialities drive multidisciplinary infrastructures.
              </p>
              <div className="flex items-center gap-2 group">
                <Link href="" className="text-[#175CFF] font-semibold text-lg">
                  Know More About Us
                </Link>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  className="text-[25px] text-[#175CFF] group-hover:text-[28px] group-hover:ml-3 transition-all delay-300 duration-500"
                >
                  <path
                    fill="currentColor"
                    d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"
                  />
                </svg>
              </div>
            </div>
            <div className="service-image">
              <Image src={Ai} alt="Ai" />
            </div>
          </div>
        )}

        {/* Automation Power */}
        {activeSection === "automation-power" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 items-center">
            <div className="service-image">
              <Image src={AutomationPower} alt="Automation Power" />
            </div>
            <div className="service-content mt-10">
              <h2 className="font-bold text-3xl text-black mb-3 dark:text-white">
                Automation Power
              </h2>
              <p className="text-lg text-[#737373] mb-2 dark:text-[#a3a3a3]">
                Conveniently develop innovative infomediaries for enabled
                functionalities. Dynamically coordinate leading-edge corporate
                synergy after virtual potentialities.
              </p>
              <br />
              <p className="text-lg text-[#737373] mb-5 dark:text-[#a3a3a3]">
                Continually network effective bandwidth whereas goal-oriented
                schemas. Intrinsicly with accurate meta-services. Rapidiously
                parallel task bricks-and-clicks leadership skills with
                revolutionary.
              </p>
              <div className="flex items-center gap-2 group">
                <Link href="" className="text-[#175CFF] font-semibold text-lg">
                  Know More About Us
                </Link>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  className="text-[25px] text-[#175CFF] group-hover:text-[28px] group-hover:ml-3 transition-all delay-300 duration-500"
                >
                  <path
                    fill="currentColor"
                    d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Advance Technology */}
        {activeSection === "advanced-technology" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8 items-center">
            <div className="service-content mt-10">
              <h2 className="font-bold text-3xl text-black mb-3 dark:text-white">
                Advanced Technology
              </h2>
              <p className="text-lg text-[#737373] mb-2 dark:text-[#a3a3a3]">
                Intrinsicly incentivize corporate synergy with accurate
                meta-services. Rapidiously parallel task bricks-and-clicks.
                Leadership skills with revolutionary convergence conveniently
                develop.
              </p>
              <br />
              <p className="text-lg text-[#737373] mb-5 dark:text-[#a3a3a3]">
                Continually expedite business systems without premier testing
                procedures architect principle-centered e-tailers for
                progressive maintain open-source solutions.
              </p>
              <div className="flex items-center gap-2 group">
                <Link href="" className="text-[#175CFF] font-semibold text-lg">
                  Know More About Us
                </Link>
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  className="text-[25px] text-[#175CFF] group-hover:text-[28px] group-hover:ml-3 transition-all delay-300 duration-500"
                >
                  <path
                    fill="currentColor"
                    d="M15.038 6.343l-1.411 1.418 3.27 3.255-13.605.013.002 2 13.568-.013-3.215 3.23 1.417 1.41 5.644-5.67-5.67-5.643z"
                  />
                </svg>
              </div>
            </div>
            <div className="service-image">
              <Image src={Advanced} alt="Advanced" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedServices;
