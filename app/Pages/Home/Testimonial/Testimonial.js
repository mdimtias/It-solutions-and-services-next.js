import Image from "next/image";
import QuotesDot from "./../../../assets/Review/quotes-dot.svg";
import Author1 from "./../../../assets/Review/1.jpg";
import Author3 from "./../../../assets/Review/3.jpg";
import Author4 from "./../../../assets/Review/4.jpg";
import Author5 from "./../../../assets/Review/5.jpg";
import Star from "./Star";

const Testimonial = () => {
  return (
    <section className="py-10 lg:py-20 bg-[#FAFAFA]">
      <div className="container mx-auto px-5">
        <div className="section-header text-center flex flex-col justify-center">
          <h4 className="font-bold text-lg text-[#175CFF] mb-2">Testimonial</h4>
          <h2 className="font-bold text-4xl text-black mb-3">
            What They Say About Us
          </h2>
          <div className="flex justify-center">
            <p className="text-base text-[#A1A1A1] lg:w-[60%]">
              Uniquely promote adaptive quality vectors rather than stand-alone
              e-markets pontificate alternative architectures with accurate
              schemas.
            </p>
          </div>
        </div>
        <div className="review-section grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="single-review border-2 border-[#DEDFE1] rounded-xl py-7 px-7">
            <div className="review-user-info flex gap-5 items-center mb-7">
              <div className="img relative">
                <Image
                  className="w-28 h-28"
                  src={QuotesDot}
                  alt="QuotesDot"
                ></Image>
                <Image
                  className="w-16 h-16 rounded-lg absolute right-3 bottom-3"
                  src={Author1}
                  alt="Mr Kaleda Akter"
                ></Image>
              </div>
              <div>
                <h3 className="font-bold text-xl text-black">
                Mr Kaleda Akter
                </h3>
                <p className="text-[#737373]">Founder & CEO</p>
              </div>
            </div>
            <div className="review-user-content">
              <h3 className="font-bold text-black text-lg mb-2">
                Amazing Quiety template!
              </h3>
              <p className="text-[#737373] text-base">
              Salesforce has been a game changer for our business. The platform allows us to manage our customer relationships and sales pipeline more effectively than ever before
              </p>
              <Star></Star>
            </div>
          </div>

          <div className="single-review border-2 border-[#DEDFE1] rounded-xl py-7 px-7">
            <div className="review-user-info flex gap-5 items-center mb-7">
              <div className="img relative">
                <Image
                  className="w-28 h-28"
                  src={QuotesDot}
                  alt="QuotesDot"
                ></Image>
                <Image
                  className="w-16 h-16 rounded-lg absolute right-3 bottom-3"
                  src={Author3}
                  alt="Mr Rohim Mia"
                ></Image>
              </div>
              <div>
                <h3 className="font-bold text-xl text-black">
                  Mr. Rohim Mia
                </h3>
                <p className="text-[#737373]">Founder & CEO</p>
              </div>
            </div>
            <div className="review-user-content">
              <h3 className="font-bold text-black text-lg mb-2">
                Amazing Quiety template!
              </h3>
              <p className="text-[#737373] text-base">Microsoft Office is a lifesaver for my business! The suite of programs is easy to use and allows me to complete tasks quickly and efficiently
              </p>
              <Star></Star>
            </div>
          </div>

          <div className="single-review border-2 border-[#DEDFE1] rounded-xl py-7 px-7">
            <div className="review-user-info flex gap-5 items-center mb-7">
              <div className="img relative">
                <Image
                  className="w-28 h-28"
                  src={QuotesDot}
                  alt="QuotesDot"
                ></Image>
                <Image
                  className="w-16 h-16 rounded-lg absolute right-3 bottom-3"
                  src={Author5}
                  alt="Mr Saidul Alom"
                ></Image>
              </div>
              <div>
                <h3 className="font-bold text-xl text-black">
                  Mr. Saidul Alom
                </h3>
                <p className="text-[#737373]">Founder & CEO</p>
              </div>
            </div>
            <div className="review-user-content">
              <h3 className="font-bold text-black text-lg mb-2">
                Amazing Quiety template!
              </h3>
              <p className="text-[#737373] text-base">
              The Salesforce mobile app is incredibly useful for our sales team. It allows us to access important information on-the-go and close deals faster.
              </p>
              <Star></Star>
            </div>
          </div>
          <div className="single-review border-2 border-[#DEDFE1] rounded-xl py-7 px-7">
            <div className="review-user-info flex gap-5 items-center mb-7">
              <div className="img relative">
                <Image
                  className="w-28 h-28"
                  src={QuotesDot}
                  alt="QuotesDot"
                ></Image>
                <Image
                  className="w-16 h-16 rounded-lg absolute right-3 bottom-3"
                  src={Author4}
                  alt="Mr Shofiqul Ali"
                ></Image>
              </div>
              <div>
                <h3 className="font-bold text-xl text-black">
                  Mr. Shofiqul Ali
                </h3>
                <p className="text-[#737373]">Founder & CEO</p>
              </div>
            </div>
            <div className="review-user-content">
              <h3 className="font-bold text-black text-lg mb-2">
                Amazing Quiety template!
              </h3>
              <p className="text-[#737373] text-base">
              Slack has revolutionized the way our team communicates. It's easy to use and helps us stay organized and connected, even when working remotely.
              </p>
              <Star></Star>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
