import Link from "next/link";
import AnswerArrow from "./AnswerArrow";
import RightArrow from "./RightArrow";
const BestServices = () => {
  return (
    <section id="services" className="py-10 lg:py-20 bg-[#111827] overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="section-heading text-center flex flex-col justify-center items-center">
          <h4 className="text-base text-[#175CFF] font-bold mb-3">Services</h4>
          <h2 className="text-4xl font-bold text-white mb-3 lg:w-[40%]">
            Best Services Grow Your Business Value
          </h2>
          <d className="flex justify-center items-center">
            <p className="text-[#737373] text-base mb-3 lg:w-[60%] dark:text-[#d9d9d9]">
              Globally actualize cost effective with resource maximizing
              leadership skills.
            </p>
          </d>
        </div>
        <div data-aos="zoom-out-right" className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 justify-center mb-10">
          <div className="service-item p-12 bg-[rgba(255,255,255,.1)] flex flex-col gap-5 rounded-xl border-[3px] border-[#29303D] hover:border-[#175cff] hover:bg-[#111827] hover:translate-3 transition-all duration-500">
            <div className="icon flex justify-center items-center bg-[#124acc] p-5 w-16 h-16 rounded-lg">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                className="text-white text-4xl"
              >
                <path d="M15.86 4.39v15c0 1.67 1.14 2.61 2.39 2.61 1.14 0 2.39-.79 2.39-2.61V4.5c0-1.54-1.14-2.5-2.39-2.5s-2.39 1.06-2.39 2.39M9.61 12v7.39C9.61 21.07 10.77 22 12 22c1.14 0 2.39-.79 2.39-2.61v-7.28c0-1.54-1.14-2.5-2.39-2.5S9.61 10.67 9.61 12m-3.86 5.23c1.32 0 2.39 1.07 2.39 2.38a2.39 2.39 0 11-4.78 0c0-1.31 1.07-2.38 2.39-2.38z" />
              </svg>
            </div>
            <div className="service-heading">
              <h2 className="font-semibold text-xl text-white mb-2">
                Advanced analytics
              </h2>
              <p className="text-base text-[#d9d9d9]">
                Synergistically pursue accurate initiatives without economically
                sound imperatives.
              </p>
              <br />
              <p className="text-base text-[#d9d9d9]">
                Professionally architect unique process improvements via
                optimal.
              </p>
            </div>
            <div className="services-list">
              <h3 className="font-bold text-lg text-white">Included with...</h3>
              <div className="service-list flex flex-col gap-3 mt-3">
                <div className="flex gap-3 items-center">
                  <div className="icon">
                    <svg
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      height="1em"
                      width="1em"
                      className="text-[#175CFF]"
                    >
                      <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
                      <path d="M11 8a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="text-base text-[#d9d9d9]">High -converting</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="icon">
                    <AnswerArrow></AnswerArrow>
                  </div>
                  <p className="text-base text-[#d9d9d9]">Personal branding</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="icon">
                    <AnswerArrow></AnswerArrow>
                  </div>
                  <p className="text-base text-[#d9d9d9]">
                    Modernized prospecting
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="icon">
                    <AnswerArrow></AnswerArrow>
                  </div>
                  <p className="text-base text-[#d9d9d9]">Clean and modern</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="icon">
                    <AnswerArrow></AnswerArrow>
                  </div>
                  <p className="text-base text-[#d9d9d9]">Showcasing success</p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="icon">
                    <AnswerArrow></AnswerArrow>
                  </div>
                  <p className="text-base text-[#d9d9d9]">
                    Bootstrap latest version
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="icon">
                    <AnswerArrow></AnswerArrow>
                  </div>
                  <p className="text-base text-[#d9d9d9]">High -converting</p>
                </div>
              </div>
            </div>
            <div className="view-detail group">
              <Link href="" className="flex gap-3">
                <h3 className="font-bold text-white">View Details</h3>
                <RightArrow></RightArrow>
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-7" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className="service-item p-12 bg-[rgba(255,255,255,.1)] flex flex-col gap-5 rounded-xl border-[3px] border-[#29303D] hover:border-[#175cff] hover:bg-[#111827] hover:translate-3 transition-all duration-500">
              <div className="icon flex justify-center items-center bg-[#273d26] p-5 w-16 h-16 rounded-lg">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  className="text-[#74B51B] text-4xl"
                >
                  <path
                    fill="currentColor"
                    d="M6 6a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM6 10a1 1 0 011-1h10a1 1 0 110 2H7a1 1 0 01-1-1zM7 13a1 1 0 100 2h10a1 1 0 100-2H7zM6 18a1 1 0 011-1h4a1 1 0 110 2H7a1 1 0 01-1-1z"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M2 4a3 3 0 013-3h14a3 3 0 013 3v16a3 3 0 01-3 3H5a3 3 0 01-3-3V4zm3-1h14a1 1 0 011 1v16a1 1 0 01-1 1H5a1 1 0 01-1-1V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="service-heading">
                <h2 className="font-semibold text-xl text-white mb-2">
                  Automated Reports
                </h2>
                <p className="text-base text-[#d9d9d9]">
                  Synergistically pursue accurate initiatives without
                  economically imperatives.
                </p>
              </div>
              <div className="view-detail group">
                <Link href="" className="flex gap-3">
                  <h3 className="font-bold text-white">View Details</h3>
                  <RightArrow></RightArrow>
                </Link>
              </div>
            </div>
            <div className="service-item h-full p-12 bg-[rgba(255,255,255,.1)] flex flex-col gap-5 rounded-xl border-[3px] border-[#29303D] hover:border-[#175cff] hover:bg-[#111827] hover:translate-3 transition-all duration-500">
              <div className="icon flex justify-center items-center bg-[#7B7F86] p-5 w-16 h-16 rounded-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="text-white text-4xl"
                >
                  <path d="M4 2a2 2 0 00-2 2v8h2V8h2v4h2V4a2 2 0 00-2-2H4m0 2h2v2H4m18 9.5V14a2 2 0 00-2-2h-4v10h4a2 2 0 002-2v-1.5a1.54 1.54 0 00-1.5-1.5 1.54 1.54 0 001.5-1.5M20 20h-2v-2h2v2m0-4h-2v-2h2M5.79 21.61l-1.58-1.22 14-18 1.58 1.22z" />
                </svg>
              </div>
              <div className="service-heading">
                <h2 className="font-semibold text-xl text-white mb-2">
                  Compare A/B Testing
                </h2>
                <p className="text-base text-[#d9d9d9]">
                  Credibly disintermediate functional processes for team driven
                  action.
                </p>
              </div>
              <div className="view-detail group">
                <Link href="" className="flex gap-3">
                  <h3 className="font-bold text-white">View Details</h3>
                  <RightArrow></RightArrow>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-7" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
            <div className="service-item h-full p-12 bg-[rgba(255,255,255,.1)] flex flex-col gap-5 rounded-xl border-[3px] border-[#29303D] hover:border-[#175cff] hover:bg-[#111827] hover:translate-3 transition-all duration-500">
              <div className="icon flex justify-center items-center bg-[#41282A] p-5 w-16 h-16 rounded-lg">
                <svg
                  viewBox="0 0 640 512"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="text-[#FF6B35] text-4xl"
                >
                  <path d="M352 128c0 70.7-57.3 128-128 128S96 198.7 96 128 153.3 0 224 0s128 57.3 128 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8 2.4-.1 4.7-.2 7.1-.2h61.4c89.1 0 161.3 72.2 161.3 161.3 0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9 19.7-26.6 31.3-59.5 31.3-95.1 0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                </svg>
              </div>
              <div className="service-heading">
                <h2 className="font-semibold text-xl text-white mb-2">
                  User Journey Flow
                </h2>
                <p className="text-base text-[#d9d9d9]">
                  Quickly product prospective value before collaborative
                  benefits.
                </p>
              </div>
              <div className="view-detail group">
                <Link href="" className="flex gap-3">
                  <h3 className="font-bold text-white">View Details</h3>
                  <RightArrow></RightArrow>
                </Link>
              </div>
            </div>
            <div className="service-item h-full p-12 bg-[rgba(255,255,255,.1)] flex flex-col gap-5 rounded-xl border-[3px] border-[#29303D] hover:border-[#175cff] hover:bg-[#111827] hover:translate-3 transition-all duration-500">
              <div className="icon flex justify-center items-center bg-[#413A1F] p-5 w-16 h-16 rounded-lg">
                <svg
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="text-[#FFC300] text-4xl"
                >
                  <path d="M304 256 A48 48 0 0 1 256 304 A48 48 0 0 1 208 256 A48 48 0 0 1 304 256 z" />
                  <path d="M470.39 300l-.47-.38-31.56-24.75a16.11 16.11 0 01-6.1-13.33v-11.56a16 16 0 016.11-13.22L469.92 212l.47-.38a26.68 26.68 0 005.9-34.06l-42.71-73.9a1.59 1.59 0 01-.13-.22A26.86 26.86 0 00401 92.14l-.35.13-37.1 14.93a15.94 15.94 0 01-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 01-8.19-11.82l-5.59-39.59-.12-.72A27.22 27.22 0 00298.76 26h-85.52a26.92 26.92 0 00-26.45 22.39l-.09.56-5.57 39.67a16 16 0 01-8.13 11.82 175.21 175.21 0 00-10 5.82 15.92 15.92 0 01-14.43 1.27l-37.13-15-.35-.14a26.87 26.87 0 00-32.48 11.34l-.13.22-42.77 73.95a26.71 26.71 0 005.9 34.1l.47.38 31.56 24.75a16.11 16.11 0 016.1 13.33v11.56a16 16 0 01-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 00-5.9 34.06l42.71 73.9a1.59 1.59 0 01.13.22 26.86 26.86 0 0032.45 11.3l.35-.13 37.07-14.93a15.94 15.94 0 0114.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 018.19 11.82l5.56 39.59.12.72A27.22 27.22 0 00213.24 486h85.52a26.92 26.92 0 0026.45-22.39l.09-.56 5.57-39.67a16 16 0 018.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0114.43-1.27l37.13 14.95.35.14a26.85 26.85 0 0032.48-11.34 2.53 2.53 0 01.13-.22l42.71-73.89a26.7 26.7 0 00-5.89-34.11zm-134.48-40.24a80 80 0 11-83.66-83.67 80.21 80.21 0 0183.66 83.67z" />
                </svg>
              </div>
              <div className="service-heading">
                <h2 className="font-semibold text-xl text-white mb-2">
                  Easy Customization
                </h2>
                <p className="text-base text-[#d9d9d9]">
                  Dynamically develop ubiquitous opportunities whereas
                  relationships.
                </p>
              </div>
              <div className="view-detail group">
                <Link href="" className="flex gap-3">
                  <h3 className="font-bold text-white">View Details</h3>
                  <RightArrow></RightArrow>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestServices;
