import React from "react";
import Airbnb from "./../../../assets/TopBrand/airbnb.png";
import Figma from "./../../../assets/TopBrand/figma.png";
import Facebook from "./../../../assets/TopBrand/facebook.png";
import SalesForce from "./../../../assets/TopBrand/sales-force.png";
import Atlassian from "./../../../assets/TopBrand/atlassian.png";
import DropBox2 from "./../../../assets/TopBrand/dropbox-2.png";
import Dynamic365 from "./../../../assets/TopBrand/dynamic-365.png";
import ERecruiter from "./../../../assets/TopBrand/e-recruiter.png";
import EverNote from "./../../../assets/TopBrand/ever-note.png";
import Google from "./../../../assets/TopBrand/google-icon.png";
import Slack from "./../../../assets/TopBrand/slack.png";
import GoogleAnalytics from "./../../../assets/TopBrand/google-analytics.png";
import HubSpot from "./../../../assets/TopBrand/hub-spot.png";
import Instagram from "./../../../assets/TopBrand/instagram.png";
import MailChimp from "./../../../assets/TopBrand/mailChimp.png";
import GoogleDrive from "./../../../assets/TopBrand/google-drive.png";
import Linkedin from "./../../../assets/TopBrand/linkedin.png";
import Marekto from "./../../../assets/TopBrand/marekto.png";
import Image from "next/image";
const Integration = () => {
  return (
    <div className="integration-section py-14 lg:py-28 bg-white dark:bg-[#171717]">
      <div className="container mx-auto px-5">
        <div className="section-heading grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-center">
          <div>
            <h4 className="text-base text-[#175CFF] font-bold mb-2">
              Integration
            </h4>
            <h2 className="text-4xl font-bold mb-3 text-black dark:text-white">
              We Collaborate with Top Software Company
            </h2>
            <p className="text-base text-[#939393] dark:text-[#a3a3a3]">
              Dynamically pursue convergence rather than 24/7 process
              improvements develop end-to-end customer service action items.
            </p>
          </div>
          <div className="lg:text-right">
            <button className="py-3 px-10 text-white lg:text-right bg-[#124acc] hover:bg-[#0044e3] rounded-lg font-bold">
             View All Integrations
            </button>
          </div>
        </div>
        <div className="top-brands mt-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-7">
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={Airbnb} alt="Airbnb" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Airbnb</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={Figma} alt="Airbnb" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Figma</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={Facebook} alt="Facebook" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Facebook</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={SalesForce} alt="Sales Force" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Sales Force</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={Atlassian} alt="Atlassian" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Atlassian</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={DropBox2} alt="DropBox2" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Drop Box</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={Dynamic365} alt="Dynamic365" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Dynamic365</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={ERecruiter} alt="ERecruiter" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">ERecruiter</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={EverNote} alt="EverNote" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">EverNote</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={Google} alt="Google" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Google</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={Slack} alt="Slack" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Slack</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image
              src={GoogleAnalytics}
              alt="GoogleAnalytics"
              className="mb-2"
            />
            <h3 className="font-bold text-xl text-black dark:text-white">Analytics</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={Instagram} alt="Instagram" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Instagram</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={HubSpot} alt="HubSpot" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">HubSpot</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={MailChimp} alt="MailChimp" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">MailChimp</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={Linkedin} alt="Linkedin" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Linkedin</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={GoogleDrive} alt="GoogleDrive" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Google Drive</h3>
          </div>
          <div className="top-brand rounded-md py-5 shadow-[0_5px_50px_rgba(13,21,55,.06)] hover:shadow-[0_20px_20px_0_rgba(2,19,79,.1)] flex flex-col justify-center items-center  hover:translate-y-[-2px] transition-all duration-300 dark:bg-[#0C0800]">
            <Image src={Marekto} alt="Marekto" className="mb-2" />
            <h3 className="font-bold text-xl text-black dark:text-white">Marekto</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Integration;
