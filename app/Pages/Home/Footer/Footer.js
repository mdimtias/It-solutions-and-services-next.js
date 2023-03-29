import Image from "next/image";
import Link from "next/link";
import Star from "./Star";
import Logo from "./../../../assets/Logo/logo.png";
import HeroBottomImage from "./../../../assets/Hero/hero-bottom-image.svg";

const Footer = () => {
    return (
        <>
        <section className="footer py-10 lg:py-20 bg-[#111826] dark:bg-[#111826] relative">
            <Image src={HeroBottomImage} alt="It Consultancy" className="absolute bottom-0"></Image>
            <div className="container mx-auto px-5 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    <div className="subscribe">
                         <div className="flex items-center gap-5">
                            <Image src={Logo} className="w-16 h-16" alt=""></Image>
                            <h2 className="font-bold text-xl text-white dark:text-white">SoftBik</h2>
                         </div>
                        <p className="text-base text-[#d9d9d9] py-5">Our latest news, articles, and resources, we will sent to your inbox weekly.</p>
                        <div className="flex flex-wrap gap-5">
                            <input type="text" className="py-3 px-5 outline-none bg-white border-[2px] rounded-md border-[#0044E3]" placeholder="write" />
                            <button className="bg-green text-white bg-[#0044E3] text-lg font-bold py-2 px-10 rounded-lg">Subscribe</button>
                        </div>
                        <h5 className="text-lg font-bold text-[#d9d9d9] mt-5">10/10 Overall rating</h5>
                        <Star></Star>
                    </div>
                    <div className="primary-pages">
                        <h2 className="font-bold text-white text-lg mb-7 dark:text-white">Primary Pages</h2>
                        <ul>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Home</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">About Us</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Services</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Career</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Integrations</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Integration Single</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="pages">
                        <h2 className="font-bold text-white text-lg mb-7 dark:text-white">Pages</h2>
                        <ul>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Pricing</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Blog</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Blog Details</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Contact</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Career Single</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Services Single</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="primary-pages">
                        <h2 className="font-bold text-white text-lg mb-7 dark:text-white">Template</h2>
                        <ul>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Home</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">About Us</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Services</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Career</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Integrations</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#d9d9d9] hover:text-white font-medium">Integration Single</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
        </section>
        <div className="copyright bg-[#111827] border-t-[1px] border-t-[#3a3a3a]">
        <div className="container mx-auto px-5">
        <div className="flex justify-between gap-5 flex-col md:flex-row flex-wrap py-6 items-center">
                    <p className="text-base text-[#d4d4d4]">&#169; 2023 SoftBik All Rights Reserved.</p>
                    <div className="social-share flex gap-5">
                        <div className="facebook transition-all duration-500 w-9 h-9 border-[2px] border-[#FFFFFF1F] rounded-sm flex justify-center items-center hover:bg-[#175CFF]">
                        <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className="text-white text-2xl"
    >
      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
    </svg>
                        </div>
                        <div className="twitter transition-all duration-500 w-9 h-9 border-[2px] border-[#FFFFFF1F] rounded-sm flex justify-center items-center hover:bg-[#175CFF]">
                        <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className="text-white text-2xl"
    >
         <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 005.001-1.721 4.036 4.036 0 01-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 01-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 01-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 008.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 014.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 002.556-.973 4.02 4.02 0 01-1.771 2.22 8.073 8.073 0 002.319-.624 8.645 8.645 0 01-2.019 2.083z" />
    </svg>
                        </div>
                        <div className="linkedin transition-all duration-500 w-9 h-9 border-[2px] border-[#FFFFFF1F] rounded-sm flex justify-center items-center hover:bg-[#175CFF]">
                        <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className="text-white text-2xl"
    >
       <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 110-3.096 1.548 1.548 0 010 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
    </svg>
                        </div>
                        <div className="github transition-all duration-500 w-9 h-9 border-[2px] border-[#FFFFFF1F] rounded-sm flex justify-center items-center hover:bg-[#175CFF]">
                        <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className="text-white text-2xl"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
                        </div>
                        <div className="instagram transition-all duration-500 w-9 h-9 border-[2px] border-[#FFFFFF1F] rounded-sm flex justify-center items-center hover:bg-[#175CFF]">
                        <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      className="text-white text-2xl"
    >
      <path d="M11.999 7.377a4.623 4.623 0 100 9.248 4.623 4.623 0 000-9.248zm0 7.627a3.004 3.004 0 110-6.008 3.004 3.004 0 010 6.008z" />
      <path d="M17.884 7.207 A1.078 1.078 0 0 1 16.806 8.285 A1.078 1.078 0 0 1 15.728000000000002 7.207 A1.078 1.078 0 0 1 17.884 7.207 z" />
      <path d="M20.533 6.111A4.605 4.605 0 0017.9 3.479a6.606 6.606 0 00-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 00-2.184.42 4.6 4.6 0 00-2.633 2.632 6.585 6.585 0 00-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 002.634 2.632 6.584 6.584 0 002.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 002.186-.419 4.613 4.613 0 002.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 00-.421-2.217zm-1.218 9.532a5.043 5.043 0 01-.311 1.688 2.987 2.987 0 01-1.712 1.711 4.985 4.985 0 01-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 01-1.669-.311 2.985 2.985 0 01-1.719-1.711 5.08 5.08 0 01-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 01.311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 011.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 011.67.311 2.991 2.991 0 011.712 1.712 5.08 5.08 0 01.311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z" />
    </svg>
                        </div>
                    </div>
                    </div>
        </div>
        </div>
        </>
    );
};

export default Footer;