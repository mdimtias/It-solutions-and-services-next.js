import Link from "next/link";
import AnswerArrow from "./AnswerArrow";
import RightArrow from "./RightArrow";
const BestServices = () => {
  return (
    <section className="py-10 lg:py-20 bg-[#111827]">
      <div className="container mx-auto px-5">
        <div className="section-heading text-center flex flex-col justify-center items-center">
          <h4 className="text-base text-[#175CFF] font-bold mb-3">Services</h4>
          <h2 className="text-4xl font-bold text-white mb-3 lg:w-[40%]">
            Best Services Grow Your Business Value
          </h2>
          <d className="flex justify-center items-center">
            <p className="text-[#737373] text-base mb-3 lg:w-[60%]">
              Globally actualize cost effective with resource maximizing
              leadership skills.
            </p>
          </d>
        </div>
        <div className="services grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-10 justify-center mb-10">
          <div className="service-item p-12 bg-[rgba(255,255,255,.1)] flex flex-col gap-5 rounded-xl border-[3px] border-[#29303D] hover:border-[#175cff] hover:bg-[#111827] hover:translate-3 transition-all duration-500">
            <div className="icon flex justify-center items-center bg-[#132552] p-5 w-16 h-16 rounded-lg">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
                className="text-[#1646B9] text-4xl"
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
          <div className="flex flex-col justify-between gap-7">
            <div className="service-item p-12 bg-[rgba(255,255,255,.1)] flex flex-col gap-5 rounded-xl border-[3px] border-[#29303D] hover:border-[#175cff] hover:bg-[#111827] hover:translate-3 transition-all duration-500">
              <div className="icon flex justify-center items-center bg-[#132552] p-5 w-16 h-16 rounded-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="text-[#1646B9] text-4xl"
                >
                  <path d="M15.86 4.39v15c0 1.67 1.14 2.61 2.39 2.61 1.14 0 2.39-.79 2.39-2.61V4.5c0-1.54-1.14-2.5-2.39-2.5s-2.39 1.06-2.39 2.39M9.61 12v7.39C9.61 21.07 10.77 22 12 22c1.14 0 2.39-.79 2.39-2.61v-7.28c0-1.54-1.14-2.5-2.39-2.5S9.61 10.67 9.61 12m-3.86 5.23c1.32 0 2.39 1.07 2.39 2.38a2.39 2.39 0 11-4.78 0c0-1.31 1.07-2.38 2.39-2.38z" />
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
              <div className="icon flex justify-center items-center bg-[#132552] p-5 w-16 h-16 rounded-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="text-[#1646B9] text-4xl"
                >
                  <path d="M15.86 4.39v15c0 1.67 1.14 2.61 2.39 2.61 1.14 0 2.39-.79 2.39-2.61V4.5c0-1.54-1.14-2.5-2.39-2.5s-2.39 1.06-2.39 2.39M9.61 12v7.39C9.61 21.07 10.77 22 12 22c1.14 0 2.39-.79 2.39-2.61v-7.28c0-1.54-1.14-2.5-2.39-2.5S9.61 10.67 9.61 12m-3.86 5.23c1.32 0 2.39 1.07 2.39 2.38a2.39 2.39 0 11-4.78 0c0-1.31 1.07-2.38 2.39-2.38z" />
                </svg>
              </div>
              <div className="service-heading">
                <h2 className="font-semibold text-xl text-white mb-2">
                Compare A/B Testing
                </h2>
                <p className="text-base text-[#d9d9d9]">
                Credibly disintermediate functional processes for team driven action.
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
          <div className="flex flex-col justify-between gap-7">
            <div className="service-item h-full p-12 bg-[rgba(255,255,255,.1)] flex flex-col gap-5 rounded-xl border-[3px] border-[#29303D] hover:border-[#175cff] hover:bg-[#111827] hover:translate-3 transition-all duration-500">
              <div className="icon flex justify-center items-center bg-[#132552] p-5 w-16 h-16 rounded-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="text-[#1646B9] text-4xl"
                >
                  <path d="M15.86 4.39v15c0 1.67 1.14 2.61 2.39 2.61 1.14 0 2.39-.79 2.39-2.61V4.5c0-1.54-1.14-2.5-2.39-2.5s-2.39 1.06-2.39 2.39M9.61 12v7.39C9.61 21.07 10.77 22 12 22c1.14 0 2.39-.79 2.39-2.61v-7.28c0-1.54-1.14-2.5-2.39-2.5S9.61 10.67 9.61 12m-3.86 5.23c1.32 0 2.39 1.07 2.39 2.38a2.39 2.39 0 11-4.78 0c0-1.31 1.07-2.38 2.39-2.38z" />
                </svg>
              </div>
              <div className="service-heading">
                <h2 className="font-semibold text-xl text-white mb-2">
                User Journey Flow
                </h2>
                <p className="text-base text-[#d9d9d9]">
                Quickly product prospective value before collaborative benefits.
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
              <div className="icon flex justify-center items-center bg-[#132552] p-5 w-16 h-16 rounded-lg">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  height="1em"
                  width="1em"
                  className="text-[#1646B9] text-4xl"
                >
                  <path d="M15.86 4.39v15c0 1.67 1.14 2.61 2.39 2.61 1.14 0 2.39-.79 2.39-2.61V4.5c0-1.54-1.14-2.5-2.39-2.5s-2.39 1.06-2.39 2.39M9.61 12v7.39C9.61 21.07 10.77 22 12 22c1.14 0 2.39-.79 2.39-2.61v-7.28c0-1.54-1.14-2.5-2.39-2.5S9.61 10.67 9.61 12m-3.86 5.23c1.32 0 2.39 1.07 2.39 2.38a2.39 2.39 0 11-4.78 0c0-1.31 1.07-2.38 2.39-2.38z" />
                </svg>
              </div>
              <div className="service-heading">
                <h2 className="font-semibold text-xl text-white mb-2">
                Easy Customization
                </h2>
                <p className="text-base text-[#d9d9d9]">
                Dynamically develop ubiquitous opportunities whereas relationships.
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
