import Image from "next/image";
import Link from "next/link";
import Star from "./Star";
import Logo from "./../../../assets/Logo/logo.png";

const Footer = () => {
    return (
        <section className="footer py-10 lg:py-20 bg-[#FFFFFF] dark:bg-black">
            <div className="container mx-auto px-5 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="subscribe">
                         <div className="flex items-center gap-5">
                            <Image src={Logo} className="w-16 h-16"></Image>
                            <h2 className="font-bold text-xl text-black dark:text-white">SoftBik</h2>
                         </div>
                        <p className="text-base text-[#737373] py-5">Our latest news, articles, and resources, we will sent to your inbox weekly.</p>
                        <div className="flex flex-wrap gap-5">
                            <input type="text" className="py-3 px-5 bg-white border-[2px] rounded-md border-[#0044E3]" placeholder="write" />
                            <button className="bg-green text-white bg-[#0044E3] text-lg font-bold py-2 px-10 rounded-lg">Subscribe</button>
                        </div>
                        <h5 className="text-lg font-bold text-[#737373] mt-5">10/10 Overall rating</h5>
                        <Star></Star>
                    </div>
                    <div className="primary-pages">
                        <h2 className="text-bold text-black text-lg mb-7 dark:text-white">Primary Pages</h2>
                        <ul>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Home</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">About Us</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Services</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Career</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Integrations</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Integration Single</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="pages">
                        <h2 className="text-bold text-black text-lg mb-7 dark:text-white">Pages</h2>
                        <ul>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Pricing</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Blog</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Blog Details</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Contact</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Career Single</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Services Single</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="primary-pages">
                        <h2 className="text-bold text-black text-lg mb-7 dark:text-white">Template</h2>
                        <ul>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Home</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">About Us</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Services</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Career</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Integrations</Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="text-base text-[#737373] font-medium">Integration Single</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;