import Image from "next/image";
import FeaturedHero from "./../../../assets/Feature/feature-hero-img.svg";
import FeaturedHeroTwo from "./../../../assets/Feature/feature-hero-img-2.svg";

const FeaturedTechnology = () => {
  return (
    <section className="featured-technology-section py-12 lg:py-24 min-h-screen bg-white relative dark:bg-[#171717] overflow-hidden">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div  data-aos="fade-right" className="featured-technology-content">
            <div>
              <h2 className="text-5xl text-black font-bold mb-3 dark:text-white">
                We are development experts on all technologies
              </h2>
              <p className="text-lg text-[#737373] dark:text-[#a3a3a3] mb-8">
                Quickly incubate functional channels with multidisciplinary
                architectures authoritatively fabricate formulate exceptional
                innovation.
              </p>
            </div>
            <div className="technology-features">
              <div className="flex items-start mb-6 gap-4">
                <div className="technology-icon p-[6px] rounded-md bg-[#175CFF] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-black dark:text-white">
                    Pixel Perfect Design
                  </h3>
                  <p className="text-lg text-[#737373] dark:text-[#a3a3a3]">
                    Progressively foster enterprise-wide systems whereas equity
                    invested web-readiness harness installed expedite virtual
                    networks.
                  </p>
                </div>
              </div>
              <div className="flex items-start mb-6 gap-4">
                <div className="technology-icon p-[6px] rounded-md bg-[#FF6B35] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-black dark:text-white">
                    Unique & Minimal Design
                  </h3>
                  <p className="text-lg text-[#737373] dark:text-[#a3a3a3]">
                    Dramatically administrate progressive metrics without
                    error-free globally simplify standardized plagiarize
                    technically sound.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="technology-icon p-[6px] rounded-md bg-[#111827] text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-16 h-16"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-black dark:text-white">
                    24/7 Free Online Support
                  </h3>
                  <p className="text-lg text-[#737373] dark:text-[#a3a3a3]">
                    Interactively whiteboard transparent testing procedures
                    before bricks-and-clicks initiatives competencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div  data-aos="fade-left" className="feature-hero-imag mt-6 lg:mt-0 flex items-center">
            <Image src={FeaturedHero} alt="Technology"></Image>
          </div>
          <div data-aos="fade-left" className="feature-hero-imag mt-6 lg:mt-0 pt-0 lg:pt-20 order-1 lg:-order-none">
            <Image src={FeaturedHeroTwo} alt="Technology"></Image>
          </div>
          <div data-aos="fade-right" className="feature-service-content pt-12 lg:pt-20">
            <div>
              <h2 className="text-5xl text-black font-bold mb-3 dark:text-white">
                We run all kinds of services in form of software
              </h2>
              <p className="text-lg text-[#737373] dark:text-[#a3a3a3] mb-8">
                Conceptualize multimedia based ROI and wireless intellectual
                capital. Dramatically seize visionary technologies whereas
                interactive value.
              </p>
            </div>
            <div className="help-service-content">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-5 justify-between">
                <div className="service-items">
                  <div className="flex gap-2 items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 bg-[#175CFF] text-white rounded-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p className="text-base text-[#737373] dark:text-[#a3a3a3]">
                      Thought leadership
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 bg-[#175CFF] text-white rounded-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p className="text-base text-[#737373] dark:text-[#a3a3a3]">
                      Modernized prospecting
                    </p>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 bg-[#175CFF] text-white rounded-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p className="text-base text-[#737373] dark:text-[#a3a3a3]">Better win rates</p>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 bg-[#175CFF] text-white rounded-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p className="text-base text-[#737373] dark:text-[#a3a3a3]">
                      Showcasing success
                    </p>
                  </div>
                </div>
                <div className="service-items">
                  <div className="flex gap-2 items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 bg-[#175CFF] text-white rounded-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p className="text-base text-[#737373] dark:text-[#a3a3a3]">Communicate fast</p>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 bg-[#175CFF] text-white rounded-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p className="text-base text-[#737373] dark:text-[#a3a3a3]">Sales compliance</p>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 bg-[#175CFF] text-white rounded-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p className="text-base text-[#737373] dark:text-[#a3a3a3]">Manage smartly</p>
                  </div>
                  <div className="flex gap-2 items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 bg-[#175CFF] text-white rounded-full"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    <p className="text-base text-[#737373] dark:text-[#a3a3a3]">
                      Personal branding
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTechnology;
