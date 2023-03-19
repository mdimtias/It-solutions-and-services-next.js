import Image from "next/image";
import Blob from "./../../../assets/Reports/blob.svg";

const Reports = () => {
  return (
    <section className="reports-section py-12 lg:py-24 bg-[#111827] relative overflow-hidden">
      <div className="hidden md:block top-rounded-circle absolute top-[-240px] lg:top-[-220px] w-72 h-72 lg:w-80 lg:h-80 bg-[#FFC300] left-[5%] rounded-full"></div>
      <div className="hidden md:block top-rounded-circle absolute bottom-[-240px] w-72 h-72 lg:w-80 lg:h-80 bg-[#404040] left-[35%] rounded-full"></div>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-10 lg:gap-5">
          <div className="flex flex-col lg:mr-20">
            <h2 className="font-bold text-4xl text-white mb-3">
              Actionable Reports to Grow your Business
            </h2>
            <p className="text-base text-[#d9d9d9]">
              Conveniently syndicate client-centric users for transparent
              scenarios. Uniquely evolve partnerships rather than cross-platform
              interfaces.
            </p>
            <button className="w-48 py-3 px-5 text-center text-white bg-[#124acc] hover:bg-[#0044e3] rounded-lg font-bold mt-5">
              Get Start Now
            </button>
          </div>
          <div className="success-rate relative">
            <Image src={Blob} className="w-full h-full absolute"></Image>
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 relative">
              <div className="flex flex-col gap-5">
                <div className="bg-white flex flex-col justify-center items-center py-10 px-10 rounded-xl">
                  <h3 className="text-black font-bold text-6xl mb-4">9/10</h3>
                  <p className="text-base text-[#737373] text-center">
                    Overall our customer satisfaction score
                  </p>
                </div>
                <div className="bg-white flex flex-col justify-center items-center py-10 px-10 rounded-xl">
                  <h3 className="text-black font-bold text-6xl mb-4">15K+</h3>
                  <p className="text-base text-[#737373] text-center">
                    Happy customer in worldwide
                  </p>
                </div>
              </div>
              <div className="bg-white  flex flex-col justify-center items-center py-10 px-10 rounded-xl">
                <h3 className="text-black font-bold text-6xl mb-4">90%</h3>
                <p className="text-base text-[#737373] text-center">
                  Our Customer customer satisfaction score
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
