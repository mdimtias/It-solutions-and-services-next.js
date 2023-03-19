const Subscribe = () => {
  return (
    <section className="bg-[#111827] py-14 lg:py-28 flex justify-center relative overflow-hidden">
      <div className="subscribe">
        <div className="section-heading text-center">
          <h4 className="text-base text-yellow-400 font-bold mb-3">
            Let's Try! Get Free Support
          </h4>
          <h2 className="text-4xl font-bold text-white mb-3">
            Start Your 14-Day Free Trial
          </h2>
          <p className="text-[#d9d9d9] text-base mb-3">
            We can help you to create your dream website for better business
            revenue.
          </p>
        </div>
        <div className="subscribe-form flex gap-3 justify-center">
          <div>
            <input
              type="text"
              className="px-2 py-3 bg-white w-full rounded-lg outline-none"
              placeholder="Your Email"
            />
          </div>
          <div>
            <button className="py-3 px-5 text-white bg-[#124acc] hover:bg-[#0044e3] rounded-lg font-bold">
              Join
            </button>
          </div>
        </div>
        <div className="subscribe-list flex gap-5 pt-5 flex-wrap">
          <div className="flex gap-2 items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              className="text-white"
            >
              <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
              <path d="M11 8a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-base text-[#d9d9d9]">Get our updated</p>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              className="text-white"
            >
              <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
              <path d="M11 8a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-base text-[#d9d9d9]">Get our updated</p>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              className="text-white"
            >
              <path d="M8 15A7 7 0 118 1a7 7 0 010 14zm0 1A8 8 0 108 0a8 8 0 000 16z" />
              <path d="M11 8a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-base text-[#d9d9d9]">Get our updated</p>
          </div>
        </div>
      </div>
      <div className="hidden md:block top-rounded-circle absolute top-[-240px] w-72 h-72 lg:w-80 lg:h-80 bg-[#FFC300] right-[5%] rounded-full"></div>
      <div className="hidden md:block top-rounded-circle absolute bottom-[-240px] w-72 h-72 lg:w-80 lg:h-80 bg-[#404040] left-[5%] rounded-full"></div>
    </section>
  );
};

export default Subscribe;
